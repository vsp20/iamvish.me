import React from "react"
import MainContainer from "../components/containers/MainContainer"
import SEO from "../components/seo"
import { SpotlightContainer, SpotlightLander } from "../components/containers/Spotlight"

const IndexPage = () => (
  <MainContainer>
    <SEO title="Home" />
    <SpotlightContainer>
      <SpotlightLander />
    </SpotlightContainer>
  </MainContainer>
)

export default IndexPage
