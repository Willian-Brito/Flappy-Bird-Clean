import { EspacoObstaculo, Nivel } from "../../src"
import Jogo from "../../src/jogo/Jogo"

test("Deve criar um jogo", () => {
    const jogo = Jogo.novo()
    expect(jogo.nivel).toBe(Nivel.MEDIO)
    expect(jogo.pontos.valor).toBe(0)
    expect(jogo.recorde.valor).toBe(0)
    expect(jogo.emColisao).toBe(false)
    expect(jogo.espaco).toBe(EspacoObstaculo.NORMAL)
})

test("Deve animar jogo e passaro vai colidir no chão", () => {
    const jogo1 = Jogo.novo()
    const jogo2: Jogo = Array(1100)
        .fill(0)
        .reduce((acc) => acc.animar(), jogo1)
    expect(jogo2.emColisao).toBe(true)
})

test("Deve animar jogo e passaro vai colidir no teto", () => {
    const jogo1 = Jogo.novo().passaroEstaVoando(true)
    const jogo2: Jogo = Array(1100)
        .fill(0)
        .reduce((acc) => acc.animar(), jogo1)
    expect(jogo2.emColisao).toBe(true)
})

test("Deve reiniciar jogo", () => {
    const jogo1 = Jogo.novo({ pontos: 10, recorde: 20 })
    const jogo2: Jogo = Array(1100)
        .fill(0)
        .reduce((acc) => acc.animar(), jogo1)
    expect(jogo2.emColisao).toBe(true)
    const j3 = jogo2.reiniciar()
    expect(j3.emColisao).toBe(false)
    expect(j3.pontos.valor).toBe(0)
    expect(j3.recorde.valor).toBe(20)
})

test("Deve zerar jogo", () => {
    const jogo1 = Jogo.novo({ pontos: 10, recorde: 20 })
    const jogo2 = jogo1.zerar()
    expect(jogo2.emColisao).toBe(false)
    expect(jogo2.pontos.valor).toBe(0)
    expect(jogo2.recorde.valor).toBe(0)
})

test("Deve incrementar um ponto ao cruzar um obstáculo", () => {
    const jogo1 = Jogo.novo({
        nivel: Nivel.FACIL,
        passaro: { altitude: 0.6, largura: 0.04, altura: 0.06 },
        obstaculos: {
            nivel: Nivel.FACIL,
            espaco: EspacoObstaculo.NORMAL,
            itens: [
                {
                    nivel: Nivel.FACIL,
                    posicao: 0.5,
                    inferior: 0.3,
                    superior: 0.3,
                    largura: 0.1,
                },
            ],
        },
    })
    
    expect(jogo1.pontos.valor).toBe(0)

    const jogo2: Jogo = Array(1000)
        .fill(0)
        .reduce((acc) => acc.animar(), jogo1)
    expect(jogo2.emColisao).toBe(false)
    expect(jogo2.pontos.valor).toBe(1)
})