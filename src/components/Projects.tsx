"use client"

import { Avatar, Button, Card } from "@chakra-ui/react";

export default function Projects() {
    return (
        <>
            <Card.Root width="320px" className="card">
                <Card.Body gap="2">
                    <Avatar.Root size="lg" shape="rounded">
                        <Avatar.Image src="./favicon.png" />
                        <Avatar.Fallback name="m0skwa Portfolio" />
                    </Avatar.Root>
                    <Card.Title mt="2">m0skwa Portfolio</Card.Title>
                    <Card.Description>
                        Here you&apos;ll get to know a bit about me, my skills, and the projects
                        I&apos;ve worked on. Whether you&apos;re here out of curiosity or looking for
                        collaboration, I&apos;m glad you stopped by!
                    </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button
                        variant="outline"
                        onClick={() =>
                            window.open("https://github.com/m0skwa/portfolio", "_blank")
                        }
                    >
                        Github
                    </Button>
                    <Button onClick={() => window.open("https://m0skwa.tech", "_blank")}>
                        View
                    </Button>
                </Card.Footer>
            </Card.Root>

            <Card.Root width="320px" className="card">
                <Card.Body gap="2">
                    <Avatar.Root size="lg" shape="rounded">
                        <Avatar.Image src="./signalvoid.png" />
                        <Avatar.Fallback name="Signalvoid" />
                    </Avatar.Root>
                    <Card.Title mt="2">Signalvoid</Card.Title>
                    <Card.Description>
                        SignalVoid is an advanced remote-control platform designed for
                        security professionals and penetration testers. It enables keystroke
                        injection, mouse control, and highly customizable scripting to
                        facilitate robust device interactions and automated testing
                        scenarios.
                    </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button
                        variant="outline"
                        onClick={() =>
                            window.open("https://github.com/SignalVoidOrg", "_blank")
                        }
                    >
                        Github
                    </Button>
                    <Button
                        onClick={() => window.open("https://signalvoid.org", "_blank")}
                    >
                        View
                    </Button>
                </Card.Footer>
            </Card.Root>
        </>
    );
}
