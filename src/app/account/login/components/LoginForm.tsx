"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";
import classNames from "classnames/bind";
import styles from "@/styles/account/login.module.scss";
import { login, whoAmI } from "@/apis/auth";
import { saveAccessToken, saveRefreshToken } from "@/utils/localstorage";
import { useAppDispatch } from "@/redux/hooks";
import { login as loginAction } from "@slices/authorization/authorizationSlice";
import { ROUTE_PATH } from "@/constants/routes";

const cx = classNames.bind(styles);

const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const resp = await login(email, password);
      if (resp.status === 201) {
        saveAccessToken(resp.data.accessToken);
        saveRefreshToken(resp.data.refreshToken);

        const respAuth = await whoAmI();
        if (respAuth.data) {
          dispatch(loginAction(respAuth.data));
          router.push(ROUTE_PATH.HOME);
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className={cx("login-form")}>
      <Form
        form={form}
        layout="vertical"
        requiredMark="optional"
        onFinish={handleLogin}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Nhập đúng định dạng email",
            },
            {
              required: true,
              message: "Vui lòng nhập email",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu",
            },
          ]}
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
