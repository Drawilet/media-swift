import { Component } from "types/Component";

const Footer: Component = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
      <aside>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <a
            href="https://drawilet.me"
            className="text-primary"
            target="_blank"
            title="Drawilet"
          >
            @Drawilet
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
