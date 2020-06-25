import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

//import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import "../css/bootstrap-responsive.css"

import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class NavbarExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


export default function Layout({ children, breadcrumbs }) {
    return (
      <>
        <Helmet>
          
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta charset="utf-8" />
        <title>Sigm&amp;.io
          {breadcrumbs ? ` - ${breadcrumbs.join(" - ")}` : ``}
        </title>

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/apple-touch-icon-144-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/apple-touch-icon-114-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/apple-touch-icon-72-precomposed.png" />
          <link rel="apple-touch-icon-precomposed" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/apple-touch-icon-57-precomposed.png" />
          <link rel="shortcut icon" href="https://kristopolous.github.io/BOOTSTRA.386/assets/ico/favicon.png" />
        </Helmet>

 <NavbarExample />
<div className="navbar navbar-inverse navbar-fixed-top">
  <div className="navbar-inner">
    <div className="container">
    <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target="#nav-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="brand">Sigm&amp;.io</Link>
        <div id="nav-collapse" className="collapse" style={{height: '25px'}}>
          <ul className="nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
    </div>
  </div>
</div>

        <main>{children}</main>

      </>
    )
  }