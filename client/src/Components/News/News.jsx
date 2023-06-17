import s from "./News.module.css"
import NewsItem from "./NewsItem";


const News = (props) =>{
    const getAllNews = props.state.map((item) => (
        <NewsItem
        key={item.id}
        title={item.title}
        img={item.img}
        description={item.description}
        author={item.author}
        date={item.date}
        />
    ));
    console.log(props)
    return(
        <div className="news">
            <div className={s.news__title}>
            <hr/>
            <h2>Події</h2>
            </div>
            {getAllNews}
        </div>
    )
}
export default News;

