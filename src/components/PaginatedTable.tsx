interface PaginatedTableProps<T> {
  title: string;
  items: T[];
  columns: string[];
  renderRow: (item: T) => React.ReactNode;
  hasMore: boolean;
  loadMore: () => void;
  loading: boolean;
  totalCount?: number;
}

function PaginatedTable<T>({
  title,
  items,
  columns,
  renderRow,
  hasMore,
  loadMore,
  loading,
  totalCount,
}: PaginatedTableProps<T>) {
  return (
    <div className="container flex-1">
      <div className="py-12">
        <h1>{title}</h1>

        <div className="bg-[#1f1f21] p-3 mt-6">
          <div className="flex h-12 items-center px-4 py-3 bg-[#3f3f46]">
            <span>{totalCount ?? items.length}</span>
            <span className="ml-1 mt-0.5 text-xs">items found</span>
          </div>

          <div className="mt-3 overflow-auto">
            <table className="table">
              <thead>
                <tr>
                  {columns.map((col, index) => (
                    <th key={index}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{items.map(item => renderRow(item))}</tbody>
            </table>
          </div>
        </div>

        {hasMore && (
          <div className="mt-4 text-center">
            <button onClick={loadMore} className="border px-4 py-2 text-sm" disabled={loading}>
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaginatedTable;
