import { Nivel } from "../../src/obstaculo/Nivel"
import Obstaculo from "../../src/obstaculo/Obstaculo"

test("Deve criar um obstaculo", () => {
    const obstaculo = Obstaculo.novo({nivel: Nivel.FACIL, posicao: 0.5});
    expect(obstaculo.nivel).toBe(Nivel.FACIL);
});

test("Deve diminuir o vão para os níveis mais difíceis", () => {
    const obstaculo1 = Obstaculo.novo({ nivel: Nivel.FACIL, posicao: 0.5 })
    const obstaculo2 = Obstaculo.novo({ nivel: Nivel.MEDIO, posicao: 0.5 })
    const obstaculo3 = Obstaculo.novo({ nivel: Nivel.DIFICIL, posicao: 0.5 })
    const obstaculo4 = Obstaculo.novo({ nivel: Nivel.JEDI, posicao: 0.5 })
    expect(obstaculo1.vao.valor).toBeGreaterThan(obstaculo2.vao.valor)
    expect(obstaculo2.vao.valor).toBeGreaterThan(obstaculo3.vao.valor)
    expect(obstaculo3.vao.valor).toBeGreaterThan(obstaculo4.vao.valor)
});

test("Deve animar obstaculo diminuindo a posição", () => {
    const obstaculo1 = Obstaculo.novo({ nivel: Nivel.FACIL, posicao: 0.5 })
    const obstaculo2 = obstaculo1.animar()
    expect(obstaculo2.posicao.valor).toBeLessThan(obstaculo1.posicao.valor)
});

test("Deve gerar erro quando não informar a posição", () => {
    expect(() => Obstaculo.novo()).toThrow("O valor de posição é obrigatório")
});

test("Deve novo erro ao usar dados incompatíveis", () => {
    const propsIncompativeis = {
        inferior: 0.1,
        superior: 0.1,
        nivel: Nivel.JEDI,
        posicao: 0.5,
        largura: 0.1,
    }

    expect(() => Obstaculo.novo(propsIncompativeis)).toThrow(
        "O vão entre os obstaculos deve ser de 15%",
    )
});