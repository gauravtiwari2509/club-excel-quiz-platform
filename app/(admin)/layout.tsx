import AdminNavBar from "@/components/layout/AdminNavBar";
import React from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <AdminNavBar />
  {children}
  </>;
}
