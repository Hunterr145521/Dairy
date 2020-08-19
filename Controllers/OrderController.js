const Order = require('../Models/checkoutModel');


exports.saveOrder = (req,res) => {
    console.log(req.body);
    Order.create(req.body, (err) =>{
        if(err){
            console.log(err);
            res.send("Error in Placing order")
        }else{
            res.send("Order Placed");
        }
    })


};

exports.orderList = (req,res) => {
    Order.find((err,success) =>{
        if(err){
            console.log(err);
            return res.status(404).json({
                error: err
            })
        }
        res.json(success);

    })
}


exports.spOrder = (req,res) => {
    console.log(req.params.id);
    let id = req.params.id;
    Order.find({"PhoneNumber": id},(err,success) =>{
        if (err){
            console.log("Finding Error : ", err);
            return res.status(404).json({
                error:err
            });
        }
        res.json(success);
    } )

}
