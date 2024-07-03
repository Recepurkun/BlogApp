import styled from "./styled.module.css";
import "./footer.css";

const Footer = () => {
  return (
    <div className={styled.footer}>
      <h4 className="text-center my-4 footer-with-border">
        Coded by Recep 🚀
        <span className="footer-border text-border-alt"></span>
      </h4>
    </div>
  );
};

export default Footer;
