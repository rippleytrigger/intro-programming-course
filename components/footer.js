import React from "react";
import Gh from "./github";
import Tw from "./twitter";
import Li from "./linkedin";
import Ins from "./instagram";

export default function Footer({ twitter, linkedin, github, instagram }) {
  return (
    <footer className="footer">
      <ul className="socials">
        {twitter ? (
          <li className="social">
            <a href={`https://twitter.com/${twitter}`}>
              <Tw />
            </a>
          </li>
        ) : null}
        {github ? (
          <li className="social">
            <a href={`https://github.com/${github}`}>
              <Gh />
            </a>
          </li>
        ) : null}
        {linkedin ? (
          <li className="social">
            <a href={`https://linkedin.com/in/${linkedin}`}>
              <Li />
            </a>
          </li>
        ) : null}
        {instagram ? (
          <li className="social">
            <a href={`https://instagram.com/${instagram}`}>
              <Ins />
            </a>
          </li>
        ) : null}
        <li className="social">
          <div className="terms">
            <p>Content Licensed Under CC-BY-NC-4.0</p>
            <p>Code Samples and Excercises Licensed Under Apache 2.0</p>
            <p>
              Sitio diseñado por{" "}
              <a href="">Rippleytrigger</a>
            </p>
          </div>
        </li>
      </ul>
    </footer>
  );
}
