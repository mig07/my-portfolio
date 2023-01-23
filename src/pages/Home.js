import React from "react";
import { Stack } from "react-bootstrap";
import Hero from "../sections/Hero";
import About from "../sections/AboutMe";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Contact from "../sections/ContactMe";
import Scholarships from "../sections/Scholarships";

export default function Home() {
  return (
    <Stack gap={3}>
      <Hero />
      <About />
      <Scholarships />
      <Education />
      <Skills />
      {/* <Contact /> */}
    </Stack>
  );
}
