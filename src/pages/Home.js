import React from "react";
import { Stack } from "react-bootstrap";
import About from "../sections/AboutMe";
import Hero from "../sections/Hero";
import Education from "../sections/Education";
import Scholarships from "../sections/Scholarships";
import Skills from "../sections/Skills";
import Publications from "../sections/Publications";

export default function Home() {
  return (
    <Stack gap={3}>
      <Hero />
      <About />
      <Education />
      <Scholarships />
      <Publications />
      <Skills />
    </Stack>
  );
}
