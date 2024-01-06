"use client";

import { useCallback, useEffect, useState } from "react";
import { Alert, Col, Pagination, Row, message } from "antd";
import { v4 as uuIdV4 } from "uuid";
import classNames from "classnames/bind";
import styles from "@/styles/jobs/jobs-grid.module.scss";
import useJobs from "@/hooks/jobs/useJobs";
import JobCard from "@/components/home/Jobs/components/JobCard";
import JobDetail from "@/components/jobs/JobsGrid/components/JobDetail";
import { useAppDispatch } from "@/redux/hooks";
import { setCurrentJobChoose } from "@/redux/slices/jobs/jobsSlice";
import { IJobs } from "@/redux/slices/authorization/authorizationSlice";
import { getJobsList } from "@/apis/jobs";

const cx = classNames.bind(styles);

const JobsGrid = () => {
  const { data, totalPages, totalItems, currentPage } = useJobs(1);
  const dispatch = useAppDispatch();
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
        <Row gutter={{ lg: 32 }}>
          <Col lg={{ span: 9 }}>
            <Alert
              message={`Tìm thấy ${totalItems} việc làm phù hợp với yêu cầu của bạn.`}
              type="info"
            />
            <Row className={cx("jobs-list")}>
              {jobsList?.map((job) => (
                <Col
                  key={uuIdV4()}
                  lg={{ span: 24 }}
                  onClick={() => dispatch(setCurrentJobChoose(job))}
                >
                  <JobCard data={job} />
                </Col>
              ))}
            </Row>
            <Pagination
              style={{ marginTop: "12px", textAlign: "center" }}
              size="small"
              pageSize={10}
              current={current}
              total={10 * totalPages}
              onChange={handleChangePage}
            />
          </Col>
          <Col lg={{ span: 15 }}>
            <JobDetail />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default JobsGrid;
