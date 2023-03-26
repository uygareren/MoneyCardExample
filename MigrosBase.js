class MigrosBase{

    discountRate = 30;

    /*products[
        price:10,
        productName : "Süt"
    ]
    */

    constructor(name, surname, isHaveCArd, products){
        this.name = name;
        this.surname = surname;
        this.isHaveCArd = isHaveCArd;
        this.products = products
    }

    calculate(){

        let payAmount = 0;

        if(this.checkProducts(this.products)){

            if(this.isHaveCArd){
                this.products.forEach(product => {
                    payAmount += (product.price * ((100 - this.discountRate)/100))
                });
            } 
        }else{
            this.products.forEach(product => {
                payAmount += product.price;
            });
            
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