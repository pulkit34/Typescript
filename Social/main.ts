class Facebook{

user_name:string;
age:number;
private email :string;
public no_of_friends:number;
requests?:number;
messages?:number;

constructor(user_name:string,age:number,email:string,no_of_friends:number,requests?:number,messages?:number){

    this.user_name=user_name;
    this.age=age;
    this.no_of_friends=no_of_friends;
    this.email=email;
    this.requests=requests;
    this.messages=messages;

}
display=()=>{
console.log("WELCOME USER!")
console.log("Name= "+ this.user_name);
console.log("Age= " + this.age);
console.log("Email= "+ this.email);
console.log("Friends= " + this.no_of_friends);
if(this.requests==undefined){
    console.log("No New Requests")
}
else{
    console.log("Friend Request="+ this.requests);
}
if(this.messages==undefined){
console.log("No New Messages");
}
else{
    console.log("Messages= " + this.messages);
}
}
}

let USER1 =new Facebook("Adam Smith",32,"adams45@gmail.com",245,5,7);
let USER2 =new Facebook("Sophia McClarke",15,"sophia@gmail.com",37);
let USER3 =new Facebook("Sam Winchester",32,"sammy@gmail.com",1245,4);
USER1.display();
USER2.display();
USER3.display();

