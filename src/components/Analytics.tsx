import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag: (...args: unknown[]) => void;
  }
}

function Analytics() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

    if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return;
    if (document.getElementById("google-analytics-script")) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args) => {
      window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }, []);

  return null;
}

export default Analytics;
