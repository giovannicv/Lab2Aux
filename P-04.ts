function createPerson( name: string, ci: string, email: string ): { name: string, ci: string, email: string } {
    return { name, ci, email };
}

const person = createPerson("Carlos Calancha", "123456789", "carlos@hotmail.com");
console.log(person);