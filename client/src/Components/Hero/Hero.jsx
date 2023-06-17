import s from './Hero.module.css'
import heroImg from '../../images/slider-hero-section/startup3.png'

const Hero = () => {
    return (
        <section className={s.hero} id={s.hero}>
            <div className={s.title} id={s.title2}>
                <h1 className={s.h1}>GoITeens Lab - лабораторія стартапів розроблених підлітками🚀</h1>
                <p className={s.text}>Україна - країна креативних людей, новітніх технологій і стартапів.  На цій платформі ви зможете розміщати свої стартапи і шукати інвесторів для фінансування і реалізації своєї ідеї!!!</p>
            </div>
            <div className={s.img} id={s.img}>
                <img src={heroImg} className={s.heroImg} alt="" />
            </div>
        </section>
    )
}

export default Hero