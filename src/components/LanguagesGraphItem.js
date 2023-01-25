import React from "react";

const ProficiencyBar = ({ proficiency, color }) => {
  const barStyle = {
    height: 15,
    width: `${proficiency}%`,
    backgroundColor: color,
    borderRadius: 50,
    textAlign: "right",
    border: "1px solid black",
    animation: "bar-animation 1s",
  };

  return <div style={barStyle}></div>;
};

export default function LanguageGraphItem({ name, proficiency, color }) {
  return (
    <div>
      <h5>{name}</h5>
      <ProficiencyBar proficiency={proficiency} color={color} />
    </div>
  );
}
