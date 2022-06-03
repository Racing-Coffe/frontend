import styled from "styled-components";
import Header from "../src/components/Header";
import Introduction from "../src/components/Introduction";

const Container = styled.div``

export async function getStaticProps() {
    const PostsArray = [
        {
            id: 1,
            title: 'Bem-Vindo ao Racing Coffe',
            tag_id: 1,
            author_id: 1,
            url: 'http://localhost:8000/api/posts/1',
            author_url: 'http://localhost:8000/api/authors/1',
            author: {
                name: 'Racing Coffe',
                avatar: 'avatar.jpg',
                twitter: '@RacingCoffe',
                description: 'Conta Oficial do Racing Coffe',
                created_at: '2022-06-03T02:24:32.000000Z',
                updated_at: '2022-06-03T02:24:32.000000Z'
            },
            tag_url: 'http://localhost:8000/api/tags/1',
            tag: {
                title: 'Racing Coffe',
                description: 'Novidades sobre o Racing Coffe',
                created_at: '2022-06-03T02:24:32.000000Z',
                updated_at: '2022-06-03T02:24:32.000000Z'
            }
        },
        {
            id: 2,
            title: 'Sergio Pérez renova Seu Contrato!',
            tag_id: 2,
            author_id: 2,
            url: 'http://localhost:8000/api/posts/2',
            author_url: 'http://localhost:8000/api/authors/2',
            author: {
                name: 'Erick Bilhalba Abella',
                avatar: 'avatar.jpg',
                twitter: '@TheDevick',
                description: '🚀 PHP é Bom Demais!\n' +
                    '🏁 Ocupado Aos Finais De Semana Vendo Corridas de Formula 1',
                created_at: '2022-06-03T02:24:32.000000Z',
                updated_at: '2022-06-03T02:24:32.000000Z'
            },
            tag_url: 'http://localhost:8000/api/tags/2',
            tag: {
                title: 'Contratos',
                description: 'As últimas notícias sobre os Contratos da Fórmula 1',
                created_at: '2022-06-03T02:24:32.000000Z',
                updated_at: '2022-06-03T02:24:32.000000Z'
            }
        }
    ]

    return { props: { Posts: PostsArray } }
}

export default function Index() {
    return (
        <Container>
            <Header />
            <Introduction />
        </Container>
    )
}