import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  isActive: boolean;
}

interface StepperProps {
  defaultMenu: Item[];
  menuTaps: Item[];
  menuAccessories: Item[];
}

export default function Stepper({ defaultMenu, menuTaps, menuAccessories }: StepperProps): JSX.Element {
  const [menuType, setMenuType] = useState(1);
  const [menu, setMenu] = useState(defaultMenu);

  useEffect(() => {
    switch (menuType) {
      case 1:
        setMenu(defaultMenu);
        break;
      case 2:
        setMenu(menuTaps);
        break;
      case 3:
        setMenu(menuAccessories);
        break;
      default:
        setMenu(defaultMenu);
        break;
    }
  }, [menuType, defaultMenu, menuTaps, menuAccessories]);

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
        console.error('no matching menu type');
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
