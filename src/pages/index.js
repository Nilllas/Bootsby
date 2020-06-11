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
      <p></p>
      <div>
        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
      <li><a tabindex="-1" href="/">Action</a></li>
      <li><a tabindex="-1" href="/">Another action</a></li>
      <li><a tabindex="-1" href="/">Something else here</a></li>
      <li className="divider"></li>
      <li><a tabindex="-1" href="/">Separated link</a></li>
    </ul>
</div>

      </Layout>

    );
  }
