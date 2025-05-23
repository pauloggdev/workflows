function binary_search(array, num) {
    let inicio = 0;
    let fim = array.length - 1;
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        if (array[meio] === num) return meio;
        if (array[meio + 1] < num) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8], 4))



//[1, 2, 3, 4, 5, 6, 7, 8]