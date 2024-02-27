"use client";

import "../App.css";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Lists from "../_components/lists";
import MainBox from "../_components/mainbox";

const lists = ["제목", "제목2", "제목3"];
function Home() {
    return (
        <>
            <Header />
            <div className="main">
                {/* <MainBox /> */}
                <Lists lists={lists} />
            </div>

            <Footer />
        </>
    );
}

export default Home;
