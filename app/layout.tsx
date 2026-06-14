import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Response Time Alerter — Monitor API Performance",
  description: "Track API endpoint performance and get instant alerts when response times exceed your thresholds. Built for API developers and DevOps engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f7e91d73-6bff-47d3-aed0-4d9aa6fc87f6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
