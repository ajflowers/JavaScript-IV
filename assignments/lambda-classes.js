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
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    tests(student) {
        if (Math.random() < 0.6) {
            let points = Math.floor(Math.random() * 4 + 2);
            student.grade += points;
            console.log(`${this.name} adds ${points} points to ${student.name}'s grade`);
        } else {
            let points = Math.floor(Math.random() * 3 + 1);
            if (points < student.grade) {
                student.grade -= points;
                console.log(`Oh noes! ${this.name} deducts ${points} points from ${student.name}'s grade`);
            } else {
                student.grade = 0;
                console.log(`Oh geez this is bad, this is so bad, ${student.name} just screwed up so hard that ${this.name} said "go start everything all over!"`)
            }
                
        }
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;        
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
    graduate() {
        if (this.grade > 70) {
            console.log(this.name + " is ready to graduate Lambda School!");
        } else {
            console.log(`${this.name} isn't quite ready to graduate. Only ${71 - this.grade} points to go!`);

        }
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
    favSubjects: ["JavaScript", "CSS"],
    grade: 50    
});
ang.speak();

const bob = new Student({
    name: "Bob",
    age: 28,
    location: "Peoria, IL",
    previousBackground: "chef",
    className: "WEB20",
    favSubjects: ["Javascript", "SQL", "C"],
    grade: 3
})
bob.listsSubjects();

const carol = new Student({
    name: "Carol",
    age: 44,
    location: "Chicago",
    previousBackground: "loan officer",
    className: "UX Design",
    favSubjects: ["CSS", "design", "measuring pixels with a ruler"],
    grade: 75    
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
fred.debugsCode(bob, "a big mess of prototype declarations");

bob.graduate();
carol.graduate();

ginger.tests(bob);

fred.tests(ang);
ginger.tests(ang);
dave.tests(ang);
emma.tests(ang);
ang.graduate();
fred.tests(ang);
fred.tests(ang);
fred.tests(ang);
fred.tests(ang);
ang.graduate();
fred.tests(ang);
fred.tests(ang);
fred.tests(ang);
ang.graduate();