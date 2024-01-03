import { useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "@/styles/home/dashboard.module.scss";
import images from "@assets/images";
import axiosInstance from "@/utils/axios";

const cx = classNames.bind(styles);

const Dashboard = () => {
  const [totals, setTotals] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const resp = await axiosInstance.get("/");
        if (resp.status === 200 && resp.data) {
          setTotals(resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Row gutter={{ lg: 16 }} align="middle">
          <Col lg={{ span: 12 }}>
            <Image src={images.home8Image} alt="image" priority />
          </Col>
          <Col lg={{ span: 12 }}>
            <Typography.Title level={5}>
              Khám phá lý do tại sao ngày càng nhiều công ty sử dụng MyJob để
              tuyển dụng dễ dàng
            </Typography.Title>
            <Typography.Text>Thống kê số lượng sử dụng</Typography.Text>
            <Row gutter={{ lg: 16 }} style={{ marginTop: "33px" }}>
              <Col lg={{ span: 12 }}>
                <div className={cx("item")}>
                  <Typography.Title level={3} className={cx("number")}>
                    {`${totals?.jobsCount}+`}
                  </Typography.Title>
                  <Typography.Text className={cx("text")}>
                    việc làm
                  </Typography.Text>
                </div>
              </Col>
              <Col lg={{ span: 12 }}>
                <div className={cx("item")}>
                  <Typography.Title level={3} className={cx("number")}>
                    {`${totals?.companiesCount}+`}
                  </Typography.Title>
                  <Typography.Text className={cx("text")}>
                    công ty
                  </Typography.Text>
                </div>
              </Col>
              <Col lg={{ span: 12 }}>
                <div className={cx("item")}>
                  <Typography.Title level={3} className={cx("number")}>
                    {`${totals?.usersCount}+`}
                  </Typography.Title>
                  <Typography.Text className={cx("text")}>
                    ứng viên
                  </Typography.Text>
                </div>
              </Col>
              <Col lg={{ span: 12 }}>
                <div className={cx("item")}>
                  <Typography.Title level={3} className={cx("number")}>
                    {`${totals?.employersCount}+`}
                  </Typography.Title>
                  <Typography.Text className={cx("text")}>
                    nhà tuyển dụng
                  </Typography.Text>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
