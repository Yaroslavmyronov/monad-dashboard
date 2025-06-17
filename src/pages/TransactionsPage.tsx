import TransactionRow from '@/components/Transaction';
import { usePaginatedFetch } from '@/hooks/usePaginatedFetch';
import { useMetricsStore } from '@/services/store/useMetricsStore';

export type Transaction = {
  txHash: string;
  from: string;
  to: string;
  valueWei: string;
  timestamp: string;
};

function TransactionsPage() {
  const totalTransaction = useMetricsStore(state => state.metrics?.TotalTransaction);
  const { items: transaction, loading, hasMore, loadMore } = usePaginatedFetch<Transaction>('/transactions', 1, 20);
  const tableHeaders = ['Txn Hash', 'From', 'To', 'Age', 'Amount'];
  return (
    <div className="container flex-1">
      <div className="py-12">
        <div>
          <h1 className="text-3xl max-sm:text-2xl">Transactions</h1>
        </div>

        <div className="bg-[#1f1f21] p-3 mt-6">
          <div className="flex h-12 items-center px-4 py-3 bg-[#3f3f46]">
            <span>{isNaN(Number(totalTransaction)) ? null : Number(totalTransaction).toLocaleString('de-DE')}</span>
            <span className="ml-1 mt-0.5 text-xs">Txns Found</span>
          </div>

          <div className="mt-3 overflow-auto">
            <table className="table">
              <thead>
                <tr>
                  {tableHeaders.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transaction && transaction.length > 0 ? (
                  <>
                    {transaction.map(transaction => (
                      <TransactionRow key={transaction.txHash} transaction={transaction} />
                    ))}
                  </>
                ) : (
                  Array.from({ length: 20 }).map((_, index) => <TransactionRow key={index} transaction={null} />)
                )}
              </tbody>
            </table>
          </div>
        </div>
        {hasMore && (
          <div className="mt-4 text-center">
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <button onClick={loadMore} className="border px-4 py-2 text-sm cursor-pointer">
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionsPage;
