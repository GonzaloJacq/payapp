import { Link } from "react-router";

export const CustomButton = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => {
  return (
    <Link
      to={href}
      className="bg-gray-400/20 p-6 rounded-lg shadow-md block mb-2 text-center"
    >
      {label}
    </Link>
  );
};
