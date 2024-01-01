import { useCallback, useEffect, useState } from "react";
import { Col, Pagination, Row, Typography, message } from "antd";
import classNames from "classnames/bind";
import { v4 as uuIdV4 } from "uuid";
import styles from "@/styles/home/jobs.module.scss";
import JobCard from "@/components/Jobs/components/JobCard";
import useJobs from "@/hooks/jobs/useJobs";
import { IJobs } from "@slices/authorization/authorizationSlice";
import { getJobsList } from "@/apis/jobs";

const cx = classNames.bind(styles);

const Jobs = () => {
  const { data, loading, totalPages, currentPage } = useJobs(1);
  const [current, setCurrent] = useState<number>();
  const [jobsList, setJobsList] = useState<IJobs[]>();

  useEffect(() => {
    setCurrent(currentPage);
    setJobsList(data);
  }, [currentPage, data]);

  const handleChangePage = useCallback(async (page: number) => {
    try {
      const resp = await getJobsList(page);
      if (resp.status === 200) {
        setJobsList(resp.data.data);
        setCurrent(resp.data.meta.current);
      }
    } catch (error) {
      message.error("Có lỗi, thử lại sau");
    }
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Typography.Title level={4} className={cx("label")}>
          Việc làm mới nhất
        </Typography.Title>
        <Row gutter={{ lg: 20 }}>
          {jobsList?.map((job) => (
            <Col key={uuIdV4()} lg={{ span: 12 }}>
              <JobCard data={job} />
            </Col>
          ))}
        </Row>
        <Pagination
          style={{ marginTop: "12px", textAlign: "center" }}
          pageSize={10}
          current={current}
          total={10 * totalPages}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Jobs;
