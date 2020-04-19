//Exercise 1 - https://skylab.rocketseat.com.br/api/files/1566499229316.pdf
class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.admin = false;
    }

    isAdmin() {
        return this.admin == true;
    }
}

class Admin extends Usuario {
    constructor(email, password) {
        super(email, password);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true