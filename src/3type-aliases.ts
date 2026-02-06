export {};

// type aliases permitem criar abstrações reutilizáveis de tipos, promovendo modularidade, legibilidade e manutenção do código.

type User = {
    id: number;
    name: string;
    status: boolean;
}

let i = 0;

let user1: User = {
    id: i+= 1,
    name: "John",
    status: true
}

let user2: User = {
    id: i+= 1,
    name: "John",
    status: false
}

console.log(user1, user2)

