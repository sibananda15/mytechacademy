"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/data";

const links = [
  {href: "/", label: "Home"},
  {href: "/courses", label: "Courses"},
  {href: "/instructors", label: "Instructors"},
  {href: "/schedule", label: "Schedule"},
  {href: "/pricing", label: "Pricing"},
  {href: "/contact", label: "Contact"},
  {href: "/apply", label: "Apply"}
];

export default function Navbar(){
  const pathname = usePathname();
  return (
    <header className="border-b bg-white/80 sticky top-0 z-50 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <span className="font-semibold">{SITE.name}</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname===l.href ? "active" : ""}>{l.label}</Link>
          ))}
        </nav>
        <Link href="/apply" className="btn text-sm">Apply</Link>
      </div>
    </header>
  )
}
