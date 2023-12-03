import images from "@assets/images";

export type FooterDataType = {
  icon?: string;
  label: string;
};

export const company: FooterDataType[] = [
  {
    label: "Về chúng tôi",
  },
  {
    label: "Sự nghiệp",
  },
  {
    label: "Blogs",
  },
  {
    label: "FAQ's",
  },
];

export const support: FooterDataType[] = [
  {
    label: "Chính sách bảo mật",
  },
  {
    label: "Điều khoản sử dụng",
  },
  {
    label: "Trung tâm trợ giúp",
  },
  {
    label: "Tài liệu",
  },
];

export const connect: FooterDataType[] = [
  {
    icon: images.facebookIcon,
    label: "Facebook",
  },
  {
    icon: images.instagramIcon,
    label: "Instagram",
  },
  {
    icon: images.youtubeIcon,
    label: "Youtube",
  },
];
