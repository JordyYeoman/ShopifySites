import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
