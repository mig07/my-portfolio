import React from "react";
import { Stack } from "react-bootstrap";

export default function Section({ title, children }) {
  return (
    <Stack gap={3}>
      <h3 className="reactive-centered-text underline">
        <span>{title}</span>
      </h3>
      {children}
    </Stack>
  );
}
