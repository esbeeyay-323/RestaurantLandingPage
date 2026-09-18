import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Drawer } from 'antd';
import hamburger from "../assets/Icons/hamburger-menu.png"
import close from "../assets/Icons/icons8-close-100.png"
import { NavLink } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { ConstactInfo } from '../Data/Contact';
import { navigationItems } from '../Data/NavigationItems';

type MyDrawerProps = {
  className: string;
};

const MyDrawer: React.FC<MyDrawerProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [drawerTop, setDrawerTop] = useState(0);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const updateDrawerTop = useCallback(() => {
    const header = triggerRef.current?.closest("header");
    const headerBounds = header?.getBoundingClientRect();

    setDrawerTop(headerBounds && headerBounds.bottom > 0
      ? Math.max(0, headerBounds.bottom)
      : 0);
  }, []);

  const showDrawer = () => {
    updateDrawerTop();
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    window.addEventListener("resize", updateDrawerTop);
    return () => window.removeEventListener("resize", updateDrawerTop);
  }, [open, updateDrawerTop]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={open ? onClose : showDrawer}
        className="relative h-12.5 w-12.5 cursor-pointer"
      >
        <img
          className={`absolute inset-0 h-full w-full object-contain transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${className} ${
            open ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
          src={hamburger}
          alt=""
          aria-hidden="true"
        />
        <img
          className={`absolute inset-0 h-full w-full object-contain p-1 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${className} ${
            open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
          }`}
          src={close}
          alt=""
          aria-hidden="true"
        />
      </button>
      <Drawer
        rootClassName="navigation-drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        size="min(70vw, 420px)"
        rootStyle={{ top: drawerTop }}
        styles={{
          mask: {
            backgroundColor: "rgba(24, 21, 18, 0.38)",
            backdropFilter: "blur(2px)",
          },
          wrapper: {
            boxShadow: "-18px 0 48px rgba(24, 21, 18, 0.28)",
          },
          section: {
            borderLeft: "1px solid rgba(200, 155, 82, 0.2)",
            background: "rgba(24, 21, 18, 0.9)",
            backdropFilter: "blur(18px) saturate(115%)",
          },
          body: { margin: 0, padding: 0, border: "none", background: "transparent" },
        }}
      >
        <div className="flex h-full w-full flex-col bg-transparent px-6 py-8">
          <nav aria-label="Mobile navigation" className="flex w-full flex-col items-center gap-2">
            {
                navigationItems.map((item)=>(
                    <NavLink
                    viewTransition
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={onClose}
                   className={({ isActive }) =>
                    `drawer-nav-item w-full text-center font-display ${
                      isActive
                        ? "drawer-nav-item--active"
                        : "drawer-nav-item--inactive"
                    }`}>
                      {item.label}
                    </NavLink>
                ))
            }
          </nav>
          <div className="drawer-socials" aria-label="Social channels">
            <p>Connect with us</p>
            <div>
              <a href={ConstactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppOutlined aria-hidden="true" /> WhatsApp
              </a>
              <a href={ConstactInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramOutlined aria-hidden="true" />
              </a>
              <a href={ConstactInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookOutlined aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MyDrawer;
