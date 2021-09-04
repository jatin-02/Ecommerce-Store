import React from "react";
import "./Footer.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="brand">
          <h1>
            <span>Jatin's</span>Mart
          </h1>
        </div>

        <div className="lists">
          <div className="list">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="list">
            <h4>Contact</h4>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className="list">
            <h4>Legel</h4>
            <ul>
              <li>Terms & Condition</li>
              <li>Refund & Replacement</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="logos">
          <a className="logo" href="">
            <MailOutlineIcon />
          </a>
          <a
            className="logo"
            href="https://instagram.com/jatinsoni523?utm_medium=copy_link"
          >
            <InstagramIcon />
          </a>
          <a
            className="logo"
            href="https://www.facebook.com/profile.php?id=100055932232444"
          >
            <FacebookIcon />
          </a>
          <a
            className="logo"
            href="https://www.linkedin.com/in/jatin-soni-90b598206"
          >
            <LinkedInIcon />
          </a>
        </div>
        <hr />

        <div className="copyright">
          <p>
            copyright © | by <span>Jatin Soni</span> | All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
