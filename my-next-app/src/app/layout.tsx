import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denkyu Sinar Abadi",
  description: "Premium Power Solutions for Your Needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <style>{`
          /* Basic styles */
          body {
            font-family: 'Arial', sans-serif;
          }

          /* Feature icons */
          .feature-icon {
            background-color: #3b82f6; /* Blue-600 */
          }

          /* Add more global styles here if needed */
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}