import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container my-5">
        <p>Meet A Dog &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
export default Footer;
