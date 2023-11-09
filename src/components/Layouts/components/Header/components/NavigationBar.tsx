import { useMemo } from "react";
import type { MenuProps } from "antd";
import { Menu, Typography } from "antd";

const NavigationBar = () => {
  const items: MenuProps["items"] = useMemo(() => {
    return [
      {
        label: (
          <Typography.Text className="text-default">Trang chủ</Typography.Text>
        ),
        key: 1,
      },
      {
        label: (
          <Typography.Text className="text-default">Việc làm</Typography.Text>
        ),
        key: 2,
      },
      {
        label: (
          <Typography.Text className="text-default">Công ty</Typography.Text>
        ),
        key: 3,
      },
      {
        label: (
          <Typography.Text className="text-default">Bài viết</Typography.Text>
        ),
        key: 4,
      },
    ];
  }, []);

  return <Menu style={{ flex: 1 }} items={items} mode="horizontal" />;
};

export default NavigationBar;
