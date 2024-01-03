"use client";

import { useMemo } from "react";
import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import classNames from "classnames/bind";
import styles from "@/styles/jobs/banner.module.scss";
import { SearchOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

const Banner = () => {
  const options = useMemo(
    () => [
      { value: "Hà Nội" },
      { value: "Hải Phòng" },
      { value: "Đà Nẵng" },
      { value: "Hồ Chí Minh" },
    ],
    []
  );

  return (
    <div
      className={cx("wrapper")}
      style={{ backgroundImage: `url(/assets/images/banner-jobs.png)` }}
    >
      <div className={cx("inner")}>
        <div className={cx("body")}>
          <Typography.Title level={5} className={cx("heading")}>
            Tìm kiếm việc làm phù hợp với bạn
          </Typography.Title>
          <Row>
            <Col lg={{ span: 24 }}>
              <Form className={cx("form-search")}>
                <Row style={{ height: "100%" }}>
                  <Col lg={{ span: 11 }}>
                    <Form.Item
                      name="name"
                      style={{ marginBottom: 0, height: "100%" }}
                    >
                      <Input
                        className={cx("job-name")}
                        placeholder="Vị trí ứng tuyển"
                        autoComplete="off"
                        prefix={
                          <SearchOutlined className={cx("icon-search")} />
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col lg={{ span: 10 }}>
                    <Form.Item
                      name="location"
                      style={{ marginBottom: 0, height: "100%" }}
                    >
                      <Select
                        className={cx("location")}
                        placeholder="Địa điểm"
                        showSearch
                        options={options}
                      />
                    </Form.Item>
                  </Col>
                  <Col lg={{ span: 3 }}>
                    <Form.Item style={{ marginBottom: 0, height: "100%" }}>
                      <div className={cx("search-btn")}>
                        <Button
                          htmlType="submit"
                          size="large"
                          type="primary"
                          className={cx("button")}
                        >
                          Tìm kiếm
                        </Button>
                      </div>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Banner;
