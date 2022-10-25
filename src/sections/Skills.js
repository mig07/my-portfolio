import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import LanguageGraph from "../components/LanguageGraph";
import Section from "../components/Section";

export default function Skills() {
  const languageGraphData = [
    {
      name: "Kotlin",
      proficiency: 100,
      color: "purple",
    },
    {
      name: "Java",
      proficiency: 100,
      color: "orange",
    },
    {
      name: "JavaScript",
      proficiency: 90,
      color: "yellow",
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
      color: "blue",
    },
    {
      name: "Python",
      proficiency: 60,
      color: "blue",
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
          <Col>
            <div>
              <Row>
                <Col xs={12} md={6}>
                  <h4>
                    <b>Work areas</b>
                  </h4>
                  <Stack gap={2}>
                    <h6>Cloud computing</h6>
                    <h6>Cibersecurity</h6>
                    <h6>Concurrency</h6>
                    <h6>Network</h6>
                    <h6>Linux</h6>
                  </Stack>
                </Col>
                <Col xs={12} md={6}>
                  <h4>
                    <b>Tools</b>
                  </h4>

                  <Stack gap={2}>
                    <h6>Git</h6>
                    <h6>LaTeX</h6>
                    <h6>IntelliJ IDEA</h6>
                    <h6>Visual Studio Code</h6>
                    <h6>NeoVim</h6>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
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
                <Col xs={12} md={6}>
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
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
}
