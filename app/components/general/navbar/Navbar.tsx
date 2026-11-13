"use client";
import Logo from "./Logo"
import Link from "next/link"
import LinkButton from "./LinkButton"
import { LuDownload } from "react-icons/lu"
import MobileNav from "./MobileNav"
import { useState } from "react";

const navLinks = [
    { url: "#home", label: "Home" },
    { url: "#services", label: "Services" },
    { url: "#resume", label: "Resume" },
    { url: "#project", label: "Project" },
    { url: "#skills", label: "Skills" },
    { url: "#testimonials", label: "Testimonials" },
    { url: "#contact", label: "Contact" },
]
export default function Navbar() {
    const [navOpen,setNavOpen] = useState(false);
    return (
        <nav className="h-18 fixed z-50 w-full">
            <div className="flex items-center h-full justify-between w-[90%] mx-auto">
                {/*  Logo  */}
                <Logo />


                {/* nav links */}
                <ul className="hidden justify-end-safe lg:flex space-x-8  ">

                    {navLinks.map((link) => {
                        return (
                            <li key={link.url}>
                                <Link className="text-gray-300 hover:text-cyan-300 font-medium transition-colors duration-300" href={link.url}>{link.label}</Link>
                            </li>
                        )
                    })}

                </ul>
                 <div className="hidden lg:block">
                <LinkButton href="/documents/cv.pdf" text="Download CV" download icon={LuDownload}
                    IconPosition="left"
                />
                </div>
                <MobileNav navOpen={navOpen}/>

            </div>
        </nav>
    )
}
