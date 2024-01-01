import axiosInstance from "@/utils/axios";

export enum JobsPath {
  Default = "/jobs",
  Detail = "/jobs/:id",
}

export const getJobsList = async (current: number = 1, companyId?: number) => {
  return await axiosInstance.get(JobsPath.Default, {
    params: { current, companyId },
  });
};
