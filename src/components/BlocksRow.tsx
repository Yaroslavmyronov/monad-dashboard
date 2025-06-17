import { Block } from '@/pages/BlocksPage';
import { shortHash } from '@/utils/shorteHash';
import CopyButton from './CopyButton';
import ProgressBar from './ProgressBar';

function BlocksRow({ block }: { block: Block | null }) {
  if (!block) {
    return (
      <tr className="animate-pulse">
        {Array.from({ length: 6 }).map((_, index) => (
          <td key={index}>
            <div className="h-8 bg-gray-700/50 w-full inline-block" />
          </td>
        ))}
      </tr>
    );
  }
  const now = Date.now();
  const time = typeof block.timestamp === 'number' ? block.timestamp * 1000 : new Date(block.timestamp).getTime();
  const diffInSeconds = Math.floor((now - time) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds % 60;
  const progress = parseFloat(((Number(block.gasUsed) / Number(block.gasLimit)) * 100).toFixed(1));

  return (
    <tr>
      <td>
        <div className="border px-2 py-1 text-brand dark:bg-[#FFFFFF12] inline-block">{block.height}</div>
      </td>
      <td>
        <div className="border px-2 py-1 text-brand dark:bg-[#FFFFFF12] inline-flex">
          {shortHash(block.hash)}
          <CopyButton text={block.hash}></CopyButton>
        </div>
      </td>
      <td>{block.txAmount}</td>
      <td>
        <div className="inline-block">
          <div className="flex items-center gap-1">
            <div>{Number(block.gasUsed).toLocaleString('de-DE')}</div>
            <span className="text-gray">{`(${progress})%`}</span>
          </div>
          <ProgressBar className="mr-auto h-0.5" progress={progress}></ProgressBar>
        </div>
      </td>
      <td>{Number(block.gasLimit).toLocaleString('de-DE')}</td>
      <td>{`${minutes} mins ${seconds} secs ago`}</td>
    </tr>
  );
}

export default BlocksRow;
