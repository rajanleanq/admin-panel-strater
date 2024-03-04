import type { Metadata } from "next";
import MainLayout from "@/components/layouts/main/layout";

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
          <MainLayout>
            {children}
          </MainLayout>
      </body>
    </html>
  );
}