"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
];

const NavLinks = () => {
  const pathname = usePathname();
  const activeClass = "text-white";

  return (
    <header className="bg-stone-400 w-full h-12 flex items-center justify-between px-10">
      <h1 className="text-stone-700 bg-stone-300 border border-stone-500 py-1 px-3 rounded-md cursor-default">
        Practice.nextjs
      </h1>
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

export default NavLinks;
