import Percentual from "../../src/shared/Percentual";

test("Deve criar um percentual entre 0 e 1", () => {
    const percentual = Percentual.novo(0.25);
    expect(percentual.valor).toBe(0.25);
});

test("Deve criar um percentual entre 0 e 2", () => {
    const percentual1 = Percentual.novo(1.25, "percentual", 0, 2);
    const percentual2 = percentual1.clone({atributo: "valor", max: 3});

    expect(percentual2.valor).toBe(1.25);
    expect(percentual2.atributo).toBe("valor");
    expect(percentual2.min).toBe(0);
    expect(percentual2.max).toBe(3);
});

test("Deve clonar percentual", () => {
    const percentual1 = Percentual.novo(1.25, "percentual", 0, 2)
    const percentual2 = percentual1.clone({ atributo: "valor", max: 3 })
    expect(percentual2.valor).toBe(1.25)
    expect(percentual2.atributo).toBe("valor")
    expect(percentual2.min).toBe(0)
    expect(percentual2.max).toBe(3)
})

test("Deve lançar erro ao criar percentual maior que 1", () => {
    expect(() => Percentual.novo(1.1)).toThrow(
        "O valor de percentual deve ser entre 0 e 1",
    )
});

test("Deve lançar erro ao criar percentual menor que 0", () => {
    expect(() => Percentual.novo(-0.1)).toThrow(
        "O valor de percentual deve ser entre 0 e 1",
    )
});

test("Deve lançar erro ao criar percentual com valor nul", () => {
    expect(() => Percentual.novo(null as any, "valor")).toThrow(
        "O valor de valor é obrigatório",
    )
});