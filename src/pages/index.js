import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import "../css/bootstrap-responsive.css"
export default function Home() {
    return (
      <>
        <Helmet>
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta charset="utf-8" />
          <title>Sigm&amp;.io</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/apple-touch-icon-144-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/apple-touch-icon-114-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/apple-touch-icon-72-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/apple-touch-icon-57-precomposed.png" />
          <link rel="shortcut icon" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/favicon.png" />
        </Helmet>
        <header>
        <Link to="/" className="brand-color logo-text">
          Taylor's Tidy Trees
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/who">Who We Are</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
         <div>Hello world!</div>
      </main>
      </>

    )
  }
