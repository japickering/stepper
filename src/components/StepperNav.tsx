import React, { useState, useEffect } from 'react';

const defaultMenu = [
  { id: 1, name: 'units', isActive: true },
  { id: 2, name: 'taps', isActive: false },
  { id: 3, name: 'accessories', isActive: false },
];

const menuTapsActive = [
  { id: 1, name: 'units', isActive: true },
  { id: 2, name: 'taps', isActive: true },
  { id: 3, name: 'accessories', isActive: false },
];

const menuAccessoriesActive = [
  { id: 1, name: 'units', isActive: true },
  { id: 2, name: 'taps', isActive: true },
  { id: 3, name: 'accessories', isActive: true },
];

export default function StepperNav() {
  const [menuType, setMenuType] = useState(1);
  const [menu, setMenu] = useState(defaultMenu);

  useEffect(() => {
    switch (menuType) {
      case 1:
        setMenu(defaultMenu);
        break;
      case 2:
        setMenu(menuTapsActive);
        break;
      case 3:
        setMenu(menuAccessoriesActive);
        break;
      default:
        setMenu(defaultMenu);
        break;
    }
  }, [menuType]);

  const renderBarsByMenuState = (menuType: number, id: number) => {
    switch (menuType) {
      case 1:
        if (id === 1 || id === 2) {
          return <div className='bar'></div>;
        } else {
          return <div className='bar hidden'></div>;
        }
      case 2:
        if (id === 1) {
          return <div className='bar active'></div>;
        } else if (id === 2) {
          return <div className='bar'></div>;
        } else {
          return <div className='bar hidden'></div>;
        }
      case 3:
        if (id === 1 || id === 2) {
          return <div className='bar active'></div>;
        } else {
          return <div className='bar hidden'></div>;
        }
      default:
        break;
    }
  };

  return (
    <div className='stepper'>
      <ul>
        {menu.map((item) => {
          return (
            <li key={item.id}>
              <button
                type='button'
                className={item.isActive ? 'btn-step active' : 'btn-step'}
                onClick={(event: React.MouseEvent) => {
                  event.preventDefault();
                  setMenuType(item.id);
                }}>
                <span>{item.id}</span>
              </button>
              {renderBarsByMenuState(menuType, item.id)}
              <div className={item.isActive ? 'label active' : 'label'}>{item.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
