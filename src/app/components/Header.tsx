import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-black">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link
          href="/"
          className={`text-gray-800 ${
            pathname === "/" ? "border-blue-500 border-b-2" : ""
          } transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6`}
        >
          All Task
        </Link>
        <Link
          href="/AddTask"
          className={`text-gray-800 ${
            pathname === "/AddTask" ? "border-blue-500 border-b-2" : ""
          } transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6`}
        >
          Add Task
        </Link>
      </div>
    </nav>
  );
};

export default Header;
