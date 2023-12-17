import React from "react";
import Search from "./search";
import Premium from "../../../components/premium";
import Topics from "../../../components/topics";
const RightBar = () => {
  return( 
  <aside className="w-[350px] mr-2.5">
    <Search/>
    <Premium/>
    <Topics/>
  </aside>
  )
};

export default RightBar;
