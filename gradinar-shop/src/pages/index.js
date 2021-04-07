// UIKit import
import 'uikit/dist/css/uikit.min.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slideshow from "../components/slideshow"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slideshow></Slideshow>
    <h1>Gradinar</h1>
    <p>Najstariji salon keramike u regionu.</p>
    <p>+381 34 702 008</p>
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
  
)

export default IndexPage

// loads the Icon plugin
UIkit.use(Icons)
