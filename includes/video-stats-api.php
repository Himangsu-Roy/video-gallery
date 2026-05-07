<?php
if (! defined('ABSPATH')) {
    exit;
}
class VPG_Video_Stats_API
{

    /**
     * Register REST API routes
     */
    public static function register_routes()
    {
        register_rest_route('vpg/v1', '/video-stats/(?P<video_id>[a-zA-Z0-9-_]+)', array(
            'methods' => 'GET',
            'callback' => array(__CLASS__, 'get_video_stats'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('vpg/v1', '/video-stats/(?P<video_id>[a-zA-Z0-9-_]+)/increment', array(
            'methods' => 'POST',
            'callback' => array(__CLASS__, 'increment_view_count'),
            'permission_callback' => '__return_true',
        ));
    }

    /**
     * Get video statistics
     */
    public static function get_video_stats($request)
    {
        $video_id = sanitize_text_field($request['video_id']);
        $view_count = get_option('vpg_video_views_' . $video_id, 0);

        return rest_ensure_response(array(
            'video_id' => $video_id,
            'views' => intval($view_count),
            'formatted_views' => self::format_view_count(intval($view_count)),
        ));
    }

    /**
     * Increment view count for a video
     */
    public static function increment_view_count($request)
    {
        $video_id = sanitize_text_field($request['video_id']);
        $current_views = get_option('vpg_video_views_' . $video_id, 0);
        $new_views = intval($current_views) + 1;

        update_option('vpg_video_views_' . $video_id, $new_views);

        return rest_ensure_response(array(
            'video_id' => $video_id,
            'views' => $new_views,
            'formatted_views' => self::format_view_count($new_views),
        ));
    }

    /**
     * Format view count for display
     */
    private static function format_view_count($count)
    {
        if ($count >= 1000000) {
            return number_format($count / 1000000, 1) . 'M views';
        } elseif ($count >= 1000) {
            return number_format($count / 1000, 0) . 'K views';
        }
        return $count . ' views';
    }
}

// Register REST API routes
add_action('rest_api_init', array('VPG_Video_Stats_API', 'register_routes'));
