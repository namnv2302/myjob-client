import { memo } from "react";
import { Image, Typography, Tooltip } from "antd";
import classNames from "classnames/bind";
import styles from "@/styles/home/companies.module.scss";
import { ICompanies } from "@/redux/slices/authorization/authorizationSlice";

const cx = classNames.bind(styles);

const CompanyCard = ({ data }: { data: ICompanies }) => {
  return (
    <div className={cx("card")}>
      <Image
        src={data.logo}
        alt="logo-company"
        className={cx("image")}
        preview={false}
      />
      <Tooltip title={data.companyName}>
        <Typography.Text className={cx("name")}>
          {data.companyName}
        </Typography.Text>
      </Tooltip>
    </div>
  );
};

export default memo(CompanyCard);
