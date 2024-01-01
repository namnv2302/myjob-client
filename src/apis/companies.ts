import axiosInstance from "@/utils/axios";

export enum CompaniesPath {
  Default = "/companies",
  Detail = "/companies/:id",
}

export const getCompaniesList = async (current: number = 1) => {
  return await axiosInstance.get(CompaniesPath.Default, {
    params: { current },
  });
};
