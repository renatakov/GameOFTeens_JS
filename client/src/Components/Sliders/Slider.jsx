import s from './Slider.module.css'
import person1 from '../../images/slider-hero-section/person1.png';
import cardImg1 from '../../images/slider-hero-section/cardImg1.jpg';
import cardImg2 from '../../images/slider-hero-section/cardImg2.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { createContext } from "react";
import StartupItem from "../Startups/StartupItem";
const MyContext = createContext();

const Slider = (props) => {

    const getAllStartups = props.state.map((item) => (
        <StartupItem
        key={item.id}
        title={item.title}
        img={item.img}
        description={item.description}
        author={item.author}
        />
    ));
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3.5,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2.5,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5,
          slidesToSlide: 1 
        }
      };

    return (
        <section className={s.slider}>
            <div className={s.top}>
                <div className={s.top_title} id={s.top_title1}>
                    <hr />
                    <h2> Наші Стартапи</h2>
                </div>
                {/* <div className={s.buttons}>
                    <button onClick={goPrev}>{"<"}</button>
                    <button onClick={goNext}>{">"}</button>
                </div> */}
            </div>
            {/* <div className={s.box}></div> */}
            <Carousel responsive={responsive} className={s.startUps}>
            {getAllStartups}

            </Carousel>
            {/* </div> */}
        </section>
    )
}

export default Slider
