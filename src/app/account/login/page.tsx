"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Divider, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "@/styles/account/login.module.scss";
import LoginForm from "@/app/account/login/components/LoginForm";
import { ROUTE_PATH } from "@/constants/routes";
import Logo from "@assets/images/logo.png";

const cx = classNames.bind(styles);

const LoginPage = () => {
  return (
    <div className={cx("wrapper")}>
      <Typography.Title level={5} className={cx("heading")}>
        Chào mừng bạn đã quay trở lại
        <Link href={ROUTE_PATH.HOME} className={cx("logo")}>
          <Image src={Logo} alt="Logo" width={46} className={cx("image")} />
          <Typography.Title level={5} className={cx("logo-text")}>
            MyJob
          </Typography.Title>
        </Link>
      </Typography.Title>
      <Typography.Text className={cx("sub-heading")}>
        Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
        tưởng
      </Typography.Text>
      <LoginForm />
      <Divider />
      <Typography.Text
        style={{ display: "block", textAlign: "center", marginBottom: "20px" }}
      >
        Hoặc đăng nhập bằng
      </Typography.Text>
      <Button size="large" icon={<GoogleOutlined />} type="primary" ghost block>
        Google
      </Button>
      <Typography.Text
        style={{ display: "block", textAlign: "center", marginTop: "20px" }}
      >
        Bạn chưa có tài khoản?{" "}
        <Link href={ROUTE_PATH.ACCOUNT_SIGN_UP} className={cx("now")}>
          Đăng ký ngay
        </Link>
      </Typography.Text>
    </div>
  );
};

export default LoginPage;
