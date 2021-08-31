class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    login() {
        console.log(this.name + ' is logged in');
    }

    increment() {
        this.score++;
    }
}

const user1 = new UserCreator('chan', 90);
user1.increment();

console.log(user1.__proto__);