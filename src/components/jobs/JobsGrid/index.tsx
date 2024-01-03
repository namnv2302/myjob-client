"use client";

import { Alert, Col, Row } from "antd";
import { v4 as uuIdV4 } from "uuid";
import classNames from "classnames/bind";
import styles from "@/styles/jobs/jobs-grid.module.scss";
import useJobs from "@/hooks/jobs/useJobs";
import JobCard from "@/components/home/Jobs/components/JobCard";

const cx = classNames.bind(styles);

const JobsGrid = () => {
  const { data, loading, totalPages, totalItems, currentPage } = useJobs(1);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Row gutter={{ lg: 32 }}>
          <Col lg={{ span: 9 }}>
            <Alert
              message={`Tìm thấy ${totalItems} việc làm phù hợp với yêu cầu của bạn.`}
              type="info"
            />
            <Row className={cx("jobs-list")}>
              {data?.map((job) => (
                <Col key={uuIdV4()} lg={{ span: 24 }}>
                  <JobCard data={job} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={{ span: 15 }}></Col>
        </Row>
      </div>
    </div>
  );
};

export default JobsGrid;
