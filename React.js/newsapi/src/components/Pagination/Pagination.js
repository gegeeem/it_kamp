import { useState } from "react";
import { Pagination } from "@mantine/core";

function perPage({ activePage, total, func }) {
  const [actPage, setPage] = useState(1);
  return <Pagination page={activePage} onChange={func} total={total} />;
}
