import styled from "styled-components";
import Header from "../src/components/Header";
import Introduction from "../src/components/Introduction";

const Container = styled.div``

export default function Index() {
    return (
        <Container>
            <Header />
            <Introduction />
        </Container>
    )
}