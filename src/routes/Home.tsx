"use client";

import { SizeProvider } from "../tool/SizeContext";
import "../App.css";
import ClassList from "../_components/class";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Lists from "../_components/lists";
import MainBox from "../_components/mainbox";

const teacherList = [
    "1반쌤",
    "2반쌤",
    "3반쌤",
    "4반쌤",
    "5반쌤",
    "6반쌤",
    "7반쌤",
    "8반쌤",
];
const studentList = [
    "학생1",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생중간",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생",
    "학생끝",
];
const lists = [
    "[학생]국재윤",
    "[학생]지민철",
    "[동아리]산업용로봇",
    "[분류]제목",
];
function Home() {
    return (
        <>
            <SizeProvider>
                <div className="toempty">
                    <Header />
                    <div className="mainasd">
                        {/* <MainBox /> */}
                        {/* <Lists lists={lists} /> */}
                        <ClassList
                            teacherlist={teacherList}
                            studentlist={studentList}
                        />
                    </div>
                    <Footer />
                </div>
            </SizeProvider>
        </>
    );
}

export default Home;
