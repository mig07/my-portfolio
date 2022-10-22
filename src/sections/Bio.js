import React from "react";
import Section from "../components/Section";
import { Stack } from "react-bootstrap";
import BioItem from "../components/BioItem";

export default function Bio() {
  return (
    <Section title="Bio">
      <Stack gap={4}>
        <BioItem
          year={"2020 - 2022"}
          title={"MSc Computer Science and Engineering"}
          subtitle={"Instituto Superior de Engenharia de Lisboa"}
        />
        <BioItem
          year={"2016 - 2020"}
          title={"BSc Computer Science and Engineering"}
          subtitle={"Instituto Superior de Engenharia de Lisboa"}
        />
        <BioItem
          year={"2013 - 2016"}
          title={"High School"}
          subtitle={"Colégio Bartolomeu Dias"}
        />
        <BioItem year={1998} title={"Born in Lisbon, Portugal"} />
      </Stack>
    </Section>
  );
}
