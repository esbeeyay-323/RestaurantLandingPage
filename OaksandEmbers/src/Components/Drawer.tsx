import React, { useState } from 'react';
import { Drawer } from 'antd';
import hamburger from "../assets/Icons/hamburger-menu.png"
import close from "../assets/Icons/icons8-close-100.png"



const Menu = [
    {
        id:1,
        name:"Menu"
    },
    {
        id:2,
        name:"Reservations"
    },
    {
        id:1,
        name:"About"
    },
    {
        id:1,
        name:"Gallery"
    },
    {
        id:1,
        name:"Contact"
    }
]

const MyDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={showDrawer} className='w-12.5'>
        <img className='w-full brightness-0 invert' src={hamburger}></img>
      </div>
      <Drawer
        closable={{ placement: 'end' }}
        onClose={onClose}
         closeIcon={
     <img className='w-12.5 brightness-0 invert' src={close}></img>}
        open={open}
        size="min(70vw, 420px)"
        styles={{
          header: { margin: 0, padding: 16, border : "none", backgroundColor:"#0B0A08" },
          body: { margin: 0, padding: 0, border: "none" },
        }}
      >
        <div className='h-full p-6 w-full flex flex-col gap-6 bg-coal-950 items-center'>
            {
                Menu.map((item)=>(
                    <p className='border-b w-full text-center text-2xl p-4 border-brass-400 text-bone-50' key={item.id}>
                        {item.name}
                    </p>
                ))
            }
        </div>
      </Drawer>
    </>
  );
};

export default MyDrawer;
