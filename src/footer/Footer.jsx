import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Lacivertsizim Photoart | <span>Yusuf Ay</span> </p>
      <div>
        <a
          href="https://www.instagram.com/lacivertsizm/?hl=en"
          rel="noreferrer"
          target="_blank"
        >
          <i className="ri-instagram-line"></i>
        </a>
        <a href="https://twitter.com" rel="noreferrer" target="_blank">
          <i className="ri-twitter-line"></i>
        </a>
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <i className="ri-facebook-line"></i>
        </a>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank">
          <i className="ri-linkedin-line"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
