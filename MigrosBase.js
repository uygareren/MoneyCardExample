class MigrosBase{

    discountRate = 30;

    /*products[
        price:10,
        productName : "Süt"
    ]
    */

    constructor(name, surname, isHaveCard, products){
        this.name = name;
        this.surname = surname;
        this.isHaveCard = isHaveCard;
        this.products = products
    }

    calculate(){

        let payAmount = 0;

        if(this.checkProducts(this.products)){

            if(this.isHaveCard){
                this.products.forEach(product => {
                    payAmount += (product.price * ((100 - this.discountRate)/100))
                });
            }else{
                this.products.forEach(product => {
                    payAmount += product.price
                });

            }
        }else{
            alert("Basket can not be empty!")
            
        }

        return payAmount;

    }

    checkProducts(products){

        if(products == null && products.length <= 0){
            return false;
        }

        return true;

    }
}