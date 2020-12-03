import Link from 'next/link'
import React from 'react';


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileNavIsActive: false
    }
    this.toggleActiveMobileNav = this.toggleActiveMobileNav.bind(this)
  }

  toggleActiveMobileNav() {
    this.setState({
      mobileNavIsActive: true
    });
  }

  render() {
    return (
      <header className="header">
        <div className="content header__content">
          <Link href="/">
            <a className="logo">
              <img src="/logo.svg" alt="logo" />
            </a>
          </Link>
          <label htmlFor="active-checkbox" className="menu-button header__bars" onClick={this.toggleActiveMobileNav()}><i className="fa fa-bars" aria-hidden="true"></i></label>
          <input type="checkbox" className="active-checkbox" id="active-checkbox" />
          <nav className="mainnav">
            {false && <span>
                <a className="mainnav-anchor" href="/join">Join the Campaign</a>
                <div className="mainnav__subnavigation"><a href="/join#attend-a-meeting">Attend a Meeting</a>
                <a href="/join#join-a-working-group">Join a working group</a></div>
            </span>}
            <Link scroll={false} href="/about">
              <a className="mainnav-anchor">Why ECRB?</a>
            </Link>
            <Link scroll={false} href="/next-steps">
              <a className="mainnav-anchor">What Can I Do?</a>
            </Link>
            <Link scroll={false} href="/legislation">
              <a className="mainnav-anchor">The Legislation</a>
            </Link>
            <Link scroll={false} href="/endorse">
              <a className="mainnav-anchor">Endorsers</a>
            </Link>
            <a className="button yellow-on-orange donate-now" href="//gofundme.com/ecrbnyc" target="_blank" rel="noopener noreferrer">Donate Now!</a>
          </nav>
        </div>
    <style jsx>{`
      .header {
        background-color: #01343d;
        border-bottom: 4px solid var(--persimmon);
        color: #bdffd9;
        position: sticky;
        top: 0;
        z-index: 11;
      }

      @media (min-width: 1024px) {
        .header {
          text-transform: uppercase;
        }
      }

      .header__content {
        display: grid;
        grid-template-columns: 1fr auto;

        height: var(--header-height);
        padding: 0 2em;
      }

      @media (min-width: 1024px) {
        .header__content {
          grid-template-columns: auto 1fr;
          padding: 0 2em;
        }
      }

      .logo {
        align-self: center;
        display: inline-block;
      }

      .logo img {
        height: 40px;
      }

      @media (min-width: 1024px) {
        .logo img {
          height: 50px;
        }
      }

      .menu-button {
        align-self: center;
        font-size: 18px;
      }
      @media (min-width: 1024px) {
        .header__bars {
          display: none;
        }
      }

      .active-checkbox {
        display: none;
      }

      .mainnav {
        font: 700 13px/1 "Montserrat", sans-serif;
      }

      @media (max-width: 1023px) {
        .mainnav {
          display: none;
          height: calc(100vh - var(--header-height) - 4px);
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: #052531;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        :checked + .mainnav {
          display: flex;
        }
      }

      @media (min-width: 1024px) {
        .mainnav {
          align-self: center;
          align-items: center;
          display: flex;
          justify-content: flex-end;
        }
      }
      .mainnav span {
        position: relative;
      }

      @media (min-width: 1024px) {
        .mainnav span:hover .mainnav__subnavigation {
          opacity: 1;
          pointer-events: auto;
          transform: none;
        }
      }
      .mainnav__subnavigation {
        background: #01343d;
        color: white;
        font: 400 13px/2 "Montserrat", sans-serif;
        opacity: 0;
        padding: 9px 9px 1em;
        position: absolute;
        transform: scale(0.85);
        white-space: pre-line;
      }
      .mainnav__subnavigation a {
        color: inherit;
        display: block;
        text-decoration: none;
        white-space: nowrap;
      }
      .mainnav__subnavigation a:hover {
        color: white;
      }
      .mainnav-anchor {
        color: inherit;
        display: block;
        padding: 9px;
        text-align: center;
        text-decoration: none;
        transition: color 800ms;
      }

      .mainnav-anchor:hover,
      .mainnav span:hover .mainnav-anchor {
        color: white;
      }
      @media (max-width: 1023px) {
        .donate-now {
          margin-top: var(--gutter);
        }
      }
      @media (min-width: 1024px) {
        .donate-now {
          margin-left: var(--gutter);
        }
      }
    `}</style>
      </header>
    )
  }
}
