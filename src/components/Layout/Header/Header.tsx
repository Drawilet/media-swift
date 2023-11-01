import { Component } from "../../../../types/Component";

import Img from "next/image";

const links = [{ label: "Why Us?", href: "/#why-us" }];

const Header: Component = () => {
  return (
    <header className="navbar bg-base-100 sticky top-0 z-40 px-5">
      <div className="flex-1">
        <Img
          src={"/android-icon-48x48.png"}
          alt="Media Swift"
          title="Media Swift"
          width={48}
          height={48}
        />

        <a
          className="btn btn-ghost normal-case text-xl"
          target="/"
          title="Home"
        >
          Media Swift
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.label}>
              <a className="btn btn-ghost" href={link.href} title={link.label}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
