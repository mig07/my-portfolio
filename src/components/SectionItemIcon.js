export default function SectionItemIcon({ src, alt, href }) {
  return (
    <a href={href} style={{ alignSelf: "start", padding: 5 }}>
      <img src={src} alt={alt} style={{ maxWidth: 95 }} />
    </a>
  );
}
