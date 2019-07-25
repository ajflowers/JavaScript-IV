// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`);
    }
}
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log (`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log (`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;        
    }
    listsSubjects() {
            this.favSubjects.forEach(function(subject) {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);    
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}. @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// ===== templates =====
/*

const ******** = new Student({
    name: ,
    age: ,
    location: ,
    previousBackground: ,
    className: ,
    favSubjects: []    
});

const ******** = new Instructor({
    name: ,
    age: ,
    location: ,
    speciality: ,
    favLanguage: ,
    catchPhrase:
});

const ******** = new ProjectManager({
    name: ,
    age: ,
    location: ,
    speciality: ,
    favLanguage: ,
    catchPhrase: ,
    gradClassName: ,
    favInstructor:
});


*/

const ang = new Student({
    name: "Angela",
    age: 35,
    location: "Pittsburgh",
    previousBackground: "SharePoint janitor",
    className: "WEB22",
    favSubjects: ["JavaScript", "CSS"]    
});
ang.speak();

const bob = new Student({
    name: "Bob",
    age: 28,
    location: "Peoria, IL",
    previousBackground: "chef",
    className: "WEB20",
    favSubjects: ["Javascript", "SQL", "C"]    
})
bob.listsSubjects();

const carol = new Student({
    name: "Carol",
    age: 44,
    location: "Chicago",
    previousBackground: "loan officer",
    className: "UX Design",
    favSubjects: ["CSS", "design", "measuring pixels with a ruler"]    
});

ang.PRAssignment("JavaScript IV");
bob.sprintChallenge("Node");

const dave = new Instructor({
    name: "Dave",
    age: 38,
    location: "San Francisco",
    speciality: "SQL",
    favLanguage: "Python",
    catchPhrase: "That is all, and that's enough.",
});

const emma = new Instructor({
    name: "Emma",
    age: "33",
    location: "Seattle",
    speciality: "mobile design",
    favLanguage: "JavaScript",
    catchPhrase: "Of course, that's just my opinion",
});

console.log(JSON.stringify(dave));
dave.demo("CSS");
emma.grade(ang, "JavaScript IV");


const fred = new ProjectManager({
    name: "Fred",
    age: 40,
    location: "Boston",
    speciality: "yelling at everyone to get their Airtable in",
    favLanguage: "C++",
    catchPhrase: "I know you are, but what am I?",
    gradClassName: "WEB19",
    favInstructor: dave
});

const ginger = new ProjectManager({
    name: "Ginger",
    age: 37,
    location: "Milwaukee",
    speciality: "monitoring Zoom to be sure all the cameras are on",
    favLanguage: "JavaScript",
    catchPhrase: "",
    gradClassName: "WEB20",
    favInstructor: emma
});

fred.favInstructor.speak();
fred.standUp();
fred.debugsCode(bob);
