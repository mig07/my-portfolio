import React from "react";
import { Stack } from "react-bootstrap";
import Section from "../components/Section";
import SectionItem from "../components/SectionItem";
import SectionItemIcon from "../components/SectionItemIcon";
import IselIcon from "../imgs/isel.svg";

export default function Bio() {
  const IselBioIcon = () => {
    return (
      <SectionItemIcon src={IselIcon} alt="ISEL" href="https://www.isel.pt" />
    );
  };

  return (
    <Section title="Education">
      <Stack gap={3} style={{ alignItems: "center" }}>
        <SectionItem
          icon={<IselBioIcon />}
          title={"MSc in Computer Science and Engineering"}
          subtitle={"ISEL: Instituto Superior de Engenharia de Lisboa"}
          description={
            <>
              <p>October, 2020 - December, 2022</p>
              <p>
                My final thesis project was an integration framework for
                phylogenetic tools, titled{" "}
                <b>
                  <a href="https://github.com/mig07/FLOWViZ">
                    FLOWViZ: Framework for Phylogenetic Processing{" "}
                    <i class="bi bi-box-arrow-up-right" />
                  </a>
                </b>
                . This framework allows users to seamlessly bind phylogenetic
                tools with workflow systems through well-defined contracts,
                providing a great interoperability among different phylogenetic
                tools, while supplying workflow building and execution. The
                framework is composed by a Web Client (React.js), a HTTP server
                (Express.js), both written in JavaScript, while using a
                non-relational database (MongoDB). These three allowed a
                successful integration between phylogenetic tools and the Apache
                Airflow workflow system, which executed supplied workflows. I
                obtained a final grade of 19/20 with this project and I averaged
                16/20 in my Master's degree.
              </p>
              <p>
                <u>Technologies:</u>{" "}
                <b>
                  JavaScript, Python, Apache Airflow, React.js, Express.js,
                  MongoDB.
                </b>
              </p>
            </>
          }
        />
        <SectionItem
          icon={<IselBioIcon />}
          title={"BSc in Computer Science and Engineering"}
          subtitle={"ISEL: Instituto Superior de Engenharia de Lisboa"}
          description={
            <>
              <p>September, 2016 - September, 2020</p>
              <p>
                My final project was a group project in which we built a
                multi-platform application for diabetics and nutrition, titled{" "}
                <b>
                  <a href="https://github.com/davidalb97/PS-Nutr.io">
                    Nutr.io - Multi-platform application for diabetics'
                    nutritional choices <i class="bi bi-box-arrow-up-right" />
                  </a>
                </b>
                . It allows users to calculate correct insulin dosages, by
                selecting specific meals from restaurants around them and by
                supplying the user's current glucose levels. The system is
                composed by a relational database (PostgreSQL), a HTTP server
                (Spring), an Android application (Android native) and a Web
                application (React.js). I obtained a final grade of 19/20 with
                this project.
              </p>
              <p>
                <u>Technologies:</u>{" "}
                <b>
                  Kotlin, JavaScript, PostgreSQL, Spring, Android native,
                  React.js.
                </b>
              </p>
            </>
          }
        />
      </Stack>
    </Section>
  );
}
