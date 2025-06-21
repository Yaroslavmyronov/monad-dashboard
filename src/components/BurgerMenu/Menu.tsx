import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { LinkItem } from './BurgerMenu';

interface MenuProps {
  open: boolean;
  links: LinkItem[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function Menu({ open, links, setOpen }: MenuProps) {
  return (
    <div
      className={`flex flex-col justify-start items-center transform transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      } h-screen text-right p-8 fixed inset-0  bg-midnight z-20 overflow-y-auto `}
    >
      <div className="flex flex-col w-full items-center justify-center gap-y-12 mt-auto mb-auto">
        {links.map(({ to, label }, index) => (
          <Link
            onClick={() => setOpen(false)}
            key={index}
            to={to}
            className="textarea-md py-3 text-center w-full max-w-[200px] border"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Menu;
