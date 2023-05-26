import React, { useState } from 'react';

const OtpVerificationPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    console.log('Generated OTP:', generatedOtp);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    console.log('Generated OTP:', generatedOtp);
    if (otp === generatedOtp) {
      setOtpVerified(true);
      console.log('OTP verified!');
    } else {
      console.log('OTP verification failed!');
    }
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
      {otpSent && !otpVerified && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-4">
            Enter the OTP sent to your mobile number:
          </p>
          <div className="flex items-center">
            <input
              className="w-48 p-3 border border-gray-300 rounded-l focus:outline-none"
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              placeholder="OTP"
              required
            />
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-r hover:bg-blue-600 focus:outline-none"
              type="button"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        </form>
      )}
      {otpVerified && (
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <p className="text-lg text-gray-700 mb-4">OTP verified! You can proceed.</p>
          {/* Display additional content or redirect to the next page */}
        </div>
      )}
    </div>
  );
};

export default OtpVerificationPage;
