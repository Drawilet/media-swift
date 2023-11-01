import { Component } from "../../../../types/Component";

const links = [{ name: "Why Us?", href: "/#why-us" }];

const Header: Component = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" target="/">
          Media Swift
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.name}>
              <a className="btn btn-ghost" href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
