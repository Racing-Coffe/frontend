import { Html, Head, Main, NextScript } from 'next/document'

const FontData = {
    GStatic: {
        Precconect: "https://fonts.gstatic.com"
    },
    Font: {
        Precconect: "https://fonts.googleapis.com",
        Stylesheet: "https://fonts.googleapis.com/css2?family=Roboto&display=optional"
    }
}

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href={FontData.GStatic.Precconect} />
                <link rel="preconnect" href={FontData.Font.Precconect} />
                <link rel="stylesheet" href={FontData.Font.Stylesheet} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}