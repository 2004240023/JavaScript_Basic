let my_class = {
age:53
,size:160,
print_size(){
console.log(this.size);
},
add_age(x){
this.age +=x
}
}
my_class.add_age(4)
my_class
my_class.age;
my_class.print_size
my_class.print_size()
my_class.age;
my_class.new_fn = ()=>{

this.print_size();
console.log(this.age);}

my_class = {
	age: 53,
	size: 160,
	print_size(){
		console.log(this.size);
	},
	add_age(x){
		this.age += x
	}
	,subtrac_age(y){
		this.age -= y
	}
}

my_class.subtrac_age(100);
my_class.age;
