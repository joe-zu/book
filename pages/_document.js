import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"
// import { useEffect } from 'react'



class MyDocument extends Document {
    render() {

        return (
            <Html lang="en">
                <Head>
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument