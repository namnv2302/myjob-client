import { Col, Row, Typography } from "antd";
import classNames from "classnames/bind";
import { v4 as uuIdV4 } from "uuid";
import styles from "@/styles/home/jobs.module.scss";
import JobCard from "@/components/Jobs/components/JobCard";
import useJobs from "@/hooks/jobs/useJobs";

const cx = classNames.bind(styles);

const Jobs = () => {
  const { data, loading } = useJobs(1);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Typography.Title level={4} className={cx("label")}>
          Việc làm mới nhất
        </Typography.Title>
        <Row gutter={{ lg: 20 }}>
          {data?.map((job) => (
            <Col key={uuIdV4()} lg={{ span: 12 }}>
              <JobCard data={job} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Jobs;
