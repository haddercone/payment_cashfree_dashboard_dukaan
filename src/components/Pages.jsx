import React from "react";
import { svgs } from "../assets/exports";
import { memo } from "react";
const {
  analytics,
  appearance,
  audience,
  delivery,
  discount,
  home,
  marketing,
  orders,
  payments,
  plugins,
  products,
  tools,
} = svgs;

const navBarButtons = [
  { icon: home, label: "Home" },
  { icon: orders, label: "Orders" },
  { icon: products, label: "Products" },
  { icon: delivery, label: "Delivery" },
  { icon: marketing, label: "Marketing" },
  { icon: analytics, label: "Analytics" },
  { icon: payments, label: "Payments" },
  { icon: tools, label: "Tools" },
  { icon: discount, label: "Discount" },
  { icon: audience, label: "Audience" },
  { icon: appearance, label: "Appearance" },
  { icon: plugins, label: "Plugins" },
];

const Pages = () => {
  return (
    <div className="w-52 m-1">
      {navBarButtons.map((button) => {
        const { icon, label } = button;
        return (
          <a
            href="#"
            key={label}
            className={`w-52 h-9 flex justify-start items-center gap-4 my-3 ml-1 rounded py-2 px-4 ${
              label === "Payments" ? "bg-[#FFFFFF1A]" : ""
            }`}
          >
            <img src={icon} className="w-5 h-5 opacity-80" alt="" />
            {label}
          </a>
        );
      })}
    </div>
  );
};

export default memo(Pages);
