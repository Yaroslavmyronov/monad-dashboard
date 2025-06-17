import CautionTape from '../CautionTape';

function CustomAdress() {
  const text = ' in development • in development • in development • ';
  return (
    <div className="bg-sand p-4 flex flex-col relative select-none pointer-events-none">
      <CautionTape text={text} />

      <div className="relative inline-block w-[35px] aspect-square bg-midnight rounded-full cursor-pointer ml-auto">
        <div className="absolute top-1/2 left-1/2 h-[16px] border-r-2 border-sand rotate-45 -translate-x-1/2 -translate-y-1/2 origin-center"></div>
        <div className="absolute top-1/2 left-1/2 w-[10px] h-[10px] border-2 border-sand border-b-0 border-l-0 -translate-x-[30%] -translate-y-[70%] origin-center"></div>
      </div>
      <div className="grid grid-cols-2">
        <div className="text-[54px] leading-none text-midnight">
          <span>custom</span>
          <br />
          <span>address</span>
        </div>
        <div className="flex items-center gap-1 mt-auto ml-auto text-midnight">
          <div className="text-[14px]">10</div>
          <div className="text-[20px]">/</div>
          <div className="text-[14px]">20</div>
          <div className="text-[14px]">templates</div>
        </div>
      </div>
    </div>
  );
}

export default CustomAdress;
