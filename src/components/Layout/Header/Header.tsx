import { Component } from "../../../../types/Component";

import Img from "next/image";

const links = [{ label: "Why Us?", href: "/#why-us" }];

const Header: Component = () => {
  return (
    <header className="navbar bg-base-100 sticky top-0 z-40 px-2 py-0 shadow-sm mb-3">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          target="/"
          title="Home"
        >
          <Img
            src={"/android-icon-48x48.png"}
            alt="Media Swift"
            title="Media Swift"
            width={48}
            height={48}
          />
          <span className="flex flex-col">
            Media Swift
            {process.env.NODE_ENV != "production" && (
              <span className="text-sm opacity-80 -mt-2 capitalize">{process.env.NODE_ENV}</span>
            )}
          </span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 justify-center">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} title={link.label}>
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
