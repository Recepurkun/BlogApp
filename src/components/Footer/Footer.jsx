import styled from "./styled.module.css";
import "./footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styled.footer}>
      <h4 className="text-center mt-5 pt-5 footer-with-border">
        <Link href="https://read.cv/recepurkun" target="_blank">
          Coded by Recep 🚀
        </Link>
        <span className="footer-border text-border-alt"></span>
      </h4>
    </div>
  );
};

export default Footer;
