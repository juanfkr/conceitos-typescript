// utilizado quando você sabe mais sobre o tipo do elemento que o compilador do TS
let input = document.querySelector("input") as HTMLInputElement

// ou

let input2 = <HTMLInputElement>document.querySelector("input")
// a sintaxe acima não funcionará em arquivos .tsx

// o compilador apenas trata a variável como HTMLInputElement, mas não transforma seu tipo original

