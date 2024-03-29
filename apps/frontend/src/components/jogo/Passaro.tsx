import image from "../../../public/passaro.png"
import Image from "next/image"
import useDimensoesElemento from "@/data/hook/useDimensoesElemento"
import useJogo from "@/data/hook/useJogo"
import Pontos from "./Pontos"

export interface PassaroProps {
    className?: string
}

export default function Passaro(props: PassaroProps) {
    const { passaro, jogo } = useJogo();
    const { elementoRef, altura, largura } = useDimensoesElemento()
    
    const alturaPassaro = passaro.altura.valor
    const larguraPassaro = passaro.largura.valor
    const bottom = passaro.altitude.valor * altura
    
    return (
        <div ref={elementoRef} className="relative w-full h-full z-50">            
            
            <div
                style={{
                    bottom: bottom > 0 ? bottom : 0,
                    height: altura * alturaPassaro,
                    width: largura * larguraPassaro,
                    left: largura / 2,
                }}
                className={`absolute ${props.className ?? ""}`}
            >
                <Image src={image} alt="Passaro" className="h-full w-full" />
            </div>
        </div>
    )
}