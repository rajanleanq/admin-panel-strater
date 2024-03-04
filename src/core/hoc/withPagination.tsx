"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Pagination from "antd/es/pagination";
import { PaginationMetaDTO } from "../interface/pagination";

export interface PaginationValue {
  paginationMeta: PaginationMetaDTO;
  setPaginationMeta: Dispatch<SetStateAction<PaginationMetaDTO>>;
}

export const withPagination = (WrappedComponent: any) => {
  const PaginatedTableWrapper = (props: any) => {
    const initialPagination: PaginationMetaDTO = {
      limit: 10,
      page_total: 0,
      total: 0,
      total_pages: 0,
      next: null,
      previous: null,
      page: 1,
    };
    const [paginationMeta, setPaginationMeta] =
      useState<PaginationMetaDTO>(initialPagination);

    const paginationValue: PaginationValue = {
      paginationMeta,
      setPaginationMeta,
    };

    const handlePaginationChange = (page: number) => {
      setPaginationMeta({ ...paginationMeta, page });
    };

    return (
      <>
        <WrappedComponent {...props} value={paginationValue} />
        <div className="flex mt-4 justify-end">
          <Pagination
            defaultCurrent={1}
            total={paginationMeta.total ?? 1}
            current={paginationMeta.page!}
            pageSize={paginationMeta.limit}
            onChange={handlePaginationChange}
          />
        </div>
      </>
    );
  };

  return PaginatedTableWrapper;
};