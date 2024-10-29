"use client";
import React, { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import Image from "next/image";
import Gpay from "@/app/gpay.png";
import Phonepay from "@/app/phonepay.png";
import Paytm from "@/app/paytm.png";

const Page = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    // Validate card name
    if (!cardName.trim()) newErrors.cardName = "Card name is required";

    // Validate card number (should be 16 digits)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    // Validate expiry date (MM/YY format)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      newErrors.expiryDate = "Expiry ?";
    }

    // Validate CVV (should be 3 digits)
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Card details are valid!");
    }
  };

  return (
    <>
      <h1 className="ml-8 text-xl">Select your payment method</h1>
      <div className="card-validation-form">
        <div className="card-detailbox mt-3">
          <div className="cardicon">
            <CiCreditCard1 color="black" size={25} />
          </div>
          <h1 className="my-3">Credit card or debit card detail</h1>
          <p className="text-xs text-gray-500">Enter your card detail</p>

          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div>
                <label className="text-sm">Name on Card</label>
                <br />
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Alisha Ciara"
                  className="cardinputfieldlg"
                />
                {errors.cardName && (
                  <p className="text-sm">{errors.cardName}</p>
                )}
              </div>
              <div className="ml-4">
                <label className="text-sm">Expiry</label>
                <br />
                <input
                  type="text"
                  maxLength="5"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="cardinputfieldsm"
                />
                {errors.expiryDate && (
                  <p className="text-sm">{errors.expiryDate}</p>
                )}
              </div>
            </div>

            <div className="flex mt-4">
              <div>
                <label className="text-sm">Card Number</label>
                <br />
                <input
                  type="text"
                  maxLength="16"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className="cardinputfieldlg"
                />
                {errors.cardNumber && (
                  <p className="text-sm">{errors.cardNumber}</p>
                )}
              </div>
              <div className="ml-5">
                <label className="text-sm">CVV</label>
                <br />
                <input
                  type="text"
                  maxLength="3"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="***"
                  className="cardinputfieldsm"
                />
                {errors.cvv && <p className="text-sm">{errors.cvv}</p>}
              </div>
            </div>

            <button type="submit">Continue</button>
          </form>

          <div className="upiapp">
            <Image src={Gpay} alt="" />
            <Image src={Paytm} alt="" />
            <Image src={Phonepay} alt="" />
          </div>
        </div>
        <div className="card-detailbox">
          <div className="flex  items-center mt-3">
            <div className="cardicon">
              <CiBank size={25} color="black" />
            </div>
            <h1 className="ml-2">Net banking</h1>
          </div>
          <h1 className="text-sm ml-3 my-4">Choose your card</h1>
          <select name="bank name" className="bankselect">
            <option value="">State bank of india</option>
            <option value="">Axis Bank</option>
            <option value="">Indian bank</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Page;
