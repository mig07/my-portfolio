import React from "react";
import { Stack } from "react-bootstrap";
import BioItem from "../components/BioItem";
import Section from "../components/Section";
import IselIcon from "../imgs/isel.svg";
import CbdIcon from "../imgs/logog.gif";

export default function Bio() {
  const BioItemIcon = ({ src, alt, href }) => {
    return (
      <a href={href} style={{ alignSelf: "start", padding: 5 }}>
        <img src={src} alt={alt} style={{ "max-width": 95 }} />
      </a>
    );
  };

  const IselBioIcon = () => {
    return <BioItemIcon src={IselIcon} alt="ISEL" href="https://www.isel.pt" />;
  };

  return (
    <Section title="Bio">
      <Stack gap={3} style={{ alignItems: "center" }}>
        <BioItem
          icon={<IselBioIcon />}
          year={"2020 - 2022"}
          title={"MSc Computer Science and Engineering"}
          subtitle={"Instituto Superior de Engenharia de Lisboa"}
          description={
            "My final thesis consisted in a framework for phylogenetic processing - FLOWViZ. This framework allow users to seamlessly bind phylogenetic tools and workflow systems through well-defined contracts, providing a great interoperability between different phylogenetic tools, while supplying workflow building and execution."
          }
        />
        <BioItem
          icon={<IselBioIcon />}
          year={"2016 - 2020"}
          title={"BSc Computer Science and Engineering"}
          subtitle={"Instituto Superior de Engenharia de Lisboa"}
          description={
            "My final project was a multi-plaform application for diabetics and nutrition. The system was composed by a relational database, a HTTP server, an Android application and a Web application. The system allows users to calculate correct insulin dosages, by selecting specific meals from restaurants around them and by supplying the current insulin levels."
          }
        />
        <BioItem
          icon={
            <BioItemIcon
              src={CbdIcon}
              alt="CBD"
              href="https://www.cbdias.com/"
            />
          }
          year={"2013 - 2016"}
          title={"High School"}
          subtitle={"Colégio Bartolomeu Dias"}
        />
        <BioItem year={1998} title={"Born in Lisbon, Portugal"} />
      </Stack>
    </Section>
  );
}
