"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Layout, Typography } from "antd";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { ROUTE_PATH } from "@/constants/routes";
import Image from "next/image";
import Logo from "@assets/images/logo.png";
import NavigationBar from "@/components/Layouts/components/Header/components/NavigationBar";

const cx = classNames.bind(styles);

const Header = () => {
  const router = useRouter();

  return (
    <Layout.Header className={cx("wrapper")}>
      <div className={cx("left")}>
        <Link href={ROUTE_PATH.HOME} className={cx("logo")}>
          <Image src={Logo} alt="Logo" width={46} className={cx("image")} />
          <Typography.Title level={2} className={cx("logo-text", "no-margin")}>
            MyJob
          </Typography.Title>
        </Link>
        <NavigationBar />
      </div>
      <div className={cx("right")}>
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
          Đăng tuyển & tìm hồ sơ
        </Button>
      </div>
    </Layout.Header>
  );
};

export default Header;
