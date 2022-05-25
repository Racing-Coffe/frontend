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

export default function Introduction() {
    return (
        <Container>
            <Title>The Formula 1 Blog Open Source</Title>
        </Container>
    )
}