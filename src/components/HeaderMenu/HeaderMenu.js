import Link from "antd/es/typography/Link";
import React from "react";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  return (
    <div className="header_menu">
      <ul>
        <li>
          <Link>Product</Link>
        </li>
        <li>
          <Link>Solutions</Link>
        </li>
        <li>
          <Link>Marketplace</Link>
        </li>
        <li>
          <Link>Community</Link>
        </li>
        <li>
          <Link>Partners</Link>
        </li>
        <li>
          <Link>Pricing</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
