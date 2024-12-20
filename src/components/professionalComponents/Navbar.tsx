"use client";

import React, { useState, useEffect, useRef } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a `utils` file with `cn` from shadcn
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false); // Close mobile menu if clicked outside
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState); // Toggle the menu
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-black transition-colors duration-300 ",
        scrolled ? "bg-black " : "bg-black"
      )}
    >
      <div className="container max-w-6xl mx-auto flex bg-black bg-opacity-100 items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80} // You can set the width
            height={50} // You can set the height
            className="object-contain" // Ensures the logo doesn't get distorted
          />
        </a>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#newhero" className="text-white hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#trainingcontent" className="text-white hover:text-blue-600">
                Training Content
              </a>
            </li>
            <li>
              <a href="#liveProjects" className="text-white hover:text-blue-600">
                Live Project
              </a>
            </li>
            <li>
              <a href="#successstories" className="text-white hover:text-blue-600">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#contactus" className="text-white hover:text-blue-600">
                Inquire Now
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
          onClick={toggleMobileMenu} // Toggle mobile menu on click
        >
          <List className="h-6 w-6"/>
        </button>

        {/* Call to Action Button */}
        <a
          href="#bookyourseat"
          className="hidden lg:block bg-[#ff0000] text-white px-4 py-2 rounded-lg hover:shadow-white hover:shadow-md"
        >
          Book Your Seat
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute right-4 top-full bg-white w-64 shadow-md z-40"
        >
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="#newhero"
                  className="text-black hover:text-blue-600"
                  onClick={() => { closeMobileMenu(); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#trainingcontent"
                  className="text-black hover:text-blue-600"
                  onClick={() => { closeMobileMenu(); }}
                >
                  Training Content
                </a>
              </li>
              <li>
                <a
                  href="#liveProjects"
                  className="text-black hover:text-blue-600"
                  onClick={() => { closeMobileMenu(); }}
                >
                  Live Project
                </a>
              </li>
              <li>
                <a
                  href="#successstories"
                  className="text-black hover:text-blue-600"
                  onClick={() => { closeMobileMenu(); }}
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#contactus"
                  className="text-black hover:text-blue-600"
                  onClick={() => { closeMobileMenu(); }}
                >
                  Inquire Now
                </a>
              </li>
            </ul>
            <a
              href="#bookyourseat"
              className="block mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-center"
              onClick={() => { closeMobileMenu(); }}
            >
              Book Your Seat
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
