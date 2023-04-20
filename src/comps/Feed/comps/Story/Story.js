function Story(props) {
    return (
        <div className="Story">
            <div className="perfil">
                <img className="imgStory" src={props.img} />
            </div>
            <span className="nomeStory">{props.nome}</span>
        </div>
    )
}
export default Story;