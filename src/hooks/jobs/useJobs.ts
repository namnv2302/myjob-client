import { useEffect, useState } from "react";
import { IJobs } from "@slices/authorization/authorizationSlice";
import { getJobsList } from "@/apis/jobs";

const useJobs = (current: number, companyId?: number) => {
  const [data, setData] = useState<IJobs[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const resp = await getJobsList(current, companyId);
      if (resp.status === 200) {
        setData(resp.data.data);
        setCurrentPage(resp.data.meta.current);
        setTotalPages(resp.data.meta.pages);
        setTotalItems(resp.data.meta.total);
        setLoading(false);
      }
    })();
  }, [current, companyId]);

  return { data, currentPage, totalPages, totalItems, loading };
};

export default useJobs;
