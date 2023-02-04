type MyInfo3 = { readonly name: string, age?: number } ;
const readOnlyName: MyInfo3 = { name: "My Name" };
	readOnlyName.age = 25;
	//readOnlyName.name = "My New Name";

type Profile3 = { name:String, readonly age: number, like?:String };
const readOnlyProfile: Profile3 = { name: "My Name", age: 21};
    readOnlyProfile.like = "eating";
    //readOnlyProfile.age = 20
    // src/ex5.ts:9:21 - error TS2540: Cannot assign to 'age' because it is a read-only property.9
    // readOnlyProfile.age = 20
    // ~~~
    // Found 1 error in src/ex5.ts:9

console.log(readOnlyName);
console.log(readOnlyProfile);