function createNewUser() {
  let firstName = prompt("Your first name?");
  let lastName = prompt("Your last name?");
  let birtday = prompt("Your birtday in format(dd.mm.yyyy)?");

  let newUser = {
    _firstName: firstName,
    _lastName: lastName,
    set firstName(value) {
      this._firstName = value;
    },
    set lastName(value) {
      this._lastName = value;
    },

    get firstName() {
      return this._firstName;
    },

    get lastName() {
      return this._lastName;
    },

    getLogin: function () {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    },

    getAge: function () {
      let dd = +birtday.substr(0, 2);
      let mm = +birtday.substr(3, 2);
      let yy = +birtday.substr(6, 4);
      let date = new Date(yy, mm, dd);
      let age = new Date() - date;
      return Math.floor(age / 31536000000);
    },
    getPassword: function () {
      let yy = +birtday.substr(6, 4);
      return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + yy;
    },
  };
  return newUser;
}

let user = createNewUser();

console.log(user);
console.log(`Your login: ${user.getLogin()}`);
console.log(`You are: ${user.getAge()} y.o.`);
console.log(`Your password: ${user.getPassword()}`);
