import { useState, useEffect } from "react";
const apiFetch = window?.wp?.apiFetch;


/**
 * Custom hook to fetch WooCommerce product data
 * @param {number|null} productId - WooCommerce product ID
 * @param {boolean} enabled - Whether WooCommerce is enabled for this video
 * @returns {object} { product, loading, error }
 */
const useWooCommerceProduct = (productId, enabled = false) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch if WooCommerce is not enabled or no product ID
    if (!enabled || !productId) {
      setProduct(null);
      setLoading(false);
      setError(null);
      return;
    }

    // Convert productId to integer to ensure proper API call
    const numericProductId = parseInt(productId, 10);

    // Validate that we have a valid numeric ID
    if (isNaN(numericProductId) || numericProductId <= 0) {
      setError("Invalid product ID");
      setProduct(null);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await apiFetch({
          path: `/vcg/v1/products/${numericProductId}`,
        });

        setProduct(response);
      } catch (err) {
        setError(err.message || "Failed to load product");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, enabled]);

  return { product, loading, error };
};

export default useWooCommerceProduct;
