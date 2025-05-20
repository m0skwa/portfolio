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
            Here you’ll get to know a bit about me, my skills, and the projects
            I’ve worked on. Whether you're here out of curiosity or looking for
            collaboration, I’m glad you stopped by!
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
            <Avatar.Image src="https://placehold.co/400" />
            <Avatar.Fallback name="Placeholder" />
          </Avatar.Root>
          <Card.Title mt="2">Placeholder</Card.Title>
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            natus consectetur iusto esse recusandae autem provident voluptate
            aliquid est, distinctio ea nemo, dignissimos laboriosam enim vitae
            aliquam maxime suscipit fuga?
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
            <Avatar.Image src="https://placehold.co/400" />
            <Avatar.Fallback name="Placeholder" />
          </Avatar.Root>
          <Card.Title mt="2">Placeholder</Card.Title>
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab
            ipsa vero odio tempore provident corrupti sint eius nesciunt optio
            est sapiente laudantium, quis possimus rem repellendus ea error
            commodi!
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
    </>
  );
}
