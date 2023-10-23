import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeCircle, BiSearch } from "react-icons/bi";
import classNames from "classnames";
const Menu = () => {
  return (
    <nav className="mt-0.5 mb-1">
      <NavLink to="/" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              { "font-bold": isActive }
            )}
          >
            <BiHomeCircle size={26.25} color="#e7e9ea" />
            <div className="text-xl pr-4">Anasayfa</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/explore" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
              { "font-bold": isActive }
            )}
          >
            <BiSearch size={26.25} color="#e7e9ea" />
            <div className="text-xl pr-4">Keşfet</div>
          </div>
        )}
      </NavLink>
    </nav>
  );
};

export default Menu;
