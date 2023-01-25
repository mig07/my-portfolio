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
          I consider myself a very eager person when it comes to learn new
          topics. I always feel driven by my curiosity, which keeps me learning
          new things everyday, being this one of the reasons why I followed my
          academic education in Computer Science. I also love to work in groups
          - not only I think it is the best way to find efficient and faster
          solutions for complex problems, as I get to learn from others and
          improve as a software engineer.
        </p>
        <p>
          I hold a Bachelor's degree and a Master's degree, both in Computer
          Science and Engineering.
        </p>
        <p>
          Currently I am looking for job opportunities in full-stack software
          engineering. If you are looking for someone like me, please do say hi!
        </p>
        <p>
          Here you can get to know me a little better and see what I have been
          up to. Happy to see you around!
        </p>
        <h5>
          <b>Hobbies and interests</b>
        </h5>
        <p>PC building, 3D printing, Linux, travelling, cycling.</p>
      </div>
    </Section>
  );
}
