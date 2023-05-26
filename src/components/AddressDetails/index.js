import React, { useState } from 'react';

const AddressDetails = () => {
  const [address, setAddress] = useState('');
  const [useLiveLocation, setUseLiveLocation] = useState(false);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleLiveLocationChange = (event) => {
    setUseLiveLocation(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle address submission
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-black font-bold mb-6">Enter Your Address</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="liveLocation"
              checked={useLiveLocation}
              onChange={handleLiveLocationChange}
              className="mr-2"
            />
            <label htmlFor="liveLocation" className="text-black">
              Use Live Location
            </label>
          </div>
          {!useLiveLocation && (
            <div>
              <label htmlFor="address" className="text-black mb-4 block">
                Address:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full mb-6"
                placeholder="Enter your address"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressDetails;
