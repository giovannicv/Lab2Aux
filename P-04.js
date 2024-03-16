function createPerson(name, ci, email) {
    return { name: name, ci: ci, email: email };
}
var person = createPerson("Carlos Calancha", "123456789", "carlos@hotmail.com");
console.log(person);
