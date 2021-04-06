import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Brands from "../components/brands"

export default function BrandsPage  () {

    return (
      <Layout>
        <SEO title="Brendovi" />
        
        <Brands></Brands>
        
      </Layout>
      )
    
}
  
