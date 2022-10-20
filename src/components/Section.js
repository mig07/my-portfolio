import React from "react";
import { Button, Container, Stack } from "react-bootstrap";

export default function Section({ title, children }) {
  return (
    <Container fluid>
      <Stack gap={3}>
        <h4>{title}</h4>
        {children}
      </Stack>
    </Container>
  );
}
