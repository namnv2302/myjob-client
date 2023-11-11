"use client";

import { useState } from "react";
import { Button, Form, Input } from "antd";
import classNames from "classnames/bind";
import styles from "@/styles/account/login.module.scss";
import { signUp } from "@/apis/auth";

const cx = classNames.bind(styles);

const SignUpForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async ({
    fullname,
    email,
    password,
  }: {
    fullname: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const resp = await signUp(fullname, email, password);
      console.log(resp);
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
        size="large"
        onFinish={handleSignUp}
      >
        <Form.Item
          label="Họ và tên"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ và tên.",
            },
          ]}
        >
          <Input placeholder="Họ và tên" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Nhập đúng định dạng email.",
            },
            {
              required: true,
              message: "Vui lòng nhập email.",
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
              message: "Vui lòng nhập mật khẩu.",
            },
          ]}
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
