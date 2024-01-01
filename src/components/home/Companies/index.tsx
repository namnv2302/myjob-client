import { useMemo } from "react";
import Slider from "react-slick";
import { Typography } from "antd";
import { v4 as uuIdV4 } from "uuid";
import classNames from "classnames/bind";
import styles from "@/styles/home/companies.module.scss";
import useCompanies from "@/hooks/companies/useCompanies";
import CompanyCard from "@/components/home/Companies/components/CompanyCard";

const cx = classNames.bind(styles);

const Companies = () => {
  const { data } = useCompanies(1);

  const settings = useMemo(() => {
    return {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Typography.Title level={4} className={cx("label")}>
          Danh sách các công ty
        </Typography.Title>
        <Slider {...settings}>
          {data?.map((company) => (
            <CompanyCard key={uuIdV4()} data={company} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Companies;
