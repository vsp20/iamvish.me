import React from "react"
import MainContainer from "../components/containers/MainContainer"
import SEO from "../components/seo"
import { SpotlightContainer, SpotlightLander } from "../components/containers/Spotlight"
import Contents from "../components/Contents/Contents"
import ScrollBar from "../components/ScrollBar"

const IndexPage = () => {
  return (
    <MainContainer>
      <SEO title="Home" />
      <ScrollBar />
      <SpotlightContainer>
        <SpotlightLander />
      </SpotlightContainer>
      <Contents />
    </MainContainer>
  )

}

export default IndexPage
