import "./Navbar.css";
import { Link, Button, Menu, Portal } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
      </ul>

      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="ghost" size="sm" className="burgerMenu">
            <GiHamburgerMenu />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item>
                <Link className="item" href="#about">
                  About
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" href="#skills">
                  Skills
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" href="#projects">
                  Projects
                </Link>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </header>
  );
}

export default Navbar;
