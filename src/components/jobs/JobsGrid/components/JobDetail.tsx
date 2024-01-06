import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import {
  ClockCircleOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Card, Empty, Image, Tag, Tooltip, Typography } from "antd";
import classNames from "classnames/bind";
import styles from "@/styles/jobs/jobs-grid.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { Level } from "@/constants/common";
import { DEFAULT_DATE_FORMAT } from "@/constants/time";
import ApplyModal from "@/components/jobs/JobsGrid/components/ApplyModal";

const cx = classNames.bind(styles);

const JobDetail = () => {
  const jobDescriptionRef = useRef<any>();
  const { currentJobChoose } = useAppSelector((state) => state.jobs);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (jobDescriptionRef.current) {
      jobDescriptionRef.current.innerHTML = currentJobChoose?.description;
    }
  }, [currentJobChoose?.description]);

  return (
    <>
      {currentJobChoose ? (
        <>
          <Card className={cx("card")}>
            <div className={cx("head-card")}>
              <div className={cx("logo-company")}>
                <Image
                  src={currentJobChoose?.company?.logo}
                  alt="company-logo"
                  width={58}
                  height={58}
                  preview={false}
                  style={{ display: "block", objectFit: "cover" }}
                />
              </div>
              <div className={cx("text-info")}>
                <Tooltip title={currentJobChoose?.name}>
                  <Typography.Title level={5} className={cx("job-name")}>
                    {currentJobChoose?.name}
                  </Typography.Title>
                </Tooltip>
                <Tooltip title={currentJobChoose?.company?.companyName}>
                  <Typography.Text className={cx("company-name")}>
                    {currentJobChoose?.company?.companyName}
                  </Typography.Text>
                </Tooltip>
              </div>
            </div>
            <div className={cx("options")}>
              <Tag className={cx("option-item")} color="purple">
                {Level[Number(currentJobChoose?.level)]?.label}
              </Tag>
              <Tag
                className={cx("option-item")}
                color="orange"
                icon={<DollarOutlined />}
              >
                {currentJobChoose?.salary}
              </Tag>
              <Tag
                className={cx("option-item")}
                color="green"
                icon={<EnvironmentOutlined />}
              >
                {currentJobChoose?.location}
              </Tag>
            </div>
            <Tag icon={<ClockCircleOutlined />}>
              Hạn nộp hồ sơ:{" "}
              {dayjs(currentJobChoose?.endDate).format(DEFAULT_DATE_FORMAT)}
            </Tag>
            <Button
              icon={<SendOutlined />}
              type="primary"
              block
              className={cx("apply-now")}
              onClick={() => setOpenModal(true)}
            >
              Ứng tuyển ngay
            </Button>
          </Card>
          <Card title="Chi tiết tin tuyển dụng">
            <div
              ref={jobDescriptionRef}
              style={{ padding: "0 0 10px 24px" }}
            ></div>
          </Card>
          <ApplyModal
            data={currentJobChoose}
            open={openModal}
            onOpen={setOpenModal}
          />
        </>
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Chọn việc làm bạn quan tâm"
        />
      )}
    </>
  );
};

export default JobDetail;
