import React from "react";
import Search from "./search";
import Premium from "../../../components/premium";
const RightBar = () => {
  return( 
  <aside className="w-[350px] mr-2.5">
    <Search/>
    <Premium/>
  </aside>
  )
};

export default RightBar;
