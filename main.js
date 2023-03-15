// Stworz w HTML 3 przyciski i pusty paragraf, pobierz je w JS. Stworz konstruktor który bedzie przyjmował dwa parametry(nazwe posilku, cene posilku), na bazie konstruktora stworz 3 nowe obiekty. W prototypie konstruktora stworz metode ktora bedzie logowala zdanie - "nazwa jedzonka" kosztuje "cena jedzonka". Nadaj lisenery na przyciski. Jesli w konsoli bedzie undefined i nie bedziesz wiedzial jak sobie z tym poradzic - problemem bedzie this, ale nie marnuj na to zbyt wiele czasu.

const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const p = document.querySelector('.p')




function Food(name, price) {
    this.name = name
    this.price = price
}

Food.prototype.showInfo = function () {
    console.log(`${this.name} kosztuje ${this.price}zł.`);
}

const meal = new Food('Schabowy', 34)
const meal2 = new Food('Pierogi', 24)
const meal3 = new Food('Frytki', 14)

btn1.addEventListener('click', () => meal.showInfo())
btn2.addEventListener('click', () => meal2.showInfo())
btn3.addEventListener('click', () => meal3.showInfo())

qpejqpefpq/a//
///asdasasf
//wetkueqf
//afas

///asfsa ///afagv

//jhsuwodua 
