import React, { useState, useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import MyFinanceTabs from "../components/recommend/MyFinanceTabs.jsx";
import MyAllFinanceGraph from "../components/recommend/MyAllFinanceGraph.jsx";
import Navbar from "../components/header/Navbar.jsx";
import { getPresentRoadMap } from "../apis/RoadMap.jsx";
import FeedbackChatbot from "../components/recommend/FeedbackChatbot.jsx";
import Footer from "../components/footer/Footer.jsx";

// 금융 상품 추천 페이지
// 일단 한 개만 만들어놨는데 추후 금융 상품 추천에 대한 계획이 구체화되면 늘릴 수도 있음

function FinanceMyPage() {
  const [presentRoadMapGraph, setPresentRoadMapGraph] = useState();
  const [presentRoadMapProducts, setPresentRoadMapProducts] = useState();
  const [presentRoadMapInfo, setPresentRoadMapInfo] = useState();
  const [presentRoadMapRecommend, setPresentRoadMapRecommend] = useState();
  const [age, setAge] = useState();
  const [openChatbot, setOpenChatbot] = useState(false);

  useEffect(() => {
    getPresent();
  }, []);

  useEffect(() => {}, [setOpenChatbot]);

  var userName;

  const getPresent = async () => {
    console.log("Present");
    const res = await getPresentRoadMap();
    console.log("res", res);
    const productWithRecommend = {
      ...res.result.product,
      recommend: res.result.recommend,
    };

    await setPresentRoadMapGraph(res.result.data);
    await setPresentRoadMapInfo(res.result.info);
    await setPresentRoadMapProducts(productWithRecommend);
    await setAge(res.result.data.map((item) => item.age).filter((age) => age));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center px-[10%] mt-10">
        {presentRoadMapGraph &&
          presentRoadMapProducts &&
          presentRoadMapInfo && (
            <div className="flex flex-col w-full">
              <div className="flex flex-col mb-2">
                <div className="text-3xl mb-2 text-[#0046ff] font-semibold">
                  {presentRoadMapInfo.name}님의 금융 로드맵
                </div>
                <div className="flex">
                  <div className="h-full w-[4px] bg-[#5d5d5d] mr-5 rounded"></div>
                  <div className="text-xl text-[#444444] flex items-center">
                    안녕하세요.{" "}
                    <span className="font-OneShinhanMedium">
                      {" "}
                      {presentRoadMapInfo.name}
                    </span>
                    님의 금융 키워드는{" "}
                    <span className="rounded mx-2 bg-indigo-200 px-1 text-2xl font-semibold">
                      {presentRoadMapInfo.financeKeyword}
                    </span>{" "}
                    입니다.
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col xl:flex-row">
                <div className="lg:w-[60%] md:w-full">
                  {/* 그래프 */}
                  <MyAllFinanceGraph graph={presentRoadMapGraph} />
                </div>
                <div className="relative mb-4 lg:w-[40%] md:w-full">
                  <button
                    onClick={() => {
                      setOpenChatbot(!openChatbot);
                    }}
                    className="absolute shadow-lg right-[0.8rem] top-[0.8rem] border rounded-[1rem] p-[0.5rem] font-OneShinhanMedium hover:bg-[#0046ff] text-white"
                    style={{
                      background: openChatbot
                        ? "#0046ff"
                        : "linear-gradient(90deg, rgba(71,150,227,1) 0%, rgba(143,119,200,1) 100%)",
                    }}
                  >
                    {openChatbot ? "내 금융상품 보기" : "AI 피드백"}
                  </button>
                  {openChatbot ? (
                    <FeedbackChatbot />
                  ) : (
                    <MyFinanceTabs
                      financeProducts={presentRoadMapProducts}
                      info={presentRoadMapInfo}
                      age={age}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default FinanceMyPage;
