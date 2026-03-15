class Peliharaan { // parent class/object
    constructor(name, warna, age) {
        console.log('constructor peliharaan');
        this.name = name;
        this.warna = warna;
        this.age = age;
    }
    makan() {
        return `${this.name} sedang makan`;
    }
}
class Kucing extends Peliharaan { // child class/object
    constructor(name, warna, age, lives) {
        console.log('constructor kucing');
        super(name, warna, age);
        this.lives = lives;
    }
    meong() {
        return `${this.name} sedang meong`;
    }
}

class Anjing extends Peliharaan { // child class/object
    gonggong() {
        return `${this.name} sedang gonggong`;
    }
}

