"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import "@/styles/globals.scss";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import MainLayout from "@/components/Layouts/MainLayout";
import LoginLayout from "@/components/Layouts/LoginLayout";
import { store } from "@/redux/store";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const loginPaths = useMemo(() => ["/account/login", "/account/sign-up"], []);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <ConfigProvider
              prefixCls="mj"
              theme={{
                token: {
                  fontFamily: "Inter",
                  fontSize: 16,
                  fontWeightStrong: 500,
                  colorPrimary: "#0859F7",
                },
              }}
            >
              {loginPaths.includes(pathname) ? (
                <LoginLayout>{children}</LoginLayout>
              ) : (
                <MainLayout>{children}</MainLayout>
              )}
            </ConfigProvider>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
