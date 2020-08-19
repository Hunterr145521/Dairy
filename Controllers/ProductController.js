const Product = require('../Models/ProductModel')
const Raw = require('../Models/RawModel')

exports.saveProduct = (req,res) => {
    console.log(req.body);
    const {Name, Description, Id, Price, Image} = req.body;

    let newProduct = new Product({Name,Description,Id,Price, Image})

    newProduct.save((err,success) => {
        if(err){
            console.log("Error Occured", err);
            return res.status(400).json({
                error: err
            });
        }
        res.json({
            message: "Successfully Added"
        })
    })

};

exports.saveProductRaw = (req,res) => {
    console.log(req.body);
    const {Name, Description, Id, Price, Image} = req.body;

    let newProduct = new Raw({Name,Description,Id,Price, Image})

    newProduct.save((err,success) => {
        if(err){
            console.log("Error Occured", err);
            return res.status(400).json({
                error: err
            });
        }
        res.json({
            message: "Successfully Added"
        })
    })

};



exports.listAllProduct = (req,res) => {
    Product.find((err,success) => {
        if(err) {
            console.log("Finding Error ", err);
            return res.status(404).json({
                error: err
            });
        }
        res.json(success);
    })
};

exports.listAllProductRaw = (req,res) => {
    Raw.find((err,success) => {
        if(err) {
            console.log("Finding Error ", err);
            return res.status(404).json({
                error: err
            });
        }
        res.json(success);
    })
};


exports.findProduct = (req,res) => {
    let ids = req.params.id;
    console.log(ids);
    Product.find({"Id":ids},(err,success) => {
        if (err){
            console.log("Finding Error : ", err);
            return res.status(404).json({
                error:err
            });
        }
        res.json(success);
    })
}

exports.findProductRaw = (req,res) => {
    let ids = req.params.id;
    console.log(ids);
    Raw.find({"Id":ids},(err,success) => {
        if (err){
            console.log("Finding Error : ", err);
            return res.status(404).json({
                error:err
            });
        }
        res.json(success);
        console.log(success);
    })
}
