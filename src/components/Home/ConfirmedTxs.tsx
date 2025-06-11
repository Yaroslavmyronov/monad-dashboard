function ConfirmedTxs() {
  return (
    <div className="bg-[#1f1f21] p-4">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          <div>Confirmed Txs</div>
          <div className="flex gap-[3px] flex-col opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-auto">
          <div className="text-[64px] tracking-[-10px] leading-none">2</div>
          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedTxs;
