// 1. Creati o functie care primeste ca argument un sir de caractere si verifica daca acest
// sir are cel putin 8 caractere si contine cel putin un caracter special.
function checkStr(str) {
  if (str.length < 8) {
    return "String is to short.";
  }
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (!format.test(str)) {
    return "Special caracters are missing.";
  }
  return "String is corect.";
}
console.log(checkStr("Ella are @#$ "));
console.log(checkStr("Ella are multe jucarii"));
console.log(checkStr("Ella <>"));

// 2. Creati o functie care primeste ca argument o lista de useri si returneaza o lista doar
// cu userii care au date valide (nume si prenume prezent si parola de minim 8
//   caractere care contine cel putin un caracter special).

function userObject(nume, prenume, parola) {
  var user = {
    nume: nume,
    prenume: prenume,
    parola: parola
  };
  return user;
}
var userCorect = userObject("Laura", "Sescu", "01#Password*34");

var userMissingNume = userObject(null, "Sescu", "01Password34");
var userMissingPrenume = userObject("Laura", null, "01Password34");
var userIncorectPassword = userObject("Laura", "Sescu", "0asdaad34");
var userShortPassword = userObject("Laura", "Sescu", "0awd34");

function userFilter(arrUsers) {
  if (!Array.isArray(arrUsers)) {
    return "Is not an array";
  }

  var validUsers = [];
  for (var i = 0; i < arrUsers.length; i++) {
    var userObject = arrUsers[i];
    if (userObject.nume === null) {
      break;
    } else if (userObject.nume.length < 1) {
      break;
    }

    if (userObject.prenume === null) {
      break;
    } else if (userObject.prenume.length < 1) {
      break;
    }

    if (userObject.parola === null) {
      break;
    } else {
      if (userObject.parola.length < 8) {
        break;
      }
      var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

      if (!format.test(userObject.parola)) {
        break;
      }
    }
    validUsers.push(userObject);
  }

  return validUsers;
}

console.log(userFilter([userCorect]));
console.log(userFilter("asd"));
console.log(userFilter([userCorect, userCorect]));
console.log(userFilter([userCorect, userMissingPrenume]));
console.log(userFilter([userCorect, userMissingPrenume, userMissingNume]));
