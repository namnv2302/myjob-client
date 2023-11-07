import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Header from "@/components/Layouts/components/Header";
import Footer from "@/components/Layouts/components/Footer";

const cx = classNames.bind(styles);

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Header />
      </div>
      <div className={cx("container")}>{children}</div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
