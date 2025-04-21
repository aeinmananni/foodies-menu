"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href }: Props) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${path.startsWith(href) && "neon-orange-text"}`}
    >
      {children}
    </Link>
  );
}
