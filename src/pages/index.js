import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function Home() {
    return (
      <Layout>
 
      <h1>Hello world!</h1>
         <h2>Welcome hooman</h2>
         <p>testing this weird text</p>
         <div class="container">
  <p></p>
  <h2>Simple Collapsible</h2>
  <p>Click on the button to toggle between showing and hiding content.</p>
  <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
  <div id="demo" className="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
</div>
      
      </Layout>

    );
  }
