import Document, { Head, Main, NextScript } from 'next/document'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=1024" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Crimson+Text:400,400i|Montserrat:400,700" />
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
      <style jsx global>{`
        :root {
          scroll-behavior: smooth;

          --gutter: 16px;
          --small-content-maxwidth: 688px;

          --persimmon: #FD5F55;

          --slow: 800ms;
          --fast: 400ms;
          --header-height: 80px;
        }
        @media (min-width: 736px) {
          :root {
            --gutter: 40px;
            --top-gutter: 80px;
          }
        }

        body {
          background: #fff2e5;
          display: grid;
          font-family: 14px/22px Crimson Text,serif;
          grid-template-rows: auto 1fr auto;
          margin: 0;
          min-height: 100vh;
        }

        h1 {
          color: #01343d;
          font: 700 1.5em/1 Montserrat,sans-serif;
          text-transform: uppercase;
        }
        @media (min-width: 768px) {
          h1 {
            font-size: 48px;
          }
        }

        h2 {
          font: 700 1.17em/1 Montserrat,sans-serif;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          h2 {
              font: 700 36px/1 Montserrat,sans-serif;
          }
        }

        h3 {
          font: 700 22px/24px Montserrat;
        }

        .button {
          border-style: solid;
          border-width: 1px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          font: normal 13px/1 Montserrat,sans-serif;
          line-height: normal;
          min-width: 10.539em;
          padding: .5em 1.25em;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
        }

        .button.yellow-on-blue {
          background-color: #052531;
          border-color: #f8ece4;
          color: #f8ece4;
        }

        .button.yellow-on-blue:hover {
          border-color: #fff;
          color: #fff;
        }

        .button.yellow-on-orange {
          background-color: var(--persimmon);
          border-color: #f8ece4;
          color: #f8ece4;
        }

        .button.yellow-on-orange:hover {
          border-color: #fff;
          color: #fff;
        }

        .fa {
          display: inline-block;
          font: normal normal normal 14px/1 FontAwesome;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .wrapper {
          box-sizing: border-box;
          margin: 0 auto;
          max-width: 1280px;
          padding: 0 var(--gutter);
        }
        .page a {
          color: var(--persimmon);
        }

        .text-row img {
          max-width: 100%;
        }
      `}</style>
    </html>
    )
  }
}
