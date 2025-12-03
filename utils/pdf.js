import PDFDocument from "pdfkit";

export const createVoucherPDF = ({ customer, order_id }) => {
  return new Promise((resolve) => {
    const doc = new PDFDocument();
    const chunks = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));

    doc.fontSize(28).text("Gift Voucher", { align: "center" });
    doc.moveDown();

    doc.fontSize(16).text(`Order ID: ${order_id}`);
    doc.text(`Customer: ${customer}`);
    doc.moveDown();
    doc.text("Thank you for your purchase!");

    doc.end();
  });
};
