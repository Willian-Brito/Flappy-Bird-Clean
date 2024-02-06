import Passaro from "../../src/passaro/Passaro";

const props = {
    altura: 0.05,
    largura: 0.05,
    altitude: 0.5,
    peso: 0.002,
}

test("Deve criar um passaro", () => {
    const passaro = new Passaro(props);
    expect(passaro.altura.valor).toBe(0.05);
    expect(passaro.largura.valor).toBe(0.05);
    expect(passaro.altitude.valor).toBe(0.5);
    expect(passaro.peso.valor).toBe(0.002);
    expect(passaro.voando).toBe(false);
});

test("Deve alterar passaro para voar", () => {
    const passaro1 = new Passaro({ ...props, peso: undefined});
    const passaro2 = passaro1.voar();
    expect(passaro1.voando).toBe(false);
    expect(passaro2.voando).toBe(true);
});

test("Deve alterar passaro para parar de voar", () => {
    const passaro1 = new Passaro({ ...props, voando: true })
    const passaro2 = passaro1.pararDeVoar()
    expect(passaro1.voando).toBe(true)
    expect(passaro2.voando).toBe(false)
});

test("Deve animar passaro diminuindo a altitude", () => {
    const passaro1 = new Passaro(props)
    const passaro2 = passaro1.animar()
    expect(passaro2.altitude.valor).toBeLessThan(passaro1.altitude.valor)
});

test("Deve animar passaro aumentando a altitude", () => {
    const passaro1 = new Passaro({ ...props, voando: true })
    const passaro2 = passaro1.animar()
    expect(passaro2.altitude.valor).toBeGreaterThan(passaro1.altitude.valor)
});

test("Deve gerar erro se altitude maior que 1", () => {
    expect(() => new Passaro({ ...props, altitude: 1.1 })).toThrow(
        "O valor de altitude deve ser entre 0 e 1",
    )
});

test("Deve gerar erro se altura maior que 1", () => {
    expect(() => new Passaro({ ...props, altura: 1.1 })).toThrow(
        "O valor de altura deve ser entre 0.01 e 1",
    )
});

test("Deve gerar erro se altura zerada", () => {
    expect(() => new Passaro({ ...props, altura: 0 })).toThrow(
        "O valor de altura deve ser entre 0.01 e 1",
    )
});