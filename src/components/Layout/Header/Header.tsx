import { Component } from "../../../../types/Component";

const Header: Component = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" target="/">Media Swift</a>
      </div>
    </header>
  );
};

export default Header;
