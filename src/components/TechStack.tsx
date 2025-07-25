"use client"

import { Text, Popover, Portal, Button } from "@chakra-ui/react";
import Image from "next/image";

export default function TechStack() {
    return (
        <>
            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/react.svg"
                            alt="React"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        React
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">React</Popover.Title>
                                <Text my="4">
                                    React is a JavaScript framework for building fast and
                                    interactive user interfaces using reusable components.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/javascript.svg"
                            alt="Javascript"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        Javascript
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">Javascript</Popover.Title>
                                <Text my="4">
                                    JavaScript is a versatile programming language used primarily
                                    to create dynamic and interactive content on websites.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/php.svg"
                            alt="PHP"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        PHP
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">PHP</Popover.Title>
                                <Text my="4">
                                    PHP is a server-side scripting language designed for web
                                    development, enabling the creation of dynamic and interactive
                                    web pages.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/npm.svg"
                            alt="NPM"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        NPM
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">NPM</Popover.Title>
                                <Text my="4">
                                    NPM is a package manager for JavaScript that allows developers
                                    to install, share, and manage code libraries and dependencies
                                    for their projects.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/mysql.svg"
                            alt="MySQL"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        MySQL
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">MySQL</Popover.Title>
                                <Text my="4">
                                    MySQL is an open-source relational database management system
                                    used to store, manage, and retrieve structured data
                                    efficiently.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/mongodb.svg"
                            alt="MongoDB"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        MongoDB
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">MongoDB</Popover.Title>
                                <Text my="4">
                                    MongoDB is an open-source document-oriented database system used to store, manage, and efficiently retrieve both structured and unstructured data with flexibility.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/tux.svg"
                            alt="Linux"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        Linux
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">Linux</Popover.Title>
                                <Text my="4">
                                    Linux is an open-source operating system kernel that powers a
                                    wide range of systems, known for its stability, security, and
                                    flexibility.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/vscodium.png"
                            alt="VSCodium"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        VSCodium
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">VSCodium</Popover.Title>
                                <Text my="4">
                                    VSCodium is a free, open-source version of Visual Studio Code
                                    without Microsoft&apos;s telemetry, offering a privacy-focused code
                                    editor with the same features and extensions.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/next.svg"
                            alt="NextJS"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        NextJS
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">NextJS</Popover.Title>
                                <Text my="4">
                                    Next.js is a modern React framework for frontend development that supports server-side rendering and static site generation. It offers fast page loads, optimized performance, and a seamless developer experience with automatic code splitting and hot module replacement.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/git.svg"
                            alt="GIT"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        Git
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">Git</Popover.Title>
                                <Text my="4">
                                    Git is a distributed version control system that helps
                                    developers track changes, collaborate, and manage code history
                                    efficiently.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <Button colorPalette="gray" variant="outline">
                        <Image
                            src="/github.svg"
                            alt="Github"
                            width={24}
                            height={24}
                            style={{ marginRight: "8px" }}
                        />
                        Github
                    </Button>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content>
                            <Popover.Arrow />
                            <Popover.Body>
                                <Popover.Title fontWeight="medium">Github</Popover.Title>
                                <Text my="4">
                                    GitHub is a web-based platform for hosting and collaborating
                                    on Git repositories, providing tools for version control,
                                    issue tracking, and project management.
                                </Text>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>
        </>
    );
}
