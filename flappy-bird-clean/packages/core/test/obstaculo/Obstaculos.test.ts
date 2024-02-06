import { EspacoObstaculo } from "../../src/obstaculo/EspacoObstaculo";
import { Nivel } from "../../src/obstaculo/Nivel";
import Obstaculos from "../../src/obstaculo/Obstaculos";

test("Deve criar obstaculos", () => {
    const obstaculos = Obstaculos.novo();
    expect(obstaculos.itens.length).toBe(5);
    expect(obstaculos.nivel).toBe(Nivel.MEDIO);
    expect(obstaculos.espaco).toBe(EspacoObstaculo.NORMAL);
});

test("Deve animar os obstaculos diminuindo as posições", () => {
    const obstaculo1 = Obstaculos.novo();
    const obstaculo2 = obstaculo1.animar();

    expect(obstaculo2.itens[0]!.posicao.valor).toBeLessThan(obstaculo1.itens[0]!.posicao.valor);
    expect(obstaculo2.itens[1]!.posicao.valor).toBeLessThan(obstaculo1.itens[1]!.posicao.valor);
    expect(obstaculo2.itens[2]!.posicao.valor).toBeLessThan(obstaculo1.itens[2]!.posicao.valor);
    expect(obstaculo2.itens[3]!.posicao.valor).toBeLessThan(obstaculo1.itens[3]!.posicao.valor);
    expect(obstaculo2.itens[4]!.posicao.valor).toBeLessThan(obstaculo1.itens[4]!.posicao.valor);
});

test("Deve animar os obstaculos até primeiro mudar para última posição", () => {
    const obstaculo1 = Obstaculos.novo();
    const obstaculo2 = Array(1100).fill(0).reduce((acc) => acc.animar(), obstaculo1);
    const maiorPosicao = Math.max(...obstaculo2.itens.map((i:any) => i.posicao.valor));

    expect(obstaculo2.itens[0]!.posicao.valor).toBe(maiorPosicao);
})