function human(name, surname, age, email){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
}

let Oleg = new human ("Oleg", "Kalka", 20, "kalkao770@gmail.com");
let Vitalik = new human ("Vitalik", "Vitalikov", 18, "vitalik770@gmail.com");
let Yura = new human ("Yura", "Ivanov", 19, "yura770@gmail.com");
let Viktoria = new human ("Viktoria", "Petrova", 17, "vika770@gmail.com");
let Marina = new human ("Marina", "Savchik", 21, "marina770@gmail.com");

let people = [Oleg, Vitalik, Yura, Viktoria, Marina];

for (let i = 0; i < people.length; i++) {
    document.write(people[i].name + " | " + people[i].surname + " | " + people[i].age + " | " + people[i].email + "<br />");
}

people.sort(function(a,b){
    return a.age - b.age;
})
console.log(people);