export {};

// permite a combinação de dois type

type user = {
    name: string;
}

type employee = {
    employeeId: number;
}

type userEmployee = user & employee

let user1: userEmployee = {
    name: "juan",
    employeeId: 123
}

console.log(user1)