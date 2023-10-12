import GithubIcon from '../Icons/square-github.svg'
import TwitterIcon from '../Icons/square-x-twitter.svg'
import linkedinIcon from '../Icons/linkedin.svg'


function Footer() {
  return (
    <>
     <div className="container-fluid fbc">
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-5 ">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
              </a>
              <span className="mb-3 mb-md-0 text-white">&copy; 2024 Joseph</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-body-secondary" href="https://github.com/JosephBoat404"target='_blank'>
                      <img src={GithubIcon} alt="SVG as an image" />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="https://twitter.com/JosephB04886826" target='_blank'>
                  <img src={TwitterIcon} alt="SVG as an image" />
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="https://www.linkedin.com/in/joseph-boateng-a68750261/"  target='_blank'>
                  <img src={linkedinIcon} alt="SVG as an image" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
