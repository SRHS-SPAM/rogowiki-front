<<<<<<< HEAD
import DocumentMain from "../components/documentMain";
import Opentab from "../components/opentab";

export default function Home() {
  return (
    <DocumentMain category={["사건", "의지평선너머로"]}>
      <Opentab />
      <Opentab />
      <Opentab />
    </DocumentMain>
  );
}
=======
"use client";

import "../App.css";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Lists from "../_components/lists";
import MainBox from "../_components/mainbox";

const lists = [
    "제목",
    "제목2",
    "제목3",
    "제목 고민중",
    "제목 길게하기 테스트중",
    "제목 여기까지도 가능한가 테스트중",
    "방금전게 줄였을때 한계가 맞는듯함",
    "제목3",
];
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
>>>>>>> test
