export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();
  const copyrightSymbol = String.fromCodePoint(0x00a9);

  const footerStyle = {
    marginTop: 75,
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
  };

  return (
    <footer>
      <div style={footerStyle}>
        <p>
          <small>
            {copyrightSymbol} {currentYear} Miguel Luís
          </small>
        </p>
      </div>
    </footer>
  );
}
