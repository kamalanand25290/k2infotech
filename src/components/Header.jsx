"use client";

import { useState, useEffect } from "react";

const menuItems = [
  "home",
  "about",
  "services",
  "portfolio",
  "testimonials",
  "process",
  "pricing",
  "blog",
  "career",
  "contact",
  "faq",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      menuItems.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition ${
      activeSection === id
        ? "text-blue-600 font-semibold"
        : "hover:text-blue-600"
    }`;

  return (
    <header className="dark-bg z-99 fixed left-1/2 -translate-x-1/2 w-full  px-3">
      <div className="max-w-7xl mx-auto px-4 py-2 md:px-6 md:py-4 flex items-center gap-20 justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/"><img src="../k2infotech.png" alt="Logo" className="h-16" /></a>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-5">
          <nav className="hidden lg:flex gap-5 font-medium">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={linkClass(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="dark-bg lg:hidden border-t px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`block ${linkClass(item)}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}