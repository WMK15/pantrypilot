// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID; // Replace with your GA Measurement ID

// Log page views
export const pageview = (url) => {
  if (window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log events
export const event = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
