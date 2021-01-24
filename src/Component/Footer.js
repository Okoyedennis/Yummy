import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer ">
      <div className="footer__info containe">
        <h3>Pizza</h3>
        <div className="socialIcon">
          <Link className="link" to="">
            <FaFacebook className="fb" />
          </Link>
          <Link className="link" to="">
            <FaInstagram className="ig" />
          </Link>
          <Link className="link" to="">
            <FaYoutube className="yb" />
          </Link>
          <Link className="link" to="">
            <FaTwitter className="tw" />
          </Link>
          <Link className="link" to="">
            <FaLinkedin className="in" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
