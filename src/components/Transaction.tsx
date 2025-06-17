import { Transaction } from '@/pages/TransactionsPage';
import { formatEthWithSubShort } from '@/utils/formatEthWithSubShort ';
import { shortHash } from '@/utils/shorteHash';
import CopyButton from './CopyButton';

function TransactionRow({ transaction }: { transaction: Transaction | null }) {
  if (!transaction) {
    return (
      <tr className="animate-pulse">
        {Array.from({ length: 5 }).map((_, index) => (
          <td key={index}>
            <div className="h-8 bg-gray-700/50 w-full inline-block" />
          </td>
        ))}
      </tr>
    );
  }
  const now = Date.now();
  const time =
    typeof transaction.timestamp === 'number'
      ? transaction.timestamp * 1000
      : new Date(transaction.timestamp).getTime();
  const diffInSeconds = Math.floor((now - time) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds % 60;
  const { integerPart, first4Digits } = formatEthWithSubShort(transaction.valueWei);

  return (
    <tr>
      <td>
        <div className="border px-2 py-1 text-brand dark:bg-[#FFFFFF12] inline-flex">
          {transaction.txHash ? shortHash(transaction.txHash) : '-'}
          {transaction.txHash && <CopyButton text={transaction.txHash}></CopyButton>}
        </div>
      </td>
      <td>
        <div className="border px-2 py-1 text-brand dark:bg-[#FFFFFF12] inline-flex">
          {transaction.from ? shortHash(transaction.from) : '-'}
          {transaction.from && <CopyButton text={transaction.from}></CopyButton>}
        </div>
      </td>
      <td>
        <div className="border px-2 py-1 text-brand dark:bg-[#FFFFFF12] inline-flex">
          {transaction.to ? shortHash(transaction.to) : '-'}
          {transaction.to && <CopyButton text={transaction.to}></CopyButton>}
        </div>
      </td>
      <td>{`${minutes} mins ${seconds} secs ago`}</td>
      <td>
        <div>
          <span>
            0.{integerPart}
            {first4Digits && (
              <>
                <sub>2</sub>
                {first4Digits}
              </>
            )}{' '}
            mon
          </span>
        </div>
      </td>
    </tr>
  );
}

export default TransactionRow;
