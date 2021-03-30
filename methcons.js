function person(name, age) {
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}

function bornYear() {
    return 2000 - this.age;
}

var s1 = new person("veera", 23);
console.log(s1.yearOfBirth());