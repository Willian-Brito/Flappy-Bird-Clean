import useJogo from "@/data/hook/useJogo"

export default function Pontos() {
    
    const { jogo } = useJogo();
    const pontos = jogo.pontos.valor;
    const record = jogo.recorde.valor;

    return(
        <div className="text-7xl ml-5 z-50 font-bold absolute">{pontos}/{record}</div>
    )
}