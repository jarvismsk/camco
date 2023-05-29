import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const OtpVerificationPage = () => {
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    history.push('/camera-question'); // Navigate to CameraQuestion component
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Unlock Pricing</h1>
      {!otpSent && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-4">Enter your mobile number to continue:</p>
          <div className="flex items-center">
            <input
              className="w-48 p-3 border border-gray-300 rounded-l focus:outline-none"
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="Mobile Number"
              required
            />
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-r hover:bg-blue-600 focus:outline-none"
              type="button"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default OtpVerificationPage;
