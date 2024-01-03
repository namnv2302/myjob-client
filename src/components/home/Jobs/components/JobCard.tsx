import { memo } from "react";
import { Card, Image, Tag, Typography, Tooltip } from "antd";
import { DollarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "@/styles/home/jobs.module.scss";
import { IJobs } from "@slices/authorization/authorizationSlice";
import { Level } from "@/constants/common";
import { useAppSelector } from "@/redux/hooks";

const cx = classNames.bind(styles);

const JobCard = ({ data }: { data: IJobs }) => {
  const { currentJobChoose } = useAppSelector((state) => state.jobs);

  return (
    <Card
      className={cx("card", { active: data?.id === currentJobChoose?.id })}
      hoverable={true}
    >
      <div className={cx("head-card")}>
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
          <Tooltip title={data?.name}>
            <Typography.Title level={5} className={cx("job-name")}>
              {data?.name}
            </Typography.Title>
          </Tooltip>
          <Tooltip title={data?.company?.companyName}>
            <Typography.Text className={cx("company-name")}>
              {data?.company?.companyName}
            </Typography.Text>
          </Tooltip>
        </div>
      </div>
      <div className={cx("options")}>
        <Tag className={cx("option-item")} color="purple">
          {Level[Number(data.level)].label}
        </Tag>
        <Tag
          className={cx("option-item")}
          color="orange"
          icon={<DollarOutlined />}
        >
          {data?.salary}
        </Tag>
        <Tag
          className={cx("option-item")}
          color="green"
          icon={<EnvironmentOutlined />}
        >
          {data?.location}
        </Tag>
      </div>
    </Card>
  );
};

export default memo(JobCard);
