"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskProvider from "../context/TaskProvider";

interface LayoutTypes {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <>
      <TaskProvider>
        <Header />
          <div className="min-h-[85vh] bg-gray-200">{children}</div>
        <Footer />
      </TaskProvider>
    </>
  );
};

export default Layout;
