import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Header from "@/components/Layouts/components/Header";
import Footer from "@/components/Layouts/components/Footer";
import { getAccessToken } from "@/utils/localstorage";
import { whoAmI } from "@/apis/auth";
import { useAppDispatch } from "@/redux/hooks";
import { login } from "@slices/authorization/authorizationSlice";

const cx = classNames.bind(styles);

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (getAccessToken() == null) return;
      const respAuth = await whoAmI();
      if (respAuth.status === 200 && respAuth.data) {
        dispatch(login(respAuth.data));
      }
    })();
  }, [dispatch]);

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
