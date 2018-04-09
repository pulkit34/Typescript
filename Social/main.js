var Facebook = /** @class */ (function () {
    function Facebook(user_name, age, email, no_of_friends, requests, messages) {
        var _this = this;
        this.display = function () {
            console.log("WELCOME USER!");
            console.log("Name= " + _this.user_name);
            console.log("Age= " + _this.age);
            console.log("Email= " + _this.email);
            console.log("Friends= " + _this.no_of_friends);
            if (_this.requests == undefined) {
                console.log("No New Requests");
            }
            else {
                console.log("Friend Request=" + _this.requests);
            }
            if (_this.messages == undefined) {
                console.log("No New Messages");
            }
            else {
                console.log("Messages= " + _this.messages);
            }
        };
        this.user_name = user_name;
        this.age = age;
        this.no_of_friends = no_of_friends;
        this.email = email;
        this.requests = requests;
        this.messages = messages;
    }
    return Facebook;
}());
var USER1 = new Facebook("Adam Smith", 32, "adams45@gmail.com", 245, 5, 7);
var USER2 = new Facebook("Sophia McClarke", 15, "sophia@gmail.com", 37);
var USER3 = new Facebook("Sam Winchester", 32, "sammy@gmail.com", 1245, 4);
USER1.display();
USER2.display();
USER3.display();
