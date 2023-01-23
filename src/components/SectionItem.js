import { Container, Stack } from "react-bootstrap";

export default function SectionItem({
  icon,
  duration,
  title,
  subtitle,
  description,
}) {
  return (
    <Stack direction="horizontal" gap={2}>
      {icon}
      <Stack gap={2}>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{duration}</p>
        <p>{description}</p>
      </Stack>
    </Stack>
  );
}
