// CautionTape.tsx
const CautionTape = ({ text }: { text: string }) => {
  return (
    <div className="absolute inset-0 z-50 select-none">
      <div className="flex items-center justify-center w-full h-full backdrop-blur-xs">
        <div className="overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3">
          <div className="flex">
            <div className="whitespace-nowrap text-xl flex-shrink-0 animate-scroll-seamless text-[#1f1f21]">{text}</div>
            <div className="whitespace-nowrap text-xl text-[#1f1f21] flex-shrink-0 animate-scroll-seamless">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CautionTape;
