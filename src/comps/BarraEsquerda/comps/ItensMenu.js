export default function ItensMenu(props){
    return(
        <span>
        <span className='icone'>{props.icone}</span>
        <span>{props.texto}</span>
        
     </span>
    )
}