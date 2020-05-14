import React from "react"
import MainContainer from "../components/containers/MainContainer"
import SEO from "../components/seo"
import Contents from "../components/Contents/Contents"
import ScrollBar from "../components/ScrollBar"
import Lander from "../components/Lander/Lander";


const IndexPage = () => {
  return (
    <MainContainer>
      <SEO title="Home" />
      <ScrollBar />
      <Lander />
      <Contents />
    </MainContainer>
  )

}
// const IndexPage = () => {
//   return (
//     <MainContainer>
//       <SEO title="Home" />
//       <ScrollBar />
//       <SpotlightContainer>
//         <SpotlightLander />
//       </SpotlightContainer>
//       <Contents />
//     </MainContainer>
//   )

// }

export default IndexPage
