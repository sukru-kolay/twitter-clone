import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/consts";
const Menu = () => {
  return (
    <nav className="mt-0.5 mb-1">
     { mainMenu.map((menu,index)=>(
            <NavLink to={menu.path} className="py-1 block group">
            {({ isActive }) => (
              <div
                className={classNames(
                  "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
                  { "font-bold": isActive }
                )}
              >
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
                <div className="text-xl pr-4">{menu.title}</div>
              </div>
            )}
          </NavLink>
     ))}
    </nav>
  );
};

export default Menu;
