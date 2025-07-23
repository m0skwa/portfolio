"use client"

import { Link, Button, Menu, Portal } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function BurgerMenu() {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="ghost" size="sm" className="burgerMenu">
                    <GiHamburgerMenu />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="about">
                            <Link className="item" href="#about">
                                About
                            </Link>
                        </Menu.Item>
                        <Menu.Item value="skills">
                            <Link className="item" href="#skills">
                                Skills
                            </Link>
                        </Menu.Item>
                        <Menu.Item value="projects">
                            <Link className="item" href="#projects">
                                Projects
                            </Link>
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
}
