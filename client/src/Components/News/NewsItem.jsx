import s from "./NewsItem.module.css"
const NewsItem = (props) =>{
    return(

                        <div className={s.newsItemContainer}>
                            <img width="100px" height="100px" src={props.img} alt=""/>
                    <p className={s.newswItemTitle}>{props.title}</p>
                    <p className="newsItemDescription"> {props.description}</p>
                    <p className="newsItemAuthor">{props.author}</p>
                    <p className="newsItemDate">{props.date}</p>
                    <button>Слідкувати</button>
                </div>
    )
}

export default NewsItem