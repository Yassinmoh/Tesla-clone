import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Even More Capable Technologies"
                backgroundImage="model-s.jpg"
                leftButton="Custom Order"
                rightButton="Existing Inventory"/>
            <Section 
                title="Model Y"
                description="Even More Capable Technologies"
                backgroundImage="model-y.jpg"
                leftButton="Custom Order"
                rightButton="Existing Inventory"/>
            <Section 
                title="Model 3"
                description="Even More Capable Technologies"
                backgroundImage="model-3.jpg"
                leftButton="Custom Order"
                rightButton="Existing Inventory"/>
            <Section title="Model X"
                description="Even More Capable Technologies"
                backgroundImage="model-x.jpg"
                leftButton="Custom Order"
                rightButton="Existing Inventory"/>
            <Section title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImage="solar-panel.jpg"
                leftButton="Order Now"
                rightButton="Learn More"/>
            <Section title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New roof Plus Solar Panel"
                backgroundImage="solar-roof.jpg"
                leftButton="Order Now"
                rightButton="Learn More"/>
            <Section title="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftButton="Shop now"/>
        </Container>
    )
}

// ---------------------------(Styled-Components)-------------------------------

const Container=styled.div`
width: 100vh;
`







// ---------------------------(Styled-Components)-------------------------------





export default Home
