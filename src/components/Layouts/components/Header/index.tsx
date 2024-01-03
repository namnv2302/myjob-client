"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Dropdown, Layout, Typography } from "antd";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { ROUTE_PATH, EMPLOYER_PAGE_URL } from "@/constants/routes";
import Logo from "@assets/images/logo.png";
import NavigationBar from "@/components/Layouts/components/Header/components/NavigationBar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import images from "@assets/images";
import { clearAuthorizationToken } from "@/utils/localstorage";
import { logout } from "@/redux/slices/authorization/authorizationSlice";

const cx = classNames.bind(styles);

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const authorization = useAppSelector((state) => state.authorization);

  const handleLogout = useCallback(() => {
    router.push(`${ROUTE_PATH.ACCOUNT_LOGIN}`);
    dispatch(logout());
    clearAuthorizationToken();
  }, [dispatch, router]);

  return (
    <Layout.Header className={cx("wrapper")}>
      <div className={cx("left")}>
        <Link href={ROUTE_PATH.HOME} className={cx("logo")}>
          <Image
            src={Logo}
            alt="Logo"
            width={46}
            className={cx("image")}
            priority
          />
          <Typography.Title level={2} className={cx("logo-text", "no-margin")}>
            MyJob
          </Typography.Title>
        </Link>
        <NavigationBar />
      </div>
      <div className={cx("right")}>
        {authorization ? (
          <Dropdown
            placement="topRight"
            menu={{
              items: [
                { key: 1, label: "Trang cá nhân" },
                { key: 2, label: "Đăng xuất", onClick: handleLogout },
              ],
            }}
          >
            <div className={cx("authorization")}>
              <Image
                src={authorization.avatar || images.avatarDefault}
                alt="avatar"
                width={34}
                height={34}
                className={cx("avatar")}
                priority
              />
              <Typography.Text className="text-default">
                {authorization.fullname}
              </Typography.Text>
            </div>
          </Dropdown>
        ) : (
          <>
            <Button
              className={cx("button")}
              size="large"
              type="primary"
              ghost
              onClick={() => router.push(ROUTE_PATH.ACCOUNT_LOGIN)}
            >
              Đăng nhập
            </Button>
            <Button
              className={cx("button")}
              size="large"
              type="primary"
              onClick={() => router.push(ROUTE_PATH.ACCOUNT_SIGN_UP)}
            >
              Đăng ký
            </Button>
            <Button className={cx("button")} size="large">
              <Link href={EMPLOYER_PAGE_URL} target="_blank">
                Đăng tuyển & tìm hồ sơ
              </Link>
            </Button>
          </>
        )}
      </div>
    </Layout.Header>
  );
};

export default Header;
