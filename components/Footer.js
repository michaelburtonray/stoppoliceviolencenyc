import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <nav className="footer-social__content">
          <a
            className="footer-social-anchor"
            href="//www.facebook.com/HoldPoliceAccountableNYC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true" />
            <span>facebook</span>
          </a>
          <a
            className="footer-social-anchor"
            href="//instagram.com/holdpoliceaccountable"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true" />
            <span>instagram</span>
          </a>
            <a
            className="footer-social-anchor"
            href="//twitter.com/ecrbfornyc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" aria-hidden="true" />
            <span>instagram</span>
          </a>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom__content">
          <a className="logo" href="/">
            <img src="/logo--blue.svg" alt="logo" />
          </a>

          <div className="column">
            <p>Signup form</p>
          </div>

          <div className="column footer-navigation">
            <h4>Learn</h4>

            <Link scroll={false} href="/faq">
              <a className="mainnav-anchor">FAQ</a>
            </Link>
            <Link scroll={false} href="/contact">
              <a className="mainnav-anchor">Contact</a>
            </Link>
            <Link scroll={false} href="/resources">
              <a className="mainnav-anchor">Resources</a>
            </Link>

          </div>

          <div className="column">
            <a
              className="button yellow-on-blue"
              href="https://www.gofundme.com/f/ecrbnyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Now!
            </a>
            <br />
            <Link href="/privacy-policy">
              <a className="privacy-policy-link">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          font: normal 13px/1.5 "Montserrat", sans-serif;
          margin-top: 200px;
          transition: transform 400ms;
        }
        @media (max-width: 1023px) {
          .mainnav--active .footer {
            transform: translateY(calc(100vh - 80px));
          }
        }

        .footer-social {
          background: #013c49;
          padding: 22px;
          text-align: center;
        }

        .footer-social-anchor {
          align-items: center;
          background: #fff2e5;
          border-radius: 50%;
          color: #013c49;
          display: inline-flex;
          height: 36px;
          justify-content: center;
          margin: 0 5px;
          text-decoration: none;
          width: 36px;
        }
        .footer-social-anchor:hover {
          background: white;
        }

        .footer-social-anchor span {
          display: none;
        }

        .footer-bottom {
          background: var(--persimmon);
          color: #052531;
        }

        .footer-bottom__content {
          padding: 3em 1em;
        }

        @media (max-width: 1023px) {
          .footer-bottom__content {
          }
        }

        @media (min-width: 1024px) {
          .footer-bottom__content {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 36px 96px;
          }
        }

        .logo img {
          height: 40px;
        }

        .subscribe-form {
          font: normal 15px/1.733 Montserrat;
          margin: 3em 0;
          text-transform: uppercase;
        }

        @media (min-width: 1024px) {
          .subscribe-form {
            flex-basis: 292px;

            padding: 0 96px;
          }
        }

        .subscribe-form__bottom {
          align-items: center;
          display: flex;
          justify-content: flex-end;
        }

        .subscribe-form .subscribe-form__top {
          margin: 3px 0.5px;
        }

        .subscribe-form .button {
          border-color: #fff2e5;
          color: #fff2e5;
        }


        .footer-navigation {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 1024px) {
          .footer-navigation {
            margin: 2em 0;
          }
        }

        .footer-navigation a {
          color: inherit;
          text-decoration: none;
        }

        input::placeholder {
          text-transform: uppercase;
        }

        .privacy-policy-link {
          color: inherit;
          display: inline-block;
          font: 100 smaller/1 "Montserrat", sans-serif;
          margin-top: 1em;
          text-decoration: none;
          text-transform: uppercase;
        }
      `}</style>
    </footer>
  )
}
