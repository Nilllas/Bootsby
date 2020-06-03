import React from "react"
import '../css/bootstrap.min.css'
export default class HTML extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>Bootstrap 101 Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="css/bootstrap.min.css" rel="stylesheet" media="screen" />
      </head>
      <body>
        <h1>Hello, world!</h1>
        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
      </body>
    </html>
    )
  }
}