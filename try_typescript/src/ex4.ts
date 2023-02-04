type MyInfo2 = { name: string, age?: number } ;
const noAgeInfo: MyInfo2 = { name: "No Age Name" };
console.log(noAgeInfo);

type Profile2 = { name:String, age: number, like?:String };
const newProfile2: Profile2 = { name: "My Name", age: 21};
console.log(newProfile2);