import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Toolbar from "../components/toolbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gradinar</h1>
    <p>Najstariji salon keramike u regionu.</p>
    <p>+381 34 702 008</p>
    <StaticImage
      src="../images/gradinar-logo.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Gradinar logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    <Toolbar></Toolbar>
  </Layout>
  
)

export default IndexPage
