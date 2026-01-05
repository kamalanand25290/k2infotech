"use client";

//import html2pdf from "html2pdf.js";
import { toWords } from "number-to-words";
import { useState } from "react";

export default function GenerateBill() {
const handleLogout = () => {
  sessionStorage.removeItem("site_auth");
  window.location.reload();
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};    
const [formData, setFormData] = useState({
    invoiceNo: "048",
    invoiceDate: new Date().toISOString().split('T')[0],
    billedByLocation: "Punjab, India",
    licenseNumber:'IRDA/IND/SLA-123899 Valid up to 03-06-2028',
    insuredName: "MR. MANDEEP SINGH",
    regNo: "PB-10-HN-2519",
    policyNo: "5468118100",
    claimNo: "10110361455",
    reportNo: "1",
    billedTo: "Zurich Kotak General Insurance Company Ltd",
    billedToAddressLine1: "SCO NO.668, PAKHOWAL ROAD, 141002, Ludhiana,",
    billedToAddressLine2: "Punjab, India",
    billedToGST: "03AAFCK7016C1Z3",
    billedToPAN: "AAFCK7016C",
    items: [
      { text: 'Professional Charges', rate: 1000, qty: 1, gst: 0 },
      { text: 'Conveyance Expenses for Local Visit', rate: 700, qty: 1, gst: 0 },
      { text: 'Conveyance Expenses for Spot Visit', rate: 1, qty: 1, gst: 0 },
      { text: 'Toll Tax', rate: 100, qty: 1, gst: 0 },
      { text: 'Miscellaneous Charges / Re-inspection', rate: 1, qty: 1, gst: 0 },
    ],
  });


  const handleChange = (e, index = null, key = null) => {
    if (index !== null) {
      const items = [...formData.items];
      items[index][key] = e.target.value;
      setFormData({ ...formData, items });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const generatePDF = async () => {
    const element = document.getElementById("invoice");
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;

     html2pdf()
      .set({
        margin: 10,
        filename: "Surveyor-Bill.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scrollY: 0,
          scrollX: 0,
          windowWidth: document.body.scrollWidth,
          scale: 2.5
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(element)
      .save();
  };

  const totals = formData.items.reduce(
    (acc, item) => {
        const base = item.rate * item.qty;
        const cgst = base * (item.gst / 2) / 100;
        const sgst = base * (item.gst / 2) / 100;

        acc.amount += base;
        acc.cgst += cgst;
        acc.sgst += sgst;
        acc.grandTotal += base + cgst + sgst;

        return acc;
    },
    { amount: 0, cgst: 0, sgst: 0, grandTotal: 0 }
    );

    function getFinancialYear(date = new Date()) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Jan = 1, Dec = 12

      // Financial year starts in April
      if (month >= 4) {
        return `${year}-${String(year + 1).slice(-2)}`;
      } else {
        return `${year - 1}-${String(year).slice(-2)}`;
      }
    }


  return (
    <>
      <style>{`
        body {
      font-family: system-ui, Arial, Helvetica, sans-serif;
      background: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    b, strong{
            font-weight: 500;
    }
            fieldset{    display: flex;
    text-wrap-mode: nowrap;
    padding: 5px;
    align-items: center;
    border: 0px;
    justify-content: space-between;
    gap: 20px;}
h4{
    margin: 10px;
    padding-top: 10px;
    border-top: 1px solid #dedede;}
    .page {
      width: 99%;
      background: #fff;
      margin: 0;
      padding-right: 0;
      box-sizing: border-box;
      color: #000;
    }

    h1 {
      color: #6a35c9;
      margin: 0;
      font-size: 28px;
      font-weight: normal;
    }

    .meta {
      font-size: 14px;
      margin-bottom: 20px;
    }

    .meta div {
      margin-bottom: 4px;
    }

    .boxes {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;
    }

    .box {
      flex: 1;
      background: #f2effb;
      padding: 15px;
      border-radius: 6px;
      font-size: 13px;
    }

    .box h3 {
      margin-top: 0;
      color: #6a35c9;
      font-size: 18px;
      margin-bottom: 0;
      font-weight: normal;
    }

    .main-table-wrapper {
        border-radius: 7px;
        overflow: hidden;
        margin-top: 15px;
        border: 1px solid #f2effb
    }

    table {
      width: 100%;
      border-collapse: collapse;
      
      font-size: 13px;
      line-height: 17px;
    }

    thead {
      background: #6a35c9;
      color: #fff;
    }

    th, td {
      padding: 8px;
      border-bottom: 1px solid #ddd;
      text-align: left;
    }
    .main-table th, .main-table td{
        text-align: center;
    }
    .main-table th:nth-child(2), .main-table td:nth-child(2){
        text-align: left;
    }
    .main-table tbody tr:nth-child(odd) {
        background: #f2effb;
    }

    th {
      font-weight: normal;
    }

    td:last-child,
    th:last-child {
      text-align: right;
      padding-right: 15px;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      font-size: 14px;
      gap: 20px;
      border-bottom: 1px solid #f2effb;
    }

    .summary-right {
      width: 250px;
      padding-right: 10px;
    }

    .summary-right div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .total {
      font-weight: bold;
      border-top: 1px solid #000;
      padding: 8px 0;
      margin: 5px 0 10px;
      border-bottom: 1px solid #000;
    }

    .signature {
      margin-top: 0;
      text-align: right;
      font-size: 14px;
      padding-right: 10px;
    }

    .bank {
      margin-top: 10px;
      font-size: 14px;
    }
    .metaTable {
  width: 60%;
  margin: 7px 0;
}
.metaTable td:last-child, .metaTable th:last-child{
    text-align: left;
}
.metaTable th, .metaTable td {
  border-bottom: 0;
      padding: 5px 7px;
      font-weight: 500;
} 
.metaTable th:first-child, .metaTable td:first-child {
    color: #606060;
    padding-left: 0;
}
    input{
    padding: 5px; margin: 0 0 0 5px;
        width: 50%;
    }
    .item-rates{
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 5px;
    padding-bottom: 5px;
    }
    .item-rates input{ width: 50px; padding: 5px; margin-left: 5px; }
    .editableFields{
    width: calc(100vw - 860px);
    max-height: calc(100vh - 50px);
    overflow: auto;
    background: #fff;
    padding: 20px;
    }
      `}</style>

{/* ================= Editable Fields ================= */}
<div style={{display: 'flex'}}>
      <div className="editableFields">
        <h3>Invoice Inputs</h3>
<h4>Invoice No</h4>
        <fieldset>Invoice No #: <input name="invoiceNo" placeholder="Invoice No"
          value={formData.invoiceNo} onChange={handleChange} /></fieldset>
        <fieldset>Invoice Date: <input type="date" name="invoiceDate" placeholder="Invoice Date"
          value={formData.invoiceDate} onChange={handleChange} /></fieldset>
          <h4>Billed By</h4>
        <fieldset>Location: <input name="billedByLocation" placeholder="Billed By Location"
          value={formData.billedByLocation} onChange={handleChange} /></fieldset>
<h4>Claim Details</h4>
        <fieldset>Insured Name: <input name="insuredName" placeholder="Insured Name"
          onChange={handleChange} value={formData.insuredName}/></fieldset>

        <fieldset>Registration Number: <input name="regNo" placeholder="Registration Number"
          onChange={handleChange} value={formData.regNo}/></fieldset>
        <fieldset>Policy Number: <input name="policyNo" placeholder="Policy Number"
          onChange={handleChange} value={formData.policyNo}/></fieldset>

        <fieldset>Claim Number: <input name="claimNo" placeholder="Claim Number"
          onChange={handleChange} value={formData.claimNo}/></fieldset>

        <fieldset>Report No.: <input name="reportNo" placeholder="Report No"
          onChange={handleChange} value={formData.reportNo}/></fieldset>
       <h4>Billed To Details</h4>
<fieldset>Name (or Company name):
        <input name="billedTo" placeholder="Billed To Name"
          onChange={handleChange} value={formData.billedTo}/></fieldset>
<fieldset>Address Line 1: 
        <input name="billedToAddressLine1" placeholder="Billed To Address Line 1"
          onChange={handleChange} value={formData.billedToAddressLine1}/></fieldset>
<fieldset>Address Line 2: 
 <input name="billedToAddressLine2" placeholder="Billed To Address Line 2"
          onChange={handleChange} value={formData.billedToAddressLine2}/></fieldset>
<fieldset>GSTIN: 
        <input name="billedToGST" placeholder="GSTIN"
          onChange={handleChange} value={formData.billedToGST}/></fieldset>
<fieldset>PAN: 
        <input name="billedToPAN" placeholder="PAN"
          onChange={handleChange} value={formData.billedToPAN}/></fieldset>

        <h4>Item Rates</h4>
        {formData.items.map((item, i) => (
          <div className="item-rates" key={i}>{item.text}
            <fieldset>
            <field>GST Rate: <input style={{ width: '30px'}} type="number" placeholder="GST %"
              value={item.gst}
              onChange={(e) => handleChange(e, i, "gst")} />%
              </field>
              <field>Quantity: <input style={{ width: '30px'}} type="number" placeholder="Qty"
              value={item.qty}
              onChange={(e) => handleChange(e, i, "qty")} />
            </field>
            <field>Rate: ₹<input type="number" placeholder="Rate"
              value={item.rate}
              onChange={(e) => handleChange(e, i, "rate")} />
              </field>
              </fieldset>
          </div>
        ))}
      </div>
        {/* ================= Invoice Preview ================= */}
      <div style={{ width: "730px", padding: "35px", background: "#fff", maxHeight: 'calc(100vh - 70px)',
    overflow: 'auto' }}>
        <div className="page" id="invoice">
          <h1>Surveyor Fee Bill ( Pre- Receipt)</h1>

          <table className="metaTable">
            <tbody>
              <tr><td>Invoice No #:</td><td>{getFinancialYear(new Date())}/{formData.invoiceNo}</td></tr>
              <tr><td>Invoice Date:</td><td>{formatDate(formData.invoiceDate)}</td></tr>
              <tr><td>License Number:</td><td>{formData.licenseNumber}</td></tr>
            </tbody>
          </table>

          <div className="boxes">
            <div className="box">
              <h3>Billed By</h3>
              <div style={{lineHeight: '20px', marginBottom: '10px'}}>
                <b>Arun Rajput</b><br />
                {formData.billedByLocation}<br />
                <b>PAN:</b> BIBPA8517L
              </div>

              <h3>Claim Detail</h3>
              <div style={{lineHeight: '20px'}}>
                <b>Insured Name:</b> {formData.insuredName}<br />
                <b>Registration Number:</b> {formData.regNo}<br />
                <b>Policy Number:</b> {formData.policyNo}<br />
                <b>Claim Number:</b> {formData.claimNo}<br />
                <b>Report No.:</b> {formData.reportNo}
              </div>
            </div>

            <div className="box">
              <h3>Billed To</h3>
              <div style={{lineHeight: '20px'}}>
                <b>{formData.billedTo}</b><br />
                {formData.billedToAddressLine1}<br />
                {formData.billedToAddressLine2}<br />
                <b>GSTIN:</b> {formData.billedToGST}<br />
                <b>PAN:</b> {formData.billedToPAN}
              </div>
            </div>
          </div>

          <div className="main-table-wrapper">
            <table className="main-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Item</th>
                  <th>GST Rate</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Amount</th>
                  <th>CGST</th>
                  <th>SGST</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {formData.items.map((item, index) => {
                  const amount = item.rate * item.qty;
                  const gstHalf = (amount * item.gst) / 200;
                  const total = amount + gstHalf * 2;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.text}</td>
                      <td>{item.gst}%</td>
                      <td>{item.qty}</td>
                      <td>₹{item.rate.toFixed(2)}</td>
                      <td>₹{amount.toFixed(2)}</td>
                      <td>₹{gstHalf.toFixed(2)}</td>
                      <td>₹{gstHalf.toFixed(2)}</td>
                      <td>₹{total.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="summary">
            <strong>
                Total (in words):{" "}
                {toWords(Math.floor(totals.grandTotal)).toUpperCase()} RUPEES
                {Math.round((totals.grandTotal - Math.floor(totals.grandTotal)) * 100) > 0 && (
                    <>
                    {" "}AND{" "}
                    {toWords(
                        Math.round((totals.grandTotal - Math.floor(totals.grandTotal)) * 100)
                    ).toUpperCase()}{" "}
                    PAISA
                    </>
                )}{" "}
                ONLY
                </strong>

            <div className="summary-right">
              <div><span>Amount</span><span>₹{totals.amount.toFixed(2)}</span></div>
        <div><span>CGST</span><span>₹{totals.cgst.toFixed(2)}</span></div>
        <div><span>SGST</span><span>₹{totals.sgst.toFixed(2)}</span></div>
        <div className="total"><span>Total (INR)</span><span>₹{totals.grandTotal.toFixed(2)}</span></div>
              <div className="signature" style={{flexDirection: 'column', alignItems: 'center'}}>
            <div><img src="data:image/png;base64,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" width="100px" height="100px" alt="Signature"/></div>
            <div>Authorised Signatory</div>
        </div>
            </div>
          </div>
          <div className="bank">
            <strong>Additional Information</strong>
            <table className="metaTable" style={{width: '40%', fontWeight: 'bold'}}>
                <tbody><tr><td>HDFC BANK LTD. </td><td>A/c No. 50100295240327</td></tr>
                <tr><td>MICR No.:</td><td> 173240002</td></tr>
                <tr><td>IFSC Code:</td><td> HDFC0000387</td></tr></tbody>
            </table>
            </div>
        </div>
      </div>
</div>
      <button
        onClick={generatePDF}
        style={{
            margin: "20px",
            padding: "10px 15px",
            fontSize: "16px",
            position: "fixed",
            right: "0",
            top: "0",
            }}

      >
        Download PDF
      </button>
      <button
        onClick={handleLogout}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </>
  );
}
