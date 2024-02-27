"use client";

import "../App.css";
import Footer from "../_components/footer";
import Header from "../_components/header";
import MainBox from "../_components/mainbox";

function Home() {
    return (
        <>
            <Header />
            <div className="main">
                <MainBox />
            </div>
            <Footer />
        </>
    );
}

export default Home;
