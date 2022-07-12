import Head from "next/head"
import Footer from "../common/footer"
import Header from '../common/header'

export default function format({children}) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Header />
            <main>
               {children}
            </main>
            <Footer />
        </>
    )
}