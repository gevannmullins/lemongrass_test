import Head from "next/head";
import Header from "Header";
import Footer from "Footer";

import classes from './Layout.module.css';


const Layout = props => (
    <div className={classes.layout}>
        <Head>
            <title>LemonGrassTest</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link href="../node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />

        </Head>

        <Header />
        <div className={classes.content}>
            {props.children}
        </div>
        <Footer />

    </div>
);

export default Layout;