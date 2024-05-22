import { useSearchParams } from "react-router-dom";

const useUrlQueries = () => {
  const [search] = useSearchParams();

  const queries: any = {};

  for (const [key, value] of search.entries()) {
    queries[key] = value;
  }

  return queries
};

export default useUrlQueries;
