import React from "react";
import { Button, Container, Stack } from "react-bootstrap";

export default function Section({ title, children }) {
  return (
    <Stack gap={3}>
      <h4 class="underline">
        <span>{title}</span>
      </h4>
      <div>{children}</div>
    </Stack>
  );
}
