"use client";

import "../App.css";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Lists from "../_components/lists";
import MainBox from "../_components/mainbox";

const lists = [
    "[학생]국재윤",
    "[학생]지민철",
    "[동아리]산업용로봇",
    "[분류]제목",
];
function Home() {
    return (
        <>
            <Header />
            <div className="main">
                <MainBox />
                {/* <Lists lists={lists} /> */}
            </div>

            <Footer />
        </>
    );
}

export default Home;
