import React from "react";
import Section from "../components/Section";

export default function About() {
  // Get years of age from birthday date (mm/dd/yyyy)
  const getAge = (dateOfBirth) => {
    const birthDayDate = new Date(dateOfBirth);
    const monthDiff = Date.now() - birthDayDate.getTime();
    const monthDiffDate = new Date(monthDiff);
    const year = monthDiffDate.getUTCFullYear();
    return Math.abs(year - 1970);
  };

  return (
    <Section title="About me">
      <div>
        <p>
          I am a {getAge("07/07/1998")}-year-old computer engineer and software
          developer based in Lisbon, Portugal.
        </p>
        <p>
          I hold a Bachelor's degree in Computer Science and Engineering.
          Currently I am a finalist student of the Master's degree in Computer
          Science and Engineering, at Instituto Superior de Engenharia de Lisboa
          (ISEL), in Instituto Politécnico de Lisboa.
        </p>
        <p>
          I consider myself a very eager person when it comes to learn new
          topics. I always feel driven by my sheer will of curiosity, which
          keeps me learning new things everyday, being this one of the reasons
          why I followed my academic education in Computer Science.
        </p>
        <h6>
          <b>Hobbies</b>
        </h6>
        <p>Travelling, PC building, 3D printing, Linux, cycling and running.</p>
      </div>
    </Section>
  );
}
