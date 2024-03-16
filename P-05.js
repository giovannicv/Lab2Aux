const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
];

function esEmailValido(email) {
    
    const regex = /^[^@]+@[^@]+\.[a-zA-Z]{3,}$/;
    return regex.test(email);
}

const emailsValidos = emailList.filter(esEmailValido);

console.log(emailsValidos);

