"use client";

import styles from "./pagination.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  ITEM_PER_PAGE: number;
  count: number;
};

const Pagination = ({ ITEM_PER_PAGE, count }: Props) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);

  const hasPrevPage = ITEM_PER_PAGE * (Number(page) - 1) > 0;
  const hasNextPage =
    ITEM_PER_PAGE * (Number(page) - 1) + ITEM_PER_PAGE < count;

  const handlePageChange = (type: string) => {
    if (type === "prev") {
      const prevPage = Number(page) - 1;
      params.set("page", String(prevPage));
    } else {
      const nextPage = Number(page) + 1;
      params.set("page", String(nextPage));
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrevPage}
        onClick={() => handlePageChange("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNextPage}
        onClick={() => handlePageChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
