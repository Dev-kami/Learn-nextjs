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
    <header className="bg-stone-400 w-full h-10">
      <nav className="h-full">
        <ul className="flex items-center justify-end px-10 gap-10 h-full">
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
