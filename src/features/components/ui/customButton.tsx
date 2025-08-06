import type { ReactNode } from "react";
import { Link } from "react-router";

export const CustomButton = ({
  label,
  href,
  icon,
}: {
  icon?: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Link
      to={href}
      className="bg-gray-400/20 p-6 rounded-lg shadow-md mb-2 text-center flex items-center gap-2 justify-center"
    >
      {icon}
      {label}
    </Link>
  );
};
