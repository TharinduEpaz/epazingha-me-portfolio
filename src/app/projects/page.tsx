import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tharindu Epasingha",
  description:
    "Tharindu Epasingha is a developer, writer and educator. He loves to be a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>
      <Paragraph className="mb-10 max-w-xl">
        🚧 Exciting projects under construction! Check back soon for a showcase of my latest work.
      </Paragraph>

      {/* <Products /> */}
    </Container>
  );
}
