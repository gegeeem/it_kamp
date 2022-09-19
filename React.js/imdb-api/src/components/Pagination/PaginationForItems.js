import { useState } from "react";
import { Pagination } from "@mantine/core";

export default function PaginationForItems({ total }) {
  const [activePage, setPage] = useState(1);
  return <Pagination page={activePage} onChange={setPage} total={total} />;
}
