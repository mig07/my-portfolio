import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import LanguageGraph from "../components/LanguageGraph";
import Section from "../components/Section";

export default function Skills() {
  const languageGraphData = [
    {
      name: "Kotlin",
      proficiency: 100,
      color: "#7f52ff",
    },
    {
      name: "Java",
      proficiency: 100,
      color: "#f89820",
    },
    {
      name: "JavaScript",
      proficiency: 90,
      color: "#f0db4f",
    },
    {
      name: "C#",
      proficiency: 80,
      color: "purple",
    },
    {
      name: "C",
      proficiency: 70,
      color: "blue",
    },
    {
      name: "SQL",
      proficiency: 70,
      color: "cyan",
    },
    {
      name: "Python",
      proficiency: 60,
      color: "#3776ab ",
    },
  ];

  return (
    <Section title="Skills">
      <div>
        <Row>
          <Col xs={12} md={6}>
            <h4>
              <b>Programming languages</b>
            </h4>
            <LanguageGraph graphData={languageGraphData} />
          </Col>
          <Col xs={12} md={4} className="mx-4">
            <Row className="mt-5">
              <Col>
                <h4>
                  <b>Work areas</b>
                </h4>
                <Stack gap={2}>
                  <h6>Cloud computing</h6>
                  <h6>REST APIs</h6>
                  <h6>Cybersecurity</h6>
                  <h6>Mobile device programming</h6>
                  <h6>Computer networks</h6>
                  <h6>Linux</h6>
                </Stack>
              </Col>
              <Col>
                <h4>
                  <b>Tools</b>
                </h4>
                <Stack gap={2}>
                  <h6>Git</h6>
                  <h6>LaTeX</h6>
                  <h6>JetBrains IDEs</h6>
                  <h6>Visual Studio Code</h6>
                  <h6>NeoVim</h6>
                </Stack>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <h4>
                  <b>Languages</b>
                </h4>
                <Stack gap={2}>
                  <h6>
                    <b>Portuguese</b> - Native
                  </h6>
                  <h6>
                    <b>English</b> - Proficient
                  </h6>
                  <h6>
                    <b>French</b> - Basic
                  </h6>
                </Stack>
              </Col>
              <Col>
                <h4>
                  <b>Other qualifications</b>
                </h4>
                <Stack gap={2}>
                  <h6>
                    <b>Car license</b> - B, B1
                  </h6>
                </Stack>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Section>
  );
}
