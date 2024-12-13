"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItemsLeft = ["Home", "Tales"];
  const navItemsRight = ["Merchandise", "Contact Us"];
  const logoUrl = "/logo.png";

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <nav className="bg-transparent text-white shadow-lg" role="navigation">
      <div className="w-full mx-auto px-4 py-4 bg-transparent fixed z-20">
        <div className="flex items-center justify-center w-full">
          {/* Left Navigation Items */}
          <div className="hidden md:flex space-x-4">
            {navItemsLeft.map((item, index) => (
              <div
                key={item}
                className="relative hover:text-gray-300 px-6 py-4 rounded-md"
              >
                <motion.div
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-xl font-avenir"
                  >
                    {item}
                    <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gray-300 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Logo Button */}
          <div className="flex items-center px-4 md:px-0">
            <button
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center md:block px-6 py-3"
            >
              <Image
                src={logoUrl}
                alt="Company Logo" // More descriptive alt text
                width={80}
                height={80}
                priority
              />
            </button>
          </div>

          {/* Right Navigation Items */}
          <div className="hidden md:flex space-x-4">
            {navItemsRight.map((item, index) => (
              <div
                key={item}
                className="relative hover:text-gray-300 px-6 py-4 rounded-md"
              >
                <motion.div
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-xl font-avenir"
                  >
                    {item}
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 flex flex-col space-y-2"
          >
            {navItemsLeft.concat(navItemsRight).map((item, index) => (
              <div
                key={item}
                className="relative hover:text-gray-300 px-6 py-4 rounded-md"
              >
                <motion.div
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-lg font-avenir"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
