<?php
/**
 * WooCommerce Integration for Video Carousel Gallery
 *
 * @package VideoCarouselGallery
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class VCG_WooCommerce_Integration {

	/**
	 * Instance of this class.
	 *
	 * @var object
	 */
	private static $instance = null;

	/**
	 * Get instance of this class.
	 *
	 * @return VCG_WooCommerce_Integration
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_rest_routes' ) );
		add_action( 'admin_notices', array( $this, 'woocommerce_dependency_notice' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );
		add_action( 'wp_ajax_vcg_dismiss_woocommerce_notice', array( $this, 'dismiss_woocommerce_notice' ) );
	}

	/**
	 * Check if WooCommerce is active.
	 *
	 * @return bool
	 */
	public function is_woocommerce_active() {
		return class_exists( 'WooCommerce' );
	}

	/**
	 * Display admin notice if WooCommerce is not installed.
	 */
	public function woocommerce_dependency_notice() {
		if ( ! $this->is_woocommerce_active() ) {
			// Check if the user has dismissed the notice.
			$user_id = get_current_user_id();
			if ( get_user_meta( $user_id, 'vcg_dismissed_woocommerce_notice', true ) ) {
				return;
			}

			$screen = get_current_screen();
			if ( $screen && ( 'post' === $screen->base || 'edit' === $screen->base ) ) {
				?>
				<div class="notice notice-warning is-dismissible" data-notice="woocommerce-dependency">
					<p>
						<?php
						echo wp_kses_post(
							sprintf(
								/* translators: %s: WooCommerce plugin link */
								__( 'Video Carousel Gallery: Install and activate %s to link videos with products.', 'video-gallery-block' ),
								'<a href="' . esc_url( admin_url( 'plugin-install.php?s=woocommerce&tab=search&type=term' ) ) . '">WooCommerce</a>'
							)
						);
						?>
					</p>
				</div>
				<?php
			}
		}
	}

	/**
	 * Enqueue admin scripts.
	 */
	public function enqueue_admin_scripts() {
		if ( ! $this->is_woocommerce_active() ) {
			wp_enqueue_script( 'vcg-admin-notice', VGB_DIR_URL . 'public/js/admin-notice.js', array( 'jquery' ), VGB_PLUGIN_VERSION, true );
			wp_localize_script(
				'vcg-admin-notice',
				'vcg_admin_notice',
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'nonce'    => wp_create_nonce( 'vcg_dismiss_woocommerce_notice_nonce' ),
				)
			);
		}
	}

	/**
	 * Dismiss WooCommerce dependency notice via AJAX.
	 */
	public function dismiss_woocommerce_notice() {
		check_ajax_referer( 'vcg_dismiss_woocommerce_notice_nonce', 'nonce' );

		$user_id = get_current_user_id();
		update_user_meta( $user_id, 'vcg_dismissed_woocommerce_notice', true );

		wp_send_json_success();
	}

	/**
	 * Register REST API routes.
	 */
	public function register_rest_routes() {
		// Search products endpoint.
		register_rest_route(
			'vcg/v1',
			'/products/search',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'search_products' ),
				'permission_callback' => array( $this, 'check_permission' ),
				'args'                => array(
					'search' => array(
						'required'          => false,
						'type'              => 'string',
						'sanitize_callback' => 'sanitize_text_field',
					),
					'per_page' => array(
						'required'          => false,
						'type'              => 'integer',
						'default'           => 20,
						'sanitize_callback' => 'absint',
					),
				),
			)
		);

		// Get product by ID endpoint.
		register_rest_route(
			'vcg/v1',
			'/products/(?P<id>\d+)',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_product' ),
				'permission_callback' => '__return_true',
				'args'                => array(
					'id' => array(
						'required'          => true,
						'type'              => 'integer',
						'sanitize_callback' => 'absint',
					),
				),
			)
		);

		// Create product endpoint.
		register_rest_route(
			'vcg/v1',
			'/products',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'create_product' ),
				'permission_callback' => array( $this, 'check_permission' ),
				'args'                => array(
					'title' => array(
						'required'          => true,
						'type'              => 'string',
						'sanitize_callback' => 'sanitize_text_field',
					),
					'price' => array(
						'required'          => false,
						'type'              => 'string',
						'sanitize_callback' => 'sanitize_text_field',
					),
					'image' => array(
						'required'          => false,
						'type'              => 'string',
						'sanitize_callback' => 'esc_url_raw',
					),
				),
			)
		);
	}

	/**
	 * Check permission for REST API.
	 *
	 * @return bool
	 */
	public function check_permission() {
		return current_user_can( 'edit_posts' );
	}

	/**
	 * Search products via REST API.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response|WP_Error
	 */
	public function search_products( $request ) {
		if ( ! $this->is_woocommerce_active() ) {
			return new WP_Error(
				'woocommerce_not_active',
				__( 'WooCommerce is not active.', 'video-gallery-block' ),
				array( 'status' => 400 )
			);
		}

		$search   = $request->get_param( 'search' );
		$per_page = $request->get_param( 'per_page' );

		$args = array(
			'post_type'      => 'product',
			'post_status'    => 'publish',
			'posts_per_page' => $per_page,
			'orderby'        => 'title',
			'order'          => 'ASC',
		);

		if ( ! empty( $search ) ) {
			$args['s'] = $search;
		}

		$query    = new WP_Query( $args );
		$products = array();

		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				$product_id = get_the_ID();
				$product    = wc_get_product( $product_id );

				if ( $product ) {
					$products[] = $this->format_product_data( $product );
				}
			}
			wp_reset_postdata();
		}

		return rest_ensure_response( $products );
	}

	/**
	 * Get product by ID via REST API.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response|WP_Error
	 */
	public function get_product( $request ) {
		if ( ! $this->is_woocommerce_active() ) {
			error_log( 'VCG: WooCommerce is not active' );
			return new WP_Error(
				'woocommerce_not_active',
				__( 'WooCommerce is not active.', 'video-gallery-block' ),
				array( 'status' => 400 )
			);
		}

		$product_id = absint( $request->get_param( 'id' ) );
		
		// Validate product ID
		if ( $product_id <= 0 ) {
			error_log( 'VCG: Invalid product ID: ' . $request->get_param( 'id' ) );
			return new WP_Error(
				'invalid_product_id',
				__( 'Invalid product ID.', 'video-gallery-block' ),
				array( 'status' => 400 )
			);
		}
		
		$product = wc_get_product( $product_id );

		if ( ! $product ) {
			error_log( 'VCG: Product not found for ID: ' . $product_id );
			return new WP_Error(
				'product_not_found',
				__( 'Product not found.', 'video-gallery-block' ),
				array( 'status' => 404 )
			);
		}

		return rest_ensure_response( $this->format_product_data( $product ) );
	}

	/**
	 * Create a new WooCommerce product via REST API.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response|WP_Error
	 */
	public function create_product( $request ) {
		if ( ! $this->is_woocommerce_active() ) {
			return new WP_Error(
				'woocommerce_not_active',
				__( 'WooCommerce is not active.', 'video-gallery-block' ),
				array( 'status' => 400 )
			);
		}

		$title = $request->get_param( 'title' );
		$price = $request->get_param( 'price' );
		$image = $request->get_param( 'image' );

		// Create the product.
		$product = new WC_Product_Simple();
		$product->set_name( $title );
		$product->set_status( 'publish' );
		
		if ( ! empty( $price ) ) {
			$product->set_regular_price( $price );
		}

		// Save product to get ID.
		$product_id = $product->save();

		if ( ! $product_id ) {
			return new WP_Error(
				'product_creation_failed',
				__( 'Failed to create product.', 'video-gallery-block' ),
				array( 'status' => 500 )
			);
		}

		// Handle image if provided.
		if ( ! empty( $image ) ) {
			// Check if image is an attachment ID or URL.
			if ( is_numeric( $image ) ) {
				$product->set_image_id( absint( $image ) );
			} else {
				// If it's a URL, we might want to sideload it, but for now, let's see if we can find it in the media library.
				$attachment_id = attachment_url_to_postid( $image );
				if ( $attachment_id ) {
					$product->set_image_id( $attachment_id );
				}
			}
			$product->save();
		}

		return rest_ensure_response( $this->format_product_data( $product ) );
	}

	/**
	 * Format product data for API response.
	 *
	 * @param WC_Product $product Product object.
	 * @return array
	 */
	private function format_product_data( $product ) {
		$image_id  = $product->get_image_id();
		$image_url = $image_id ? wp_get_attachment_image_url( $image_id, 'full' ) : wc_placeholder_img_src();

		return array(
			'id'             => $product->get_id(),
			'title'          => $product->get_name(),
			'price'          => $product->get_price(),
			'regular_price'  => $product->get_regular_price(),
			'sale_price'     => $product->get_sale_price(),
			'price_html'     => $product->get_price_html(),
			'image'          => $image_url,
			'permalink'      => $product->get_permalink(),
			'add_to_cart_url' => $product->add_to_cart_url(),
			'description'    => $product->get_short_description(),
			'in_stock'       => $product->is_in_stock(),
			'type'           => $product->get_type(),
		);
	}
}

// Initialize the integration.
VCG_WooCommerce_Integration::get_instance();
