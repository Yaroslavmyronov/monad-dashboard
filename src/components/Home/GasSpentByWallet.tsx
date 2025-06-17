import CautionTape from '../CautionTape';
import ProgressBar from '../ProgressBar';

function GasSpentByWallet() {
  const text = ' in development • in development • in development • ';
  return (
    <div className="bg-[#1f1f21] p-4 min-h-[288px] select-none relative">
      <CautionTape text={text}></CautionTape>
      <div className="flex flex-col h-full">
        <div>Gas Spent by Wallet</div>
        <div className="flex justify-between items-end mt-auto">
          <div className="text-[64px] tracking-[-6px] leading-none">5.01</div>
          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">$18.00</div>
          </div>
        </div>
        <div className="mt-3">
          <ProgressBar className="h-1.5" progress={75}></ProgressBar>
        </div>
      </div>
    </div>
  );
}

export default GasSpentByWallet;
