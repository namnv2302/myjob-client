import { useCallback, useMemo } from "react";
import Image from "next/image";
import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "@/styles/home/banner.module.scss";
import images from "@assets/images";

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

  const handleFinish = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <Image
        src={images.bannerImage}
        alt="Banner"
        className={cx("image")}
        priority
      />
      <div className={cx("wrap-lead")}>
        <Image
          src={images.leadImage}
          alt="Lead"
          className={cx("lead")}
          priority
        />
      </div>
      <div className={cx("container")}>
        <Row>
          <Col lg={{ span: 12 }}>
            <Typography.Title level={2} className={cx("title")}>
              Tìm việc làm nhanh 24h, việc <br /> làm mới nhất trên toàn quốc.
            </Typography.Title>
            <Typography.Text className={cx("sub-title")}>
              Hơn 1200+ người làm việc tự do đang chờ đợi bạn
            </Typography.Text>
            <Form className={cx("form-search")} onFinish={handleFinish}>
              <Row style={{ height: "100%" }}>
                <Col lg={{ span: 9 }}>
                  <Form.Item
                    name="name"
                    style={{ marginBottom: 0, height: "100%" }}
                  >
                    <Input
                      className={cx("job-name")}
                      placeholder="Vị trí ứng tuyển"
                      autoComplete="off"
                      prefix={<SearchOutlined className={cx("icon-search")} />}
                    />
                  </Form.Item>
                </Col>
                <Col lg={{ span: 9 }}>
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
                <Col lg={{ span: 6 }}>
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
          <Col lg={{ span: 12 }}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
