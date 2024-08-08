import clsx from "clsx";
import style from "./button.module.css";

import Link from "next/link";

type ButtonProps = {
  as: "button" | "link";
  appearance?: string;
  href?: string;
  size?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  as,
  appearance,
  className,
  size,
  href,
  children,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    "w-[300px] rounded-[20px] p-2 bg-white flex items-center justify-center text-15 font-bold",
    {
      [style.isBlack]: appearance === "black",
      [style.isBlue]: appearance === "blue",
    },
    className
  );

  return as === "link" && href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
