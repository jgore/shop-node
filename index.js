const express = require('express');
const mongoose = require('mongoose')
const keys = require("./keys");
const axios = require('axios')

console.log(keys)

const app = express();

app.use(express.urlencoded());
app.use(express.json());

var option = {
    db: {
        numberOfRetries: 5
    },
    server: {
        auto_reconnect: true,
        poolSize: 40,
        socketOptions: {
            connectTimeoutMS: 500
        }
    },
    replSet: {},
    mongos: {}
};
//
// mongoose.connect(keys.mongoURI, option, function (err) {
//     if (err) {
//         console.log(err)
//     }
// })

// require("./routes/productRoutes")(app);
// require("./routes/actionRoutes")(app);

const {createInvoice} = require("./createInvoice.js");

const invoice = {
    shipping: {
        name: "Lideo S.A.",
        address: "Krzemieniecka 140A",
        city: "53-300 Wrocław",
    },
    items: [
        {
            item: "Usługi programistyczne",
            description: "usługi programistyczne - 1 godzina",
            quantity: 168,
            amount: 168,
            unitCost: 120
        },

    ],
    subtotal: 1500,
    invoice_nr: "18/2019"
};

console.log(invoice.items)

app.get("/invoice", async (req, res) => {

    res.download("./invoice.pdf")
})

app.get("/swalapi/getWarehouseDocuments", async (req, res) => {

    let response = [];
    var query = req.query

    if (query.fromDate === undefined) {
        res.status(400).send(new Error('fromDate cannot be null'));
        console.log(400)
        return;
    }

    console.log(query.fromDate)
    console.log(query.toDate)

    response = [
        {
            "documentId": 3580338,
            "formattedNumber": "WZ/83550/2020-A/UR",
            "acceptanceDate": "2020-03-12 19:40:01",
            "packagesQuantity": 3,
            "packages": [
                "U0931360544019",
                "U0931360544020",
                "U0931360544021"
            ],
            "consignmentNote": "U0931360544",
            "consignmentNoteId": 1070348,
            "ckk": 177628,
            "items": [
                {
                    "itemId": 16638051,
                    "ckt": 142617,
                    "name": "Biotaksym, 2 g,prosz.d/sp.roztw.d/wstrz,inf.,1fiol",
                    "batchId": 7591921,
                    "batchNumber": "26010120A",
                    "batchExpiryDate": "2022-01-31",
                    "stockItemId": 5750153,
                    "orderedQuantity": 300,
                    "realizedQuantity": 300,
                    "accepted": true,
                    "EAN": "5909990766802",
                    "GTIN": "05909990766802",
                    "isGTIN": true,
                    "isScanFmd": false,
                    "scanFmdData": []
                }
            ]
        },
        {
            "documentId": 3580341,
            "formattedNumber": "WZ/83553/2020-A/UR",
            "acceptanceDate": "2020-03-12 19:40:38",
            "packagesQuantity": 8,
            "packages": [
                "U0931360544022",
                "U0931360544023",
                "U0931360544024",
                "U0931360544025",
                "U0931360544026",
                "U0931360544027",
                "U0931360544028",
                "U0931360544029"
            ],
            "consignmentNote": "U0931360544",
            "consignmentNoteId": 1070348,
            "ckk": 177628,
            "items": [
                {
                    "itemId": 16638041,
                    "ckt": 12611,
                    "name": "Biotaksym, 1 g,prosz.d/sp.roztw.d/wstrz.,1 fiol",
                    "batchId": 7591919,
                    "batchNumber": "8020120A",
                    "batchExpiryDate": "2022-01-31",
                    "stockItemId": 5750204,
                    "orderedQuantity": 960,
                    "realizedQuantity": 960,
                    "accepted": true,
                    "EAN": "5909990059317",
                    "GTIN": "05909990059317",
                    "isGTIN": true,
                    "isScanFmd": false,
                    "scanFmdData": [
                        {
                            SN: "1234"
                        },
                        {
                            SN: "1234"
                        },
                    ]
                }
            ]
        }
    ];

    // var response = []
    //
    // for(let i=0;i<105;i++)
    // {
    //     response.push({
    //         formattedNumber: "a"+i
    //     })
    // }


    console.log(response);
    res.send(response);
})

app.get("/products", async (req, res) => {

    var query = req.query

    var products = []

    for (let i = 1; i < 100; i += 2) {
        products.push({
            categoryName: "IT",
            title: "product" + i + new Date().getTime(),
            text: " text for product" + i,
            price: 100 + i,
            quantity: 10
        })
    };

    var response = {
        products: products
    }


    console.log(response);
    res.send(response);
})


app.listen(5001, function () {
    console.log("swal-ms is listening on port 5001")
})
