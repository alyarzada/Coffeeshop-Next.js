import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[50px] py-[30px] mb-[40px]">
      <Link href={"/"} className="italic">
        <span className="text-xl">I</span>❤️coffee!
      </Link>

      <nav>
        <ul className="flex gap-x-10">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/card"}>Card</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
