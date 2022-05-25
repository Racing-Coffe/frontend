import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: #fff;
`

const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;
`

const Text = styled.p`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`

const Bold = styled.span`
    font-weight: bold;
`

export default function Introduction() {
    return (
        <Container>
            <Title>The Formula 1 Blog Open Source</Title>
            <Text>Do you Like Formula 1 And Coding? So You will love <Bold>Racing Coffe</Bold></Text>
        </Container>
    )
}