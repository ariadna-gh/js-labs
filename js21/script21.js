class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Human {
    constructor(name, age, studentId) { 
        super(name, age);
        this.studentId = studentId;
    }
}   
class Teacher extends Human {
    constructor(name, age, subject) { 
        super(name, age);
        this.subject = subject;
    }
}
const student = new Student("Student", 20, "101");
const teacher = new Teacher("Teacher", 37, "Programming");

console.log(student);
console.log(teacher);


