interface User {
    name: string;
    age: number;
    role ?: string;
}

const greetUser = async (user: User): Promise<string> => {
    if(user.role) {
        return `Hello ${user.name}, you are of age ${user.age} and your role is ${user.role}`;
    }
    return `Hello ${user.name}, you are of age ${user.age}`;
}

const main = async (): Promise<void> => {
    const user: User = { name: "Satish", age: 22, role: "SDET-1" };
    const message = await greetUser(user);
    console.log(message);
}

main();