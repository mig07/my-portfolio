import React from "react";
export default function LanguageGraphItem({ name, proficiency, color }) {
  const ProficiencyBar = ({ proficiency, color }) => {
    const barStyle = {
      height: 15,
      width: `${proficiency}%`,
      backgroundColor: color,
      borderRadius: 50,
      textAlign: "right",
      border: "1px solid black",
    };

    return <div style={barStyle}></div>;
  };

  return (
    <div>
      <h5>{name}</h5>
      <ProficiencyBar proficiency={proficiency} color={color} />
    </div>
  );
}
