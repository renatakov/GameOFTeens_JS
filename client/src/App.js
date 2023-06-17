import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero/Hero'
import Slider from './Components/Sliders/Slider'
import startup1 from "./images/startups/Green-Box-800x800.jpg"
import startup2 from "./images/startups/YNOS367825.png"
import startup3 from "./images/startups/unnamed.png"
import startup4 from "./images/startups/HTB1joyHQFXXXXcIXVXXq6xXFXXX7.jpg"
import startup5 from "./images/startups/unnamed (1).png"
import newsItem1 from "./images/news/E6Fvg85XIAMmKaP.png"
import newsItem2 from "./images/news/Instagram-1080x1080-1.png"
import newsItem3 from "./images/news/103910105-machine-learning-artificial-neural-network-ai-icon.webp"
import newsItem4 from "./images/news/cropped-data-innovation-summit-2023.png"
import newsItem5 from "./images/news/unnamed.png"
import { MyContext } from "./Components/Sliders/Slider"
import { MyContext1 } from './Components/News/News';
import News from "./Components/News/News"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext } from 'react';


const initialState = {
  startups:[
    {
      id: 1,
      title: "GreenBox",
      description: "GreenBox - це екологічна коробка для упаковки їжі, яка замінює одноразові контейнери з полістиролу та пластику. Вона виготовляється зі стиснутої біомаси, що розкладається природним шляхом, і може бути повністю перероблена. GreenBox пропонує ефективне та екологічне рішення для упаковки їжі в ресторанах та доставці.",
      author: "Іван Петренко",
      img: startup1,
    },
    {
      id: 2,
      title: "FitBuddy",
      description: "FitBuddy - це мобільний додаток, який допомагає людям знаходити спортивних партнерів у своєму районі. Додаток враховує інтереси, рівень фізичної активності та доступні графіки, щоб забезпечити користувачам зручну платформу для знайомств і спільних тренувань. FitBuddy також надає можливість обмінюватися порадами з фітнесу та мотивувати один одного досягати спортивних цілей.",
      author: "Катерина Василенко",
      img: startup2,
    },
    {
      id: 3,
      title: "SmartRent",
      description: "SmartRent - це інноваційна платформа для оренди нерухомості, яка використовує технології Інтернету речей (IoT) для забезпечення зручності та ефективності в орендних будинках. Система SmartRent дозволяє власникам нерухомості контролювати електроніку, системи безпеки та комунікації в будинках з використанням смартфонів. Також вона забезпечує орендарів доступом до віртуальних турів та онлайн-оплати.",
      author: "Олександр Іванов",
      img: startup3,
    },
    {
      id: 4,
      title: "SmartHomeGuard",
      description: "Розумна система безпеки для будинків, яка використовує датчики, відеокамери та штучний інтелект для виявлення вторгнень та небезпек. Користувачі отримують сповіщення на смартфони та можуть керувати системою віддалено.",
      author: "Максим Васильєв",
      img: startup4,
    },
    {
      id: 5,
      title: "TravelBuddy",
      description: "TravelBuddy - це мобільний додаток, розроблений для полегшення організації поїздок. Він надає користувачам зручний спосіб знаходження та бронювання готелів, квитків на транспорт, ресторанів і екскурсій, а також рекомендації місцевих пам'яток та подій. Додаток також має функцію спільного планування поїздок, яка дозволяє друзям та родині спільно планувати і організовувати свої подорожі.",
      author: "Іван Петров",
      img: startup5,
    }
  ],
  news:[
    {
      id: 1,
      title: "FutureTech Conference",
      description: `Конференція "FutureTech" є одним з найбільших щорічних заходів у сфері новітніх технологій. Цей захід збирає разом провідних експертів, стартапи, інвесторів та інноваторів, які діляться своїми ідеями, дослідженнями та найсвіжішими розробками. Конференція включає презентації, панельні дискусії, майстер-класи та можливості для нетворкінгу.`,
      author:"TechConnect Events",
      date: "10-12 вересня 2023",
      img: newsItem1
    },
    {
      id: 2,
      title: "Startup Pitch Night",
      description: `"Startup Pitch Night" - це захід, призначений для стартапів, які шукають інвестиції. У цей вечір стартапи матимуть можливість представити свої проекти перед визнаними інвесторами та експертами зі сфери технологій. Кожен стартап отримає обмежений час для презентації своєї ідеї та бізнес-моделі, після чого буде проведений Q&A-сесія.`,
      author:"Startup Hub",
      date: "25 листопада 2023",
      img: newsItem2
    },
    {
      id: 3,
      title: "Innovation Hackathon",
      description: `"Innovation Hackathon" - це трьоденний інтенсив для творчих розробників, дизайнерів та підприємців, які хочуть працювати над інноваційними проектами. Учасники утворюють команди та мають вигадати та реалізувати ідеї з використанням новітніх технологій. Під кінець хакатону кожна команда презентує свій проект перед журі та має шанс отримати підтримку для подальшого розвитку.`,
      author:"Innovation Hub",
      date: "6-8 жовтня 2023",
      img: newsItem3
    },
    {
      id: 4,
      title: "Innovation Summit 2023",
      description: `Цей захід є великим самітом інновацій та технологій, який збирає під одним дахом 
      провідних експертів, стартапи та інвесторів. Він пропонує широкий спектр панелей, доповідей і мережевих заходів. Учасники матимуть можливість ознайомитися з останніми трендами у сфері технологій, взяти участь у стартап-конкурсі та знайти потенційних інвесторів для своїх проектів.`,
      author:"Innovation Hub",
      date: "15-17 листопада 2023",
      img: newsItem4
    },
    {
      id: 5,
      title: "Investment Forum 2023: Shaping the Future",
      description: `Цей форум є найбільшим зібранням інвесторів і стартапів в 2023 році. Він включатиме панельні дискусії, виступи експертів та сесії з мережевими зв'язками. Форум надасть учасникам можливість обмінятися досвідом, знайти потенційних інвесторів і партнерів, а також дізнатися про нові тренди в інвестиційній галузі.`,
      date: "5-7 серпня 2023",
      img: newsItem5
    },
  ]
}

const App = () => {
  return (
    <>
      {/* <MyContext.Provider value={initialState}> */}
          <Hero />
          <Slider state={initialState.startups} />
          <News state={initialState.news}/>
      {/* </MyContext.Provider> */}
    </>
  );
};


export default App;