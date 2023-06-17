import s from './Hero.module.css'
import heroImg from '../../images/slider-hero-section/startup3.png'

const Hero = () => {
    return (
        <section className={s.hero} id={s.hero}>
            <div className={s.title} id={s.title2}>
                <h1 className={s.h1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                <p className={s.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus officia hic obcaecati veniam similique? Rerum.</p>
                <form action="" className={s.form}>
                    <input className={s.input} type="text" placeholder='lorem lklk lklk'/>
                    <button className={s.button}>Lorem</button>
                </form>
            </div>
            <div className={s.img} id={s.img}>
                <img src={heroImg} className={s.heroImg} alt="" />
            </div>
        </section>
    )
}

export default Hero