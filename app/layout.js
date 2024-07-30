import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Script from "next/script";

import "./globals.css";
import "animate.css";

export const metadata = {
  title: "PantryPilot",
  description: "A pantry app",
  icons: {
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Add starry background */}
        <Box className="starry-background" />
        {/* Noise overlay for a textured effect */}
        <div className="noise-overlay"></div>

        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <Box
          component="main"
          sx={{
            minHeight: "100%",
            padding: "20px 16px",
            boxSizing: "border-box",
          }}
        >
          {children}
        </Box>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
