//abstraction is a way to reduce the complicity and allow effective design and implementation , abstraction in js to hight lighting the object to essential future to user it can enhance to readability of the code and avoide dulpicate it provide only important detail to user and also improve of an application


class Person {
    constructor() {
      if (this.constructor == Person) {
        throw new Error("Your Error Message...");
          }
      }
      info() {
          throw new Error(" Added abstract Method has no implementation");
      }
}

class Teacher extends Person {
    info() {
        // super.info()
        console.log("I am a Teacher");
    }
}
var teacher1 = new Teacher();
teacher1.info();