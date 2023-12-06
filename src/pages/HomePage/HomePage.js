import React from "react";
import styled from "styled-components";
import { HashRouster as Router, Switch, Route } from "react-router-dom";
import background from "./back_img.png";

const Text = styled.div`
position: absolute;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`

const Title = styled.div`
font-weight:bold;
line-height: 40px;
text-align: center;
flex: 1;
color: orange;
`

export default function HomePage() {
  return (
    <Text style={{ backgroundImage: `url(${background})`}}>
      <br/>
      <Title><font size = "3">1. 全球連接</font></Title>
      "磚注樹成"為您提供一個全球性的協作空間。無論您身在何處，都能與來自世界各地的夥伴聯繫、共同合作。
      <br/>
      <Title><font size = "3">2. 強大的工具</font></Title>
      我們提供一系列強大的協作工具，從即時討論到文件共享，無縫地支援您在作業中的每一個步驟。
      <br/>
      <Title><font size = "3">3. 啟發創意</font></Title>
      在這裡，您可以探索不同領域的創意和想法。與其他用戶交流、得到反饋，激發靈感，使您的項目更加豐富多彩。
      <br/>
      <Title><font size = "3">4. 開始您的冒險</font></Title>
      立即註冊成為"磚注樹成"的一員，開始您的共創之旅。不僅僅是一個網站，而是一個打開未來的大門。
      <br/>
      不要錯過這個機會，加入我們，讓我們一同建設更加卓越的明天！
    </Text>
  );
}