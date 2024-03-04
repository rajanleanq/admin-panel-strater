import type { Metadata } from "next";
import "./globals.css";
import "../../public/antd.min.css"
import AppProviderWrapper from "@/core/lib/provider";

export const metadata: Metadata = {
  title: "Admin Dashboard Starter",
  description: "Generated by Admin Dashboard Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviderWrapper>
          {children}
        </AppProviderWrapper>
      </body>
    </html>
  );
}