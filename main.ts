class School {
    name: string;
    student: Student[]=[];
    teachers: Teacher[]=[];
    addStudent(stdObj: Student){
        this.student.push(stdObj);
    }
    addTeacher(tchObj: Teacher){
        this.teachers.push(tchObj);
    }
    constructor(name: string){
        this.name = name;
    }
}

class Student{
    name : string;
    age : number;
    schoolName : string;
    constructor(name: string, age: number, schoolName: string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}

class Teacher{
    name : string;
    age : number;
    schoolName : string;
    constructor(name: string, age: number, schoolName: string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}

// School
let school1 = new School ("Happy Home")
let school2 = new School (" Karachi Grammar")
let school3 = new School ("The Froebels")

// Students
let s1 = new Student ("Ahmad", 13, school1.name)
let s2 = new Student ("Zara", 14, school2.name)
let s3 = new Student ("Fahad", 15, school3.name)

// Teachers
let t1 = new Teacher ("Faryal", 25, school1.name)
let t2 = new Teacher ("Sana", 28, school2.name)
let t3 = new Teacher (" Hina", 30, school3.name)


school1.addStudent(s1)
school2.addStudent(s2)
school3.addStudent(s3)

school1.addTeacher(t1)
school2.addTeacher(t2)
school3.addTeacher(t3)

console.log(school1)
console.log(school2)
console.log(school3)

// console.log(s1)
// console.log(s2)
// console.log(s3)

// console.log(t1)
// console.log(t2)
// console.log(t3)