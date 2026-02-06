export {};

// permite declarar um tipo como valor específico
let number: 12

// number = 13  output: type 13 is not assignable to type 12


// pode ser (e é muito) utilizado com union types
let status: "enabled" | "disabled" | "suspended"