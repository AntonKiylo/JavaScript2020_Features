class Pet {
  static type = 'animal';
  static #area = 'earth';

  name = 'Tiny';
  #year = 2015;

  static printArea() {
    return Pet.#area;
  }

  age() {
    return new Date().getFullYear() - this.#year;
  }
}

const pet = new Pet;

console.log(Pet.printArea());
console.log(pet.age());