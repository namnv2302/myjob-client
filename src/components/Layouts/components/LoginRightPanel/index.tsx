import { Typography } from "antd";
import Image from "next/image";
import { CheckOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./LoginRightPanel.module.scss";
import images from "@assets/images";

const cx = classNames.bind(styles);

const LoginRightPanel = ({ bg }: { bg?: boolean }) => {
  return (
    <>
      {bg ? (
        <div className={cx("wrapper")}>
          <Image src={images.loginImage} alt="Image" />
        </div>
      ) : (
        <div className={cx("container")}>
          <Typography.Title level={4} className={cx("heading")}>
            Đăng nhập để truy cập ngay vào hàng ngàn đánh giá và dữ liệu lương
            thị trường IT
          </Typography.Title>
          <Typography.Text className={cx("desc")}>
            <CheckOutlined style={{ color: "#0ab305", marginRight: "8px" }} />
            Xem trước mức lương để có thể lợi thế khi thoả thuận lương
          </Typography.Text>
          <Typography.Text className={cx("desc")}>
            <CheckOutlined style={{ color: "#0ab305", marginRight: "8px" }} />
            Tìm hiểu về phúc lợi, con người, văn hóa công ty qua các đánh giá
            chân thật
          </Typography.Text>
          <Typography.Text className={cx("desc")}>
            <CheckOutlined style={{ color: "#0ab305", marginRight: "8px" }} />
            Dễ dàng ứng tuyển chỉ với một thao tác
          </Typography.Text>
          <Typography.Text className={cx("desc")}>
            <CheckOutlined style={{ color: "#0ab305", marginRight: "8px" }} />
            Quản lý hồ sơ và quyền riêng tư của bạn
          </Typography.Text>
        </div>
      )}
    </>
  );
};

export default LoginRightPanel;
