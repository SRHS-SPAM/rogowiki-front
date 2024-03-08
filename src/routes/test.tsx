"use client";

import { SizeProvider } from "../tool/SizeContext";
import "../App.css";
import Footer from "../_components/footer";
import Header from "../_components/header";
import MainBox from "../_components/mainbox";
import { Helmet } from "react-helmet";

function Test() {
  return (
    <>
      <Helmet>
        <title>로고위키</title>
        <meta name="description" content="메인 페이지" />
      </Helmet>
    </>
  );
}

export default Test;
