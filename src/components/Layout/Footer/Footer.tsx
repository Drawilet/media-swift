import { useI18n } from "@drawilet/nextjs-i18n";
import { Component } from "types/Component";

export const _i18n = {
  mark: "Copyright © 2023 - All right reserved by",
};
const Footer: Component = () => {
  const i18n = useI18n("components", "/Layout/Footer/Footer");

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
      <aside>
        <p>
          {i18n("mark")}{" "}
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
