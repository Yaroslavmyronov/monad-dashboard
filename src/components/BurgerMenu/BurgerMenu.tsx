import { useEffect, useRef, useState } from 'react';
import Burger from './Burger';
import Menu from './Menu';

export type LinkItem = {
  to: string;
  label: string;
  value: string | null;
  align: string;
};

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

interface BurgerMenuProps {
  links: LinkItem[];
}

function BurgerMenu({ links }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [open]);

  return (
    <div className="block md:hidden" ref={node}>
      <Burger open={open} setOpen={setOpen}></Burger>
      <Menu setOpen={setOpen} links={links} open={open}></Menu>
    </div>
  );
}

export default BurgerMenu;
