import BlocksRow from '@/components/BlocksRow';
import { usePaginatedFetch } from '@/hooks/usePaginatedFetch';
import { useMetricsStore } from '@/services/store/useMetricsStore';

export type Block = {
  gasLimit: string;
  gasUsed: string;
  hash: string;
  height: string;
  timestamp: string;
  txAmount: string;
};

function BlocksPage() {
  const latestBlock = useMetricsStore(state => state.metrics?.LatestBlock);
  const { items: blocks, loading, hasMore, loadMore } = usePaginatedFetch<Block>('/blocks', 1, 20);

  const tableHeaders = ['Height', 'Hash', 'Txns', 'Gas Used', 'Gas Limit', 'Age'];
  return (
    <div className="container flex-1">
      <div className="py-12">
        <div>
          <h1 className="text-3xl max-sm:text-2xl">blocks</h1>
        </div>
        <div className="bg-[#1f1f21] p-3 mt-6">
          <div className="flex h-12 items-center px-4 py-3 bg-[#3f3f46]">
            <span>{isNaN(Number(latestBlock)) ? null : Number(latestBlock).toLocaleString('de-DE')}</span>
            <span className="ml-1 mt-0.5 text-xs">blocks found</span>
          </div>
          <div className="mt-3 overflow-auto">
            <table className="table">
              <thead>
                <tr>
                  {tableHeaders.map((item, index) => (
                    <th key={index}>
                      <div>{item}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {blocks && blocks.length > 0 ? (
                  <>
                    {blocks.map(block => (
                      <BlocksRow key={block.hash} block={block} />
                    ))}
                  </>
                ) : (
                  Array.from({ length: 20 }).map((_, index) => <BlocksRow key={index} block={null} />)
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

export default BlocksPage;
