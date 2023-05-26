import React, { useState } from 'react';

const FinalSelect = () => {
  const [selectedCamera, setSelectedCamera] = useState('Canon 1500D');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleSellNow = () => {
    // Handle sell now action
  };

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen text-black">
      <div className="w-full md:w-1/2 flex flex-col items-center p-8 border-b-4 border-blue-500">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Selected Camera</h2>
          <img src="/cmodel.jpg" alt="Selected Camera" className="w-64 mb-4" />
          <h3 className="text-2xl font-bold mb-2">{selectedCamera}</h3>
          <p className="text-xl">XYZ Price</p>
        </div>
        <button
          className="bg-blue-500 text-white px-8 py-3 rounded-lg"
          onClick={handleSellNow}
        >
          Sell Now
        </button>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center p-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Payment Method</h2>
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="upi"
                value="upi"
                checked={selectedPaymentMethod === 'upi'}
                onChange={() => handlePaymentMethodChange('upi')}
              />
              <label htmlFor="upi" className="ml-2 text-xl">UPI</label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="bank-transfer"
                value="bank-transfer"
                checked={selectedPaymentMethod === 'bank-transfer'}
                onChange={() => handlePaymentMethodChange('bank-transfer')}
              />
              <label htmlFor="bank-transfer" className="ml-2 text-xl">Bank Transfer</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cash"
                value="cash"
                checked={selectedPaymentMethod === 'cash'}
                onChange={() => handlePaymentMethodChange('cash')}
              />
              <label htmlFor="cash" className="ml-2 text-xl">Cash</label>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 text-xl">
            <li>Instant Payment</li>
            <li>Free Doorstep Pickup</li>
            <li>100% Secured</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinalSelect;
