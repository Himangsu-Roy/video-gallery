import { useState, useEffect } from "@wordpress/element";
import { SelectControl, Spinner, Notice } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";

/**
 * ProductSelector Component
 * Allows users to search and select WooCommerce products
 */
const ProductSelector = ({ value, onChange }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch products on component mount and when debounced search term changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await apiFetch({
          path: `/vcg/v1/products/search?search=${encodeURIComponent(
            debouncedSearchTerm
          )}&per_page=50`,
        });

        setProducts(response);
      } catch (err) {
        setError(
          err.message || __("Failed to load products", "video-carousel-gallery")
        );
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedSearchTerm]);

  // Fetch selected product if value exists and not in current list
  useEffect(() => {
    if (!value) return;

    const selectedProduct = products.find(
      (p) => p.id.toString() === value.toString()
    );
    if (selectedProduct) return;

    const fetchSelectedProduct = async () => {
      try {
        const response = await apiFetch({
          path: `/vcg/v1/products/${value}`,
        });

        setProducts((prev) => {
          // Check if already added to avoid duplicates
          if (prev.some((p) => p.id === response.id)) return prev;
          return [response, ...prev];
        });
      } catch (err) {
        console.error("Failed to fetch selected product:", err);
      }
    };

    fetchSelectedProduct();
  }, [value]);

  return (
    <div className="vcg-product-selector">
      {error && (
        <Notice status="error" isDismissible={false}>
          {error}
        </Notice>
      )}

      <div
        style={{
          position: "relative",
          marginBottom: "8px",
          marginTop: "10px",
        }}>
        <input
          type="text"
          className="components-text-control__input"
          placeholder={__("Search products...", "video-carousel-gallery")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%" }}
        />
        {loading && (
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}>
            <Spinner />
          </div>
        )}
      </div>

      <SelectControl
        label={__("Select Product", "video-carousel-gallery")}
        value={value || ""}
        options={[
          {
            label: __("-- Select a product --", "video-carousel-gallery"),
            value: "",
          },
          ...products.map((product) => ({
            label: `${product.title}`,
            // label: `${product.title} - ${product.price_html}`,
            value: product.id.toString(),
          })),
        ]}
        onChange={(selectedId) => {
          const selectedProduct = products.find(
            (p) => p.id.toString() === selectedId
          );
          onChange(selectedProduct);
        }}
      />

      {value && (
        <div
          className="vcg-selected-product-preview"
          style={{
            marginTop: "12px",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}>
          <p style={{ margin: "0 0 8px 0", fontWeight: "600" }}>
            {__("Selected Product:", "video-carousel-gallery")}
          </p>
          {products.find((p) => p.id.toString() === value?.toString()) && (
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <img
                src={
                  products.find((p) => p.id.toString() === value?.toString())
                    .image
                }
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <div>
                <div style={{ fontWeight: "500" }}>
                  {
                    products.find((p) => p.id.toString() === value?.toString())
                      .title
                  }
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: products.find(
                      (p) => p.id.toString() === value?.toString()
                    ).price_html,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSelector;
