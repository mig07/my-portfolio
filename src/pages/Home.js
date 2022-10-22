import React from "react";
import { Stack } from "react-bootstrap";
import Hero from "../sections/Hero";
import About from "../sections/AboutMe";
import Bio from "../sections/Bio";
import Skills from "../sections/Skills";
import Contact from "../sections/ContactMe";

export default function Home() {
  return (
    <Stack gap={3}>
      <Hero />
      <About />
      <Bio />
      <Skills />
      <Contact />
    </Stack>
  );
}
