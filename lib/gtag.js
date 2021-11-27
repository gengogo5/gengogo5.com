export const GA_TRACKING_ID = process.env.GA_TRACKING_ID || '';

export const pageview = (url) => {
  if (!GA_TRACKING_ID) return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
