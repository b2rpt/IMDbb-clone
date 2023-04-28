import Link from "next/link";

const Menu = ({ title, Icon, path }) => {
  return (
    <div>
      <Link className="mx-4 lg:mx-6 hover:text-amber-600" href={path}>
        <Icon className="mx-4 text-2xl sm:hidden" />
        <p className="hidden sm:inline">{title}</p>
      </Link>
    </div>
  );
};
export default Menu;
