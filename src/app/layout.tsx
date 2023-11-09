import React from "react";
import { ConfigProvider } from "antd";
import "@/styles/globals.scss";
import MainLayout from "@/components/Layouts/MainLayout";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider
            prefixCls="mj"
            theme={{
              token: {
                fontFamily: "Inter",
                fontSize: 16,
                colorPrimary: "#0859F7",
              },
            }}
          >
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
