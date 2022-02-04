import "./footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="linkedin">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/prashanth-reddy-09891a171/"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>

        <div className="resume">
          <a title="Resume">
            <DescriptionIcon />
            Resume
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/PrashanthReddyPasham" title="GitHub">
            <GitHubIcon fontSize="small" /> GitHub
          </a>
        </div>
      </div>
      <div className="name">
        <p>Made by Prashanth Reddy © 2022</p>
      </div>
    </div>
  );
}

export default Footer;
