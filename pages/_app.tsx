import { createGlobalStyle } from 'styled-components'
import React from "react";
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
    body, body * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export default function MyApp({ Component, pageProps }: any) {
    return (
        <React.Fragment>
            <Head>
                <title>Racing Coffe</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </React.Fragment >
    )
}