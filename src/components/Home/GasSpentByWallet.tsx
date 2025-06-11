function GasSpentByWallet() {
  return (
    <div className="bg-[#1f1f21] p-4">
      <div className="flex flex-col h-full">
        <div>Gas Spent by Wallet</div>
        <div className="flex justify-between items-end mt-auto">
          <div className="text-[64px] tracking-[-6px] leading-none">5.01</div>
          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">$18.00</div>
          </div>
        </div>
        <progress
          className="progress w-full mt-3 rounded-none [&::-webkit-progress-bar]:rounded-none [&::-webkit-progress-value]:rounded-none [&::-webkit-progress-value]:bg-[var(--sand)] [&::-moz-progress-bar]:rounded-none [&::-moz-progress-bar]:bg-[var(--sand)]"
          value="70"
          max="100"
        ></progress>
      </div>
    </div>
  );
}

export default GasSpentByWallet;
