import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./utils.css"
import AuthProvider from "@/components/layout/SessionProvider";
import SafeArea from "@/components/layout/SafeArea";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club Excel Quiz",
  description: "Club Excel Quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${geistMono.variable} antialiased min-h-[100vh] flex flex-col`}
      >
        <AuthProvider>
          <SafeArea>
            {children}
          </SafeArea>
        </AuthProvider>
      </body>
    </html>
  );
}
