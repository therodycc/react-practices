import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/assets/css/globals.css" />
                    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/css/loading-circle.css" />
                    <link rel="stylesheet" href="/assets/css/loading-line.css" />
                    <link rel="stylesheet" href="/assets/css/loading-square.css" />
                </Head>
                <body>
                    <Main />
                    <script src="https://kit.fontawesome.com/2e2971d45d.js" crossOrigin="anonymous"></script>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument