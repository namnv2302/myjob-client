import { Col, Divider, Row, Typography } from "antd";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import FooterColumn from "@/components/Layouts/components/Footer/components/FooterColumn";
import { company, connect, support } from "@/constants/footer";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <Row>
            <Col lg={{ span: 9 }}>
              <Typography.Title level={2} className={cx("title")}>
                Về chúng tôi
              </Typography.Title>
              <Typography.Text className={cx("desc")}>
                Khách hàng rất quan trọng, khách hàng sẽ được khách hàng theo
                đuổi. Trên thực tế, nụ cười trên khuôn mặt của người nhìn là một
                điều tốt.
              </Typography.Text>
            </Col>
            <Col lg={{ span: 5 }}>
              <FooterColumn title="Công ty" data={company} />
            </Col>
            <Col lg={{ span: 5 }}>
              <FooterColumn title="Trợ giúp" data={support} />
            </Col>
            <Col lg={{ span: 5 }}>
              <FooterColumn title="Kết nối" data={connect} />
            </Col>
          </Row>
        </div>
      </div>
      <Divider />
      <div className={cx("copyright")}>
        <Typography.Text className={cx("label")}>
          © 2024 NVN. All Right Reserved.
        </Typography.Text>
      </div>
    </>
  );
};

export default Footer;
