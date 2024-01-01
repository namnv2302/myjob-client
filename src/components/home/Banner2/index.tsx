import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";
import classNames from "classnames/bind";
import styles from "@/styles/home/banner2.module.scss";
import { EMPLOYER_PAGE_URL } from "@/constants/routes";

const cx = classNames.bind(styles);

const Banner2 = () => {
  const router = useRouter();

  return (
    <div
      className={cx("wrapper")}
      style={{
        backgroundImage: `url(../assets/images/banner2.webp)`,
      }}
    >
      <div className={cx("inner")}>
        <div className={cx("body")}>
          <Typography.Title level={3} style={{ color: "#fff" }}>
            Trang web giúp các nhà tuyển dụng tìm kiếm ứng viên phù hợp
          </Typography.Title>
          <Typography.Text style={{ color: "#fff" }}>
            Đăng tin tuyển dụng ngay
          </Typography.Text>
          <Button
            type="link"
            href={EMPLOYER_PAGE_URL}
            target="_blank"
            className={cx("button")}
          >
            Tìm kiếm ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
