import { useState, useEffect } from "react";

/**
 * Calculate time ago from timestamp
 * @param {number} timestamp - Unix timestamp in milliseconds
 * @returns {string} Formatted time ago string
 */
export function calculateTimeAgo(timestamp) {
  if (!timestamp) return null;

  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (days < 7) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (weeks < 4) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (months < 12) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
}

/**
 * Format view count for display
 * @param {number} count - View count
 * @returns {string} Formatted view count
 */
export function formatViewCount(count) {
  if (!count && count !== 0) return null;

  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M views`;
  } else if (count >= 1000) {
    return `${Math.floor(count / 1000)}K views`;
  }
  return `${count} views`;
}

/**
 * Hook to get real-time view count from API
 * @param {string} videoId - The video ID
 * @returns {object} { views: number, formattedViews: string, loading: boolean }
 */
export function useViewCount(videoId) {
  const [viewData, setViewData] = useState({
    views: 0,
    formattedViews: "0 views",
    loading: true,
  });

  useEffect(() => {
    if (!videoId) {
      return;
    }

    // Fetch view count from API
    fetch(`/wp-json/vpg/v1/video-stats/${videoId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setViewData({
          views: data.views || 0,
          formattedViews: data.formatted_views || "0 views",
          loading: false,
        });
      })
      .catch((error) => {
        console.error("[useViewCount] Error fetching view count:", error);
        setViewData({
          views: 0,
          formattedViews: "0 views",
          loading: false,
        });
      });
  }, [videoId]);

  return viewData;
}

/**
 * Hook to get real-time upload date that updates every minute
 * @param {number} createdAt - Unix timestamp in milliseconds
 * @returns {string} Formatted upload date
 */
export function useRealTimeUploadDate(createdAt) {
  const [uploadDate, setUploadDate] = useState(() =>
    calculateTimeAgo(createdAt),
  );

  useEffect(() => {
    if (!createdAt) return;

    // Update immediately
    setUploadDate(calculateTimeAgo(createdAt));

    // Update every minute
    const interval = setInterval(() => {
      setUploadDate(calculateTimeAgo(createdAt));
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, [createdAt]);

  return uploadDate;
}

/**
 * Increment view count for a video
 * @param {string} videoId - The video ID
 */
export async function incrementViewCount(videoId) {
  if (!videoId) {
    return;
  }

  try {
    const response = await fetch(
      `/wp-json/vpg/v1/video-stats/${videoId}/increment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to increment view count");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

/**
 * Get video metadata (views and upload date)
 * This is a non-hook version for compatibility
 * @param {object} video - The video object
 * @returns {object} Object with views and upload_date
 */
export function getVideoMetadata(video) {
  // If metadata is already provided, use it
  if (video?.views && video?.upload_date) {
    return {
      views: video.views,
      upload_date: video.upload_date,
    };
  }

  // For non-hook usage, return placeholder
  // Components should use hooks for real-time data
  return {
    views: "0 views",
    upload_date: video?.created_at ? calculateTimeAgo(video.created_at) : null,
  };
}
