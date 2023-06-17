import s from "./StartupItem.module.css"

const StartupItem = (props) =>{
    return(

                        <div className={s.card}>
                <div className={s.imgHover}> 
                        <img src={props.img} alt=""  className={s.topImg}/>
                        <button className={s.hover_text}>Більше інформації </button>
                </div>
                    <p className={s.title}>{props.title}</p>
                    <p className={s.text}> {props.description}</p>
                </div>
    )
}

export default StartupItem