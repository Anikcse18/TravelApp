import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="max-container padding-container flexBetween relative z-30  py-5 border-red-600 border-2">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
