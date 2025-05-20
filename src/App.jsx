import "./App.css";
import { HStack, IconButton } from "@chakra-ui/react";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineDiscord } from "react-icons/ai";

import TerminalJsonViewer from "@/components/TerminalJsonViewer";
import BlockQuote from "@/components/BlockQuote";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

import useScrollAnimation from "/hooks/useScrollAnimation";
import jsonData from "/data/jsonData";

export default function App() {
  useScrollAnimation();
  return (
    <main>
      <section className="section" id="landing">
        <h1>m0skwa</h1>
        <h2>Web Developer & Tech Enthusiast</h2>
        <BlockQuote />
        <div className="landing-buttons">
          <IconButton
            aria-label="Github"
            rounded="full"
            variant="ghost"
            onClick={() => window.open("https://github.com/m0skwa", "_blank")}
          >
            <LuGithub />
          </IconButton>
          <IconButton
            aria-label="E-Mail"
            rounded="full"
            variant="ghost"
            onClick={() => window.open("mailto:m0skwa@tuta.io", "_blank")}
          >
            <MdOutlineEmail />
          </IconButton>
          <IconButton
            aria-label="Discord"
            rounded="full"
            variant="ghost"
            onClick={() =>
              window.open(
                "https://discord.com/users/1140738196032999464",
                "_blank"
              )
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
          <TechStack />
        </HStack>
      </section>

      <section className="section" id="projects">
        <h2>My Projects</h2>
        <div className="cards">
          <Projects />
        </div>
      </section>
    </main>
  );
}
