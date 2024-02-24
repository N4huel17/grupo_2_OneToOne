const crypto= require('crypto');
const bcryptjs=require('bcryptjs')

function user (name, surname, email, password, role){
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.surname=surname.trim();
    this.email=email.trim();
    this.password= bcryptjs.hashSync(password.trim(),10);
    this.role = role.trim() ;  
}

module.exports = user;