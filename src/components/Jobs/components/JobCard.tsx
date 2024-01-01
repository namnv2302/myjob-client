import { memo } from "react";
import { Card, Image, Tag, Typography } from "antd";
import { DollarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "@/styles/home/jobs.module.scss";
import { IJobs } from "@slices/authorization/authorizationSlice";

const cx = classNames.bind(styles);

const JobCard = ({ data }: { data: IJobs }) => {
  return (
    <Card className={cx("card")} hoverable={true}>
      <div className={cx("head")}>
        <div className={cx("logo-company")}>
          <Image
            src={data?.company?.logo}
            alt="company-logo"
            width={58}
            height={58}
            preview={false}
            style={{ display: "block", objectFit: "cover" }}
          />
        </div>
        <div className={cx("text-info")}>
          <Typography.Title level={5} className={cx("job-name")}>
            {data?.name}
          </Typography.Title>
          <Typography.Text>{data?.company?.companyName}</Typography.Text>
        </div>
      </div>
      <div className={cx("options")}>
        <Tag color="purple">Senior</Tag>
        <Tag color="green" icon={<DollarOutlined />}>
          {data?.salary}
        </Tag>
        <Tag color="green" icon={<EnvironmentOutlined />}>
          {data?.location}
        </Tag>
      </div>
    </Card>
  );
};

export default memo(JobCard);
