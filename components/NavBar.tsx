"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
];

const NavBar = () => {
  const pathname = usePathname();
  const activeClass = "text-white";

  return (
    // bg-stone-400
    <header className="w-full h-10 flex items-center justify-between px-10 bg-red-300">
      <Link
        href="/"
        className="text-stone-700 bg-stone-300 border border-stone-500 py-0.5 px-2.5 rounded-md"
      >
        Practice.nextjs
      </Link>
      <nav className="h-full">
        <ul className="flex items-center gap-10 h-full">
          {links.map((link) => {
            const active = pathname === link.href && activeClass;
            return (
              <li key={link.href}>
                <Link href={link.href} className={`hover:text-white ${active}`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
