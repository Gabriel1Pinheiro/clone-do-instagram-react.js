import "./sugestoes.css";

function GerarNumeroAleatorio(Min, Max) {
    return Math.floor(Math.random() * (Max - Min)) + Min;
}


export default function SugestoesDePerfil({SourceImage, Nome, NomeDoSeguidor}) {
    const quantidadeDeSeguidores = GerarNumeroAleatorio(1, 10);

    return (
        <div className="main-container">
            <img className="foto-do-usuario" width={30} height={30} src={SourceImage} alt={Nome}/>
            <div className="text-container">
                <p className="nome-do-usuario font-bold">{Nome}</p>
                <p className="seguido-por">{NomeDoSeguidor} e mais outras {quantidadeDeSeguidores} seguem este perfil</p>
            </div>
            <p className="follow">Seguir</p>
        </div>
    )
}