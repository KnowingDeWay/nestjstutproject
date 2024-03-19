interface PaginationMeta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPage: number;
    currentPage: number;
}

class PaginatedDto<TData> {
    items: TData[];
    meta: PaginationMeta;
}

export { PaginationMeta, PaginatedDto }