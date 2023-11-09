"use client";

import { Button, Form, Input } from "antd";
import classNames from "classnames/bind";
import styles from "@/styles/account/login.module.scss";

const cx = classNames.bind(styles);

const LoginForm = () => {
  const [form] = Form.useForm();
  return (
    <div className={cx("login-form")}>
      <Form form={form} layout="vertical" requiredMark="optional" size="large">
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
          <Button type="primary" htmlType="submit" block>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
