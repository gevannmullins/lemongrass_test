import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

import classes from './Layout.module.css';


const Layout = props => (
    <div className={classes.layout}>
        <Head>
            <title>LemonGrassTest</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link href="../../node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />
        </Head>

        <Header />
        <div className={`container-fluid vh-100`}>
            <div className={` row ${classes.contentlayout} `}>
                <SideBar />
                <div className={` col-sm-9 ${classes.content} `}>
                    {props.children}
                </div>
            </div>
        </div>
        <Footer />

    </div>
);

export default Layout;