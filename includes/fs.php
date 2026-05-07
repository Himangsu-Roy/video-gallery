<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

if (!function_exists('vgb_fs')) {
        function vgb_fs() {
            global $vgb_fs;
            if (!isset($vgb_fs)) {
                require_once VGB_DIR_PATH . 'vendor/freemius/start.php';
                $vgb_fs = fs_dynamic_init([
                    'id'                  => '20637',
                    'slug'                => 'video-gallery-block',
                    'premium_slug'        => 'video-gallery-block-pro',
                    'type'                => 'plugin',
                    'public_key'          => 'pk_02d017aab6844d54db3238a59e91c',
                    'is_premium'          => true,
                    'premium_suffix'      => 'Pro',
                    'has_premium_version' => true,
                    'has_addons'          => false,
                    'has_paid_plans'      => true,
                    'wp_org_gatekeeper'   => 'OA7#BoRiBNqdf52FvzEf!!074aRLPs8fspif$7K1#4u4Csys1fQlCecVcUTOs2mcpeVHi#C2j9d09fOTvbC0HloPT7fFee5WdS3G',
                    'trial'               => array(
                        'days'               => 7,
                        'is_require_payment' => false,
                    ),
                    'menu'                => array(
                        'slug'           => 'edit.php?post_type=video-gallery-block',
                        'first-path'     => 'edit.php?post_type=video-gallery-block#/welcome',
                        'support'        => false,
                    ),
                ]);
            }
            return $vgb_fs;
        }
        vgb_fs();
        do_action('vgb_fs_loaded');
    }
