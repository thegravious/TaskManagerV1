import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "Task Manager",
  description: "A simple and efficient task management app to help you organize and track your tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
