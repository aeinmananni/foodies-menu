import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import background from "@/public/background.jpg";
import { Header } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals , shared by a food-loving coomunity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh", // تضمین میکنه کل ارتفاع صفحه رو بگیره
        }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased  w-full flex flex-col items-center overflow-y-auto italic`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}