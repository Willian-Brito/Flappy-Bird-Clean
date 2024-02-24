"use client";
import { EspacoObstaculo, Jogo, Nivel } from "core";
import React, { useEffect, useState } from "react";
import useKeyPress from "../hook/useKeyPress";

export interface ContextoJogoProps {
    jogo: Jogo
    passaro: Jogo["passaro"]
    obstaculos: Jogo["obstaculos"]
    pausado: boolean
    velocidade: number
    alternarPausado: () => void
    reiniciar: (props?: { nivel?: Nivel; espaco?: EspacoObstaculo }) => void
    zerar: () => void
    alterarVelocidade: (velocidade: number) => void
}

const ContextoJogo = React.createContext<ContextoJogoProps>({} as any)

export function ProvedorJogo(props: any) {

    const voando = useKeyPress(" ");
    const [pausado, setPausado] = useState<boolean>(false);
    const [velocidade, setVelocidade] = useState<number>(10);
    const [jogo, setJogo] = useState<Jogo>(Jogo.novo());

    useEffect(() => {
        const temporizador = setInterval(() => {

            if(pausado) return;
            setJogo((jogo) => jogo.animar());

        }, velocidade)
        return () => clearInterval(temporizador);
    }, [velocidade, pausado])

    useEffect(() => {

        if(voando && jogo.passaro.voando) return;
        if(!voando && !jogo.passaro.voando) return;

        setJogo(jogo.passaroEstaVoando(voando));
    }, [voando, jogo])

    function reiniciar(props?: { nivel?: Nivel; espaco?: EspacoObstaculo }) {
            setJogo(
                jogo.reiniciar({
                    nivel: props?.nivel,
                    espaco: props?.espaco,
                }),
            )
    }

    function zerar() {
        setJogo(jogo.zerar());
        setVelocidade(10);
    }

    return (
        <ContextoJogo.Provider 
            value={{
                jogo, 
                pausado, 
                velocidade,
                get passaro() {
                    return jogo.passaro;
                },
                get obstaculos() {
                    return jogo.obstaculos;
                },
                reiniciar,
                zerar,
                alterarVelocidade: setVelocidade,
                alternarPausado: () => setPausado(!pausado)
            }}
        >
            {props.children}   
        </ContextoJogo.Provider>
    )
}

export default ContextoJogo;
