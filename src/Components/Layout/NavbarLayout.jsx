import { Button, Navbar } from "flowbite-react";
import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function NavbarLayout() {
  return (
    <>
      <Navbar fluid className="bg-[#fff4eb]">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            NFTHub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2">
          {/* <Button>Get started</Button> */}
          {/* <HiShoppingCart className="mr-0 h-5 w-5" /> */}
          <FaTwitter className="mr-0 h-5 w-5" />
          <FaDiscord className="mr-0 h-5 w-5" />
          <FaInstagram className="mr-0 h-5 w-5" />
          <MdEmail className="mr-0 h-5 w-5" />

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">Home</Link>
          <Link to="Collection">Collection</Link>
          <Link to="Choose">Choose</Link>
          <Link to="About">About</Link>
          <Link to="Roadmap">Roadmap</Link>
          <Link to="Blog">Blog</Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarLayout;

// const NAV_LINKS = [
//   { text: "Home", href: "#" },
//   { text: "Collection", href: "#" },
//   { text: "Choose", href: "#" },
//   { text: "About", href: "#" },
//   { text: "Roadmap", href: "#" },
//   { text: "Blog", href: "#" },
// ];

// const SOCIAL_LINKS = [
//   {
//     alt: "Twitter",
//     src: "https://openui.fly.dev/openui/twitter.svg?text=🐦",
//     href: "#",
//   },
//   {
//     alt: "Discord",
//     src: "https://openui.fly.dev/openui/discord.svg?text=💬",
//     href: "#",
//   },
//   {
//     alt: "Instagram",
//     src: "https://openui.fly.dev/openui/instagram.svg?text=📷",
//     href: "#",
//   },
//   {
//     alt: "Email",
//     src: "https://openui.fly.dev/openui/email.svg?text=✉️",
//     href: "#",
//   },
// ];

// const sharedClasses = {
//   textWhite: "text-white",
//   hoverText: "hover:text-zinc-200",
//   flex: "flex",
//   spaceX4: "space-x-4",
//   w6: "w-6",
//   h6: "h-6",
// };

{
  /* <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">NFTHub</h1>
          <nav className={`space-x-4 ${sharedClasses.flex}`}>
            {NAV_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${sharedClasses.textWhite} ${sharedClasses.hoverText}`}
              >
                {link.text}
              </a>
            ))}
          </nav>
          <div className={`${sharedClasses.flex} ${sharedClasses.spaceX4}`}>
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${sharedClasses.textWhite} ${sharedClasses.hoverText}`}
              >
                <img
                  src={link.src}
                  alt={link.alt}
                  className={`${sharedClasses.w6} ${sharedClasses.h6}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div> */
}
