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
          I am a {getAge("07/07/1998")}-year-old software engineer based in
          Lisbon, Portugal.
        </p>
        <p>
          I hold a Bachelor's degree and a Master's degree, both in Computer
          Science and Engineering.
        </p>
        <p>
          I consider myself a very eager person when it comes to learn new
          topics. I always feel driven by my sheer will of curiosity, which
          keeps me learning new things everyday, being this one of the reasons
          why I followed my academic education in Computer Science.
        </p>
        <p>
          Currently I am looking for job opportunities in full-stack software
          engineering.
        </p>
        <h5>
          <b>Hobbies</b>
        </h5>
        <p>Travelling, PC building, 3D printing, Linux, cycling and running.</p>
      </div>
    </Section>
  );
}
