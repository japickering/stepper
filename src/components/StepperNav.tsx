import React, { useState, useEffect } from 'react';

const defaultMenu = [
  { id: 1, name: 'units', isActive: true },
  { id: 2, name: 'taps', isActive: false },
];

const menuItem2Active = [
  { id: 1, name: 'units', isActive: true },
  { id: 2, name: 'taps', isActive: true },
];

export default function StepperNav() {
  const [menuType, setMenuType] = useState(1);
  const [menu, setMenu] = useState(defaultMenu);

  // TODO: Add switch case for menuType
  useEffect(() => {
    if (menuType === 1) {
      setMenu(defaultMenu);
    } else {
      setMenu(menuItem2Active);
    }
  }, [menuType]);

  return (
    <div className='stepper'>
      {menu.map((item) => {
        return (
          <div className='step'>
            <button
              type='button'
              className={item.isActive ? 'btn-step active' : 'btn-step'}
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                setMenuType(item.id);
              }}>
              {item.name}
            </button>
            <div className={item.isActive ? 'bar active' : 'bar'}></div>
          </div>
        );
      })}
    </div>
  );
}
