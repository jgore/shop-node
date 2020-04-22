const fs = require("fs");
const PDFDocument = require("pdfkit");

function createInvoice(invoice, path) {
    let doc = new PDFDocument({size: "A4", margin: 50});
    doc.text('Polish')
    doc.registerFont('font', 'font/AbhayaLibre-Regular.ttf');
    doc.registerFont('nerwus', 'font/nerwus.ttf')

    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    generateFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream(path));
}

function generateCustomerInformation(doc, invoice) {
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Faktura", 50, 160);

    generateHr(doc, 185);

    const customerInformationTop = 200;

    let date = new Date()
    date.setDate(date.getDate()+10)

    doc
        .fontSize(10)
        .font("font").text("Nr faktury:", 50, customerInformationTop)
        .font("font").text(invoice.invoice_nr, 150, customerInformationTop)
        .text("Data wystawienia:", 50, customerInformationTop + 15)
        .text(formatDate(new Date()), 150, customerInformationTop + 15)
        .text("Termin platności: ", 50, customerInformationTop + 30)
        .text(formatDate(date), 150, customerInformationTop + 30)
        .font("font").text(invoice.invoice_nr, 150, customerInformationTop)
        .font("font").text(invoice.shipping.name, 300, customerInformationTop)
        .font("font").text(invoice.shipping.address, 300, customerInformationTop + 15)
        .font("font").text(invoice.shipping.city, 300, customerInformationTop + 30)
        .moveDown();

    generateHr(doc, 252);
}

function generateInvoiceTable(doc, invoice) {
    let i;
    const invoiceTableTop = 330;

    doc.font("font");
    generateTableRow(
        doc,
        invoiceTableTop,
        "Przedmiot",
        "Opis",
        "Cena",
        "ilość",
        "vat",
        "W sumie"
    );
    generateHr(doc, invoiceTableTop + 20);
    doc.font("font");

    for (i = 0; i < invoice.items.length; i++) {
        const item = invoice.items[i];
        const position = invoiceTableTop + (i + 1) * 30;
        generateTableRow(
            doc,
            position,
            item.item,
            item.description,
            formatCurrency(item.unitCost),
            item.quantity,
            formatCurrency(item.unitCost * 1.23),
            formatCurrency(item.amount * 1.23 * item.unitCost)
        );

        generateHr(doc, position + 20);
    }
    let suma = 0
    invoice.items.map(item => {
        suma = suma + (item.quantity * item.unitCost)
    })

    let sumaVat = suma * 1.23

    const subtotalPosition = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
        doc,
        subtotalPosition+15,
        "",
        "",
        "",
        "",
        "",
        "Suma : " + formatCurrency(suma)
    );

    generateTableRow(
        doc,
        subtotalPosition+30,
        "",
        "",
        "",
        "",
        "",
        "Suma z VAT : " + formatCurrency(sumaVat)
    );
    doc.fontSize(14);
    doc.text("Typ płatności : przelew ", 50, subtotalPosition+100)
    doc.text("Nr konta : 93 1050 1575 1000 0092 0650 0580", 50, subtotalPosition+115)
}

function generateTableRow(
    doc,
    y,
    item,
    description,
    unitCost,
    quantity,
    vat,
    lineTotal
) {
    doc
        .fontSize(10)
        .text(item, 50, y)
        .text(unitCost, 200, y, {width: 90, align: "right"})
        .text(quantity, 270, y, {width: 90, align: "right"})
        .text(vat, 360, y, {width: 90, align: "right"})
        .text(lineTotal, 0, y, {align: "right"});
}

function generateHeader(doc) {
    doc
        .image("goreit_logo.jpg", 50, 45, {width: 50})
        .fillColor("#444444")
        .fontSize(20)
        .font('font').text("GoreIT Paweł Szczepkowski", 110, 57)
        .fontSize(10)
        .font('font').text("GoreIT Paweł Szczepkowski", 200, 35, {align: "right"})
        .font('font').text("ul. Brylantowa 16/11", 200, 50, {align: "right"})
        .font('font').text("52-214 Wrocław", 300, 65, {align: "right"})
        .moveDown();
}

function generateFooter(doc) {
    doc
        .fontSize(12)
        .font('nerwus')
        .text(
            "All rights reserved by GoreIT",
            50,
            750,
            {align: "center", width: 500}
        );
}

function generateHr(doc, y) {
    doc
        .strokeColor("#aaaaaa")
        .lineWidth(1)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke();
}

function formatCurrency(cents) {
    return (cents).toFixed(2) + " PLN";
}

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return year + "/" + month + "/" + day;
}

module.exports = {
    createInvoice
};
