"use client";

import { SizeProvider } from "../tool/SizeContext";
import View from "../_components/view";
import "../App.css";
import Footer from "../_components/footer";
import Header from "../_components/header";
import MainBox from "../_components/mainbox";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>로고위키</title>
                <meta name="description" content="메인 페이지" />
            </Helmet>
            <SizeProvider>
                <div className="toempty">
                    <Header />
                    <div className="mainasd">
                        <View />
                        {/* <MainBox /> */}
                    </div>
                    <Footer />
                </div>
            </SizeProvider>
        </>
    );
}

export default Home;
