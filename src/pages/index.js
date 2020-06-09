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
        
      <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="navbar-inner">
        <div className="container">
          <button type="button" className="btn btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="brand">Sigm&amp;.io</Link>
          <div className="nav-collapse collapse" style={{height: '0px'}}>
            <ul className="nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
 
        
      <main>
         <h1>Hello world!</h1>
         <h2>Welcome hooman</h2>
      </main>
      
      </>

    )
  }
