import React from "react";
import Contact from "../components/Contact";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import TimeLine from "../components/Timeline";

export default function Home() {
  return (
    <div>
      <Introduction />
      <TimeLine />
      <Skills />
      <Contact />
    </div>
  );
}
