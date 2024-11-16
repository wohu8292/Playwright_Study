const { CartPage } = require("../pageObjects/CartPage");
const { LoginPage } = require("../pageObjects/LoginPage");
const { OrdersHistoryPage } = require("../pageObjects/OrderHistoryPage");

class POManager{
    constructor(page){
        this.page=page;
        this.cartpage=new CartPage(page)
        this.loginpage=new LoginPage(page)
        this.orderhistorypage=new OrdersHistoryPage(page)
    }

    getcartpage(){
        return this.cartpage;
    }
}