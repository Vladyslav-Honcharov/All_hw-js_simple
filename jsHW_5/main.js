//NEWUSER
function createNewUser() {
  let firstName = prompt("Your first name?");
  let lastName = prompt("Your last name?");

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
  };
  return newUser;
}

let user = createNewUser();

console.log(user);
console.log(user.getLogin());

// let user = {
//   firstName: firstName,
//   lastName: lastName,
//   createUser: function createNewUser() {
//     this.firstName = prompt("Enter your first name: ");
//     this.lastName = prompt("Enter your last name: ");
//     return `${this.firstName} ${this.lastName}`;
//   },
//   getLogin: function () {
//     return `${this.firstName[0]}+${this.lastName}`.toLowerCase();
//   },
//   setFirstName: function () {
//     this.firstName = prompt("Set your first name: ");
//   },
//   setLastName: function () {
//     this.lastName = prompt("Set your last name: ");
//   },
//   createNewUser();
// };
