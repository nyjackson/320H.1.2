import '../App.css'
function Article(props){
    return(
        <article>
        <time>{props.date}</time>
        <h2>{props.name}</h2>
        <img src = {props.imgSrc} alt = {props.imgAlt}/>
        <p class = "content">{props.content}</p>
      <p id = "continue"><a href="">Continues..</a></p>
      </article>
    )
}

export default Article;