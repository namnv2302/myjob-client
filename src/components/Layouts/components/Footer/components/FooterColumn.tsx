import Image from "next/image";
import { Typography } from "antd";
import { v4 as uuIdV4 } from "uuid";
import classNames from "classnames/bind";
import styles from "../Footer.module.scss";
import { FooterDataType } from "@/constants/footer";

const cx = classNames.bind(styles);

const FooterColumn = ({
  title,
  data,
}: {
  title: string;
  data: FooterDataType[];
}) => {
  return (
    <div className={cx("column")}>
      <Typography.Title level={2} className={cx("title")}>
        {title}
      </Typography.Title>
      <div className={cx("content")}>
        {data.map(({ icon, label }) => (
          <span key={uuIdV4()} className={cx("item")}>
            {icon ? (
              <Image className={cx("icon")} src={icon} alt="icon" />
            ) : (
              false
            )}
            <Typography.Link className={cx("label")}>{label}</Typography.Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
