let message =
`
Welcome to the Migros.
Do you have Money Card?
1- Yes
2- No
`

const products = [
    {
        productName : "Milk",
        price : 15
    }, 
    {
        productName : "Bread",
        price : 5
    }, 
    {
        productName : "Toys",
        price : 300
    }

]


let isHasCard = prompt(message)
var result = false;

var name, surname;

if(isHasCard == 1){
    result = true;

    name = prompt("Enter your name")
    name = name.toUpperCase();

    surname = prompt("Enter your surname")
    surname = surname.toUpperCase();

    const musteri = new Musteri(name, surname, result,products)

    let calculateMethod = musteri.calculate();

    alert(`Customer infos: ${name} ${surname} and amount of paid ${calculateMethod}`)

}else{

    name = prompt("Enter your name")
    name = name.toUpperCase();

    surname = prompt("Enter your surname")
    surname = surname.toUpperCase();

    const musteri = new Musteri(name, surname, result,products)

    let calculateMethod = musteri.calculate();

    alert(`Customer infos: ${name} ${surname} and amount of paid ${calculateMethod}`)

}

