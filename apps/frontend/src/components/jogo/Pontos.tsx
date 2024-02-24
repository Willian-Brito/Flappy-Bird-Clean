import useJogo from "@/data/hook/useJogo"

export interface PontosProps {
    valor?: number
}

export default function Pontos(props: PontosProps) {
    const { jogo } = useJogo();
    const pontos = jogo.pontos.valor;

    return(
        <div className="text-7xl ml-5 z-50 font-bold absolute">{pontos}</div>
    )
}