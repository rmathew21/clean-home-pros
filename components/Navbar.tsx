"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav
      style={{ backgroundColor: "#012D63" }}
      className="sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 text-white no-underline"
        >
          <div
            style={{ backgroundColor: "#047A95" }}
            className="w-8 h-8 rounded-full flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span style={{ fontFamily: 'var(--font-lora), serif', fontWeight: 600 }} className="text-white text-lg leading-tight">
            Clean Home Pros
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
                <Link 
                    key={link.to}
                    href={link.to}
                    className="no-underline transition-colors"
                    style={{
                        color: isActive(link.to) ? '#047A95' : 'rgba(255,255,255,0.85)',
                        fontFamily: 'var(--font-jakarta), sans-serif',
                        fontWeight: isActive(link.to) ? 600 : 400,
                        borderBottom: isActive(link.to) ? '2px solid #047A95' : '2px solid transparent',
                        paddingBottom: '2px',
                    }}
                    >
                    {link.label}
                </Link>
            ))}
            <Link 
                href='/contact'
                style={{
                    backgroundColor: '#047A95',
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    fontWeight: 600,
                }}
                className="text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
            >
                Get a Quote
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            >
                {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: '#012D63', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="md:hidden px-6 pb-4">
            {links.map((link) => (
                <Link 
                    key={link.to}
                    href={link.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 no-underline border-b"
                    style={{
                        color: isActive(link.to) ? '#047A95' : 'rgba(255,255,255,0.85)',
                        borderColor: 'rgba(255,255,255,0.08)',
                        fontFamily: 'var(--font-jakarta), sans-serif',
                        fontWeight: isActive(link.to) ? 600 : 400,
                    }}
                    >
                    {link.label}
                </Link>
            ))}
            <Link 
                href='/contact'
                onClick={() => setOpen(false)}
                style={{ backgroundColor: '#047A95', fontFamily: 'var(--font-jakarta), sans-serif' }}
                className="mt-4 block text-center text-white px-5 py-2 rounded-full text-sm font-semibold no-underline"
                >
                    Get a Quote
            </Link>
        </div>
      )}
    </nav>
  );
}
