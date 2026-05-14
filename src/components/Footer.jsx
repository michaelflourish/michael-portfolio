import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Michael Afolayan. Built with React and Vite.</p>
    </footer>
  );
}

export default Footer;