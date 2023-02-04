import{uname, age, authenticity, arrays, Student, 
calculate_fn1, calculate_arrow1, message_data, arrry_add,} from "./exercise.js";

console.log(`uname: ${uname}`);
console.log(`age: ${age}`);
console.log(`authenticity: ${authenticity}`);

for ( const array of arrays ) {
    console.log("array:", array);
}

let YouProfile: Student = {
    name: "YOUNAME",
    age: 30,
    email: "YOUEMAIL@edu.oca.ac.jp",
    classroom: false,
};
console.log(YouProfile);
console.log(calculate_fn1(100, 50));
console.log(calculate_arrow1(200, 100));
console.log(message_data<String>("Hello World!"));
for (const greeting of arrry_add<string>(["good morning", "Hello", "Good evening"], "good night")) {
    console.log(greeting);
}