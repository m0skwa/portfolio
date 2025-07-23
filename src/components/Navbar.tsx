"use client"

import "@/assets/css/Navbar.css";
import { Link } from "@chakra-ui/react";
import React from "react";
import BurgerMenu from "@/components/BurgerMenu";

export default function Navbar() {
    return (
        <header className="navbar">
            <a href="#landing">
                <h1>m0skwa</h1>
            </a>
            <ul className="list-items">
                <li>
                    <Link className="item" href="#about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="item" href="#skills">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link className="item" href="#projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className="item" href="#contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <BurgerMenu />
        </header>
    );
}