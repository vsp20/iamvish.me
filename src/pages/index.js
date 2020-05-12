import React from "react"
import MainContainer from "../components/containers/MainContainer"
import SEO from "../components/seo"
import { SpotlightContainer, SpotlightLander } from "../components/containers/Spotlight"
import Contents from "../components/containers/Contents"
import ScrollBar from "../components/ScrollBar"

const IndexPage = () => {

  return (
    <ScrollBar>
      <SEO title="Home" />
      <SpotlightContainer>
        <SpotlightLander />
      </SpotlightContainer>
      <Contents />
    </ScrollBar>
  )

}

export default IndexPage
