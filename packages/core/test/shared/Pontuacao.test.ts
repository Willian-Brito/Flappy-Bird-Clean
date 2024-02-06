import Pontuacao from "../../src/shared/Pontuacao";

test("Deve criar pontuação maior que zero", () => {
    const pontuacao = Pontuacao.nova(2);
    expect(pontuacao.valor).toBe(2);
    expect(pontuacao.atributo).toBe("pontuação");
});

test("Deve criar pontuação zero", () => {
    const pontuacao = Pontuacao.nova(0);
    expect(pontuacao.valor).toBe(0);
});

test("Deve incrementar a pontuação", () => {
    const pontuacao1 = Pontuacao.nova(0);
    const pontuacao2 = pontuacao1.incrementar();
    expect(pontuacao1.valor).toBe(0);
    expect(pontuacao2.valor).toBe(1);
});

test("Deve lançar erro ao criar pontuação nula", () => {
    expect(() => new Pontuacao({})).toThrow("O valor de pontuação é obrigatório",);
});

test("Deve lançar erro ao criar pontuação negativa", () => {
    expect(() => Pontuacao.nova(-1)).toThrow("O valor de pontuação não pode ser negativo",)
});