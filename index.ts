function processarNumerosGrandes() {
    const resultados: number[] = [];

    for (let i = 0; i < 1_000_000; i++) {
        resultados.push(i * 2);
    }

    console.log(`Total de resultados: ${resultados.length}`);
}

processarNumerosGrandes();