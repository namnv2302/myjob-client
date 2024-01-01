import { useEffect, useState } from "react";
import { ICompanies } from "@slices/authorization/authorizationSlice";
import { getCompaniesList } from "@/apis/companies";

const useCompanies = (current: number) => {
  const [data, setData] = useState<ICompanies[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const resp = await getCompaniesList(current);
      if (resp.status === 200) {
        setData(resp.data.data);
        setCurrentPage(resp.data.meta.current);
        setTotalPages(resp.data.meta.pages);
        setLoading(false);
      }
    })();
  }, [current]);

  return { data, currentPage, totalPages, loading };
};

export default useCompanies;
