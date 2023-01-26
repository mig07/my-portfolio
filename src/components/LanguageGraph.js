import React from "react";
import { Stack } from "react-bootstrap";
import LanguageGraphItem from "./LanguagesGraphItem";

export default function LanguageGraph({ graphData }) {
  return (
    <Stack gap={3}>
      {graphData.map((graphItem) => (
        <LanguageGraphItem
          key={graphItem.name}
          name={graphItem.name}
          proficiency={graphItem.proficiency}
          color={graphItem.color}
        />
      ))}
    </Stack>
  );
}
