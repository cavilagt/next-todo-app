import React from "react";
import { Filter } from "./Filter";
import { PAGES } from "./Constants";
import Link from "next/link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        <Filter />
      </div>
      <div className="item">
        <div>
          <Link href={PAGES.ADD_NEW} className="ui button primary">Add</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
