import AppProviders from "@/providers/AppProviders";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chá da Ayla",
  description: "Confirmação de presença",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
