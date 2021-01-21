export namespace Pagination {
  export interface IPaginationOptions {
    limit: number;
    page: number;
  }

  export interface IPaginationResult<T> {
    results: T[];
    totalPages: number;
    total: number;
  }

  export class PaginationData<T> implements IPaginationResult<T> {
    public results: T[];
    public totalPages: number;
    public total: number;

    constructor(paginationResults: IPaginationResult<T>) {
      this.results = paginationResults.results;
      this.totalPages = paginationResults.totalPages;
      this.total = paginationResults.total;
    }
  }
}
