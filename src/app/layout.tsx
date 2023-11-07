import React from "react";
import "@/styles/globals.scss";
import MainLayout from "@/components/Layouts/MainLayout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
