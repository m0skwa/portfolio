import "./App.css";
import {
  Avatar,
  Button,
  HStack,
  Card,
  IconButton,
  Blockquote,
  Box,
  Text,
  Popover,
  Portal,
} from "@chakra-ui/react";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineDiscord } from "react-icons/ai";
import { useEffect } from "react";

function useScrollAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
}

const TerminalJsonViewer = ({ data }) => {
  return (
    <Box
      bg="gray.900"
      color="green.200"
      p={6}
      borderRadius="md"
      fontFamily="monospace"
      fontSize="md"
      whiteSpace="pre"
      overflow="auto"
      boxShadow="lg"
      minHeight="400px"
      width="100%"
      maxW={{ base: "90%", sm: "90%", md: "700px", lg: "800px" }}
      mx="auto"
    >
      <Text color="green.400" mb={2}>
        <Text as="span" color="cyan.300">
          m0skwa@portfolio
        </Text>
        <Text as="span">:</Text>
        <Text as="span" color="purple.300">
          ~
        </Text>
        <Text as="span">$</Text> cat whoami.json
      </Text>
      <Box>{JSON.stringify(data, null, 2)}</Box>
    </Box>
  );
};

const jsonData = {
  username: "m0skwa",
  role: ["developer", "tech enthusiast"],
  hobbies: [
    "programming",
    "strength training",
    "spending time with friends and family",
  ],
  socials: {
    Github: "https://github.com/m0skwa",
    Mail: "info@m0skwa.tech",
    Discord: "@m0skwa",
  },
};

function App() {
  useScrollAnimation();
  return (
    <main>
      <section className="section" id="landing">
        <h1>m0skwa</h1>
        <h2>Web Developer & Tech Enthusiast</h2>
        <Blockquote.Root variant="solid">
          <Blockquote.Content>
            Simplicity is the soul of efficiency.
          </Blockquote.Content>
          <Blockquote.Caption>
            — <cite>Austin Freeman</cite>
          </Blockquote.Caption>
        </Blockquote.Root>
        <div className="landing-buttons">
          <IconButton
            aria-label="Github"
            rounded="full"
            variant="ghost"
            onClick={() => (window.location.href = "https://github.com/m0skwa")}
          >
            <LuGithub />
          </IconButton>
          <IconButton
            aria-label="E-Mail"
            rounded="full"
            variant="ghost"
            onClick={() => (window.location.href = "mailto:info@m0skwa.tech")}
          >
            <MdOutlineEmail />
          </IconButton>
          <IconButton
            aria-label="Discord"
            rounded="full"
            variant="ghost"
            onClick={() =>
              (window.location.href =
                "https://discord.com/users/1140738196032999464")
            }
          >
            <AiOutlineDiscord />
          </IconButton>
        </div>
      </section>
      <section className="section" id="about">
        <h2>About Me</h2>
        <TerminalJsonViewer data={jsonData} />
      </section>
      <section className="section" id="skills">
        <h2>My Skills and Technologies I use</h2>
        <p>
          My core strengths lie in the field of IT, where I bring strong
          problem-solving skills, a deep understanding of modern technologies,
          and a passion for continuous learning and innovation.
        </p>
        <HStack className="skills">
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button colorPalette="gray" variant="outline">
                <img
                  src="./react.svg"
                  alt="React"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
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
                <img
                  src="./javascript.svg"
                  alt="Javascript"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                Javascript
              </Button>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content>
                  <Popover.Arrow />
                  <Popover.Body>
                    <Popover.Title fontWeight="medium">
                      Javascript
                    </Popover.Title>
                    <Text my="4">
                      JavaScript is a versatile programming language used
                      primarily to create dynamic and interactive content on
                      websites.
                    </Text>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Button colorPalette="gray" variant="outline">
                <img
                  src="./php.svg"
                  alt="PHP"
                  style={{ width: "32px", height: "24px", marginRight: "8px" }}
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
                      development, enabling the creation of dynamic and
                      interactive web pages.
                    </Text>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Button colorPalette="gray" variant="outline">
                <img
                  src="./npm.svg"
                  alt="NPM"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
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
                      NPM is a package manager for JavaScript that allows
                      developers to install, share, and manage code libraries
                      and dependencies for their projects.
                    </Text>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Button colorPalette="gray" variant="outline">
                <img
                  src="./mysql.svg"
                  alt="MySQL"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
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
                      MySQL is an open-source relational database management
                      system used to store, manage, and retrieve structured data
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
                <img
                  src="./tux.svg"
                  alt="Linux"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
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
                      Linux is an open-source operating system kernel that
                      powers a wide range of systems, known for its stability,
                      security, and flexibility.
                    </Text>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Button colorPalette="gray" variant="outline">
                <img
                  src="./vscodium.png"
                  alt="VSCodium"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
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
                      VSCodium is a free, open-source version of Visual Studio
                      Code without Microsoft's telemetry, offering a
                      privacy-focused code editor with the same features and
                      extensions.
                    </Text>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Button colorPalette="gray" variant="outline">
                <img
                  src="./vite.svg"
                  alt="Vite"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
                />
                Vite
              </Button>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content>
                  <Popover.Arrow />
                  <Popover.Body>
                    <Popover.Title fontWeight="medium">Vite</Popover.Title>
                    <Text my="4">
                      Vite is a fast and modern build tool for frontend
                      development, offering instant server start and
                      lightning-fast hot module replacement.
                    </Text>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Button colorPalette="gray" variant="outline">
                <img
                  src="./git.svg"
                  alt="Git"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
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
                      developers track changes, collaborate, and manage code
                      history efficiently.
                    </Text>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <Button colorPalette="gray" variant="outline">
                <img
                  src="./github.svg"
                  alt="Github"
                  style={{ width: "24px", height: "24px", marginRight: "8px" }}
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
                      GitHub is a web-based platform for hosting and
                      collaborating on Git repositories, providing tools for
                      version control, issue tracking, and project management.
                    </Text>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>
        </HStack>
      </section>

      <section className="section" id="projects">
        <h2>My Projects</h2>
        <div className="cards">
          <Card.Root width="320px" className="card">
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="./favicon.png" />
                <Avatar.Fallback name="m0skwa Portfolio" />
              </Avatar.Root>
              <Card.Title mt="2">m0skwa Portfolio</Card.Title>
              <Card.Description>
                Here you’ll get to know a bit about me, my skills, and the
                projects I’ve worked on. Whether you're here out of curiosity or
                looking for collaboration, I’m glad you stopped by!
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button
                variant="outline"
                onClick={() => (window.location.href = "https://m0skwa.tech")}
              >
                View
              </Button>
              <Button>Join</Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root width="320px" className="card">
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://placehold.co/400" />
                <Avatar.Fallback name="Placeholder" />
              </Avatar.Root>
              <Card.Title mt="2">Placeholder</Card.Title>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                natus consectetur iusto esse recusandae autem provident
                voluptate aliquid est, distinctio ea nemo, dignissimos
                laboriosam enim vitae aliquam maxime suscipit fuga?
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">View</Button>
              <Button>Join</Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root width="320px" className="card">
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://placehold.co/400" />
                <Avatar.Fallback name="Placeholder" />
              </Avatar.Root>
              <Card.Title mt="2">Placeholder</Card.Title>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                ab ipsa vero odio tempore provident corrupti sint eius nesciunt
                optio est sapiente laudantium, quis possimus rem repellendus ea
                error commodi!
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">View</Button>
              <Button>Join</Button>
            </Card.Footer>
          </Card.Root>
        </div>
      </section>
    </main>
  );
}

export default App;
