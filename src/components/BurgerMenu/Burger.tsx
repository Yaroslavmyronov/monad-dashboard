import { CSSProperties, Dispatch, SetStateAction } from 'react';

interface BurgerInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function Burger({ open, setOpen }: BurgerInterface) {
  const commonStyle: CSSProperties = {
    width: '1rem',
    height: '0.125rem',
    background: '#fff',
    transition: 'all 0.3s ease',
    position: 'relative',
    transformOrigin: '1px',
  };

  return (
    <div
      onClick={() => setOpen(!open)}
      className="absolute top-[30px] right-[16px] flex flex-col justify-around w-[2rem] h-[2rem] bg-transparent cursor-pointer z-30 py-2 items-center border border-[hsla(0,0%,100%,0.1)]"
    >
      <div
        style={{
          ...commonStyle,
          transform: open ? 'rotate(45deg)  translateY(-1px) translateX(1px)' : 'rotate(0deg)',
        }}
      ></div>
      <div
        style={{
          ...commonStyle,
          opacity: open ? 0 : 1,
          transform: open ? 'translateX(20px)' : 'translateX(0)',
        }}
      ></div>
      <div
        style={{
          ...commonStyle,
          transform: open ? 'rotate(-45deg) translateY(1px) translateX(1px)' : 'rotate(0deg)',
        }}
      ></div>
    </div>
  );
}

export default Burger;
