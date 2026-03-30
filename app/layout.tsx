import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가을 유통",
  description: "신선한 수산물을 만나보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
