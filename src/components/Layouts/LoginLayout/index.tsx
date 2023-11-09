import { usePathname } from "next/navigation";
import classNames from "classnames/bind";
import styles from "./LoginLayout.module.scss";
import LoginRightPanel from "@/components/Layouts/components/LoginRightPanel";
import { ROUTE_PATH } from "@/constants/routes";

const cx = classNames.bind(styles);

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>{children}</div>
      <div className={cx("right")}>
        <LoginRightPanel
          bg={pathname === ROUTE_PATH.ACCOUNT_SIGN_UP ? true : false}
        />
      </div>
    </div>
  );
};

export default LoginLayout;
