"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center px-[50px] py-[30px] mb-[40px]">
      <Link href={"/"} className="italic">
        <span className="text-xl">I</span>❤️coffee!
      </Link>

      <nav>
        <ul className="flex gap-x-10">
          <li>
            <Link href="/" prefetch={false}>
              Home
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/card">
              Card
            </Link>
          </li>
          <li>
            <Link href="/test">Test Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
