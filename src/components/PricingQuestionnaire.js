import React, { useState } from 'react';

function PricingQuestionnaire() {
  const [cameraModel, setCameraModel] = useState('');
  const [selectedLenses, setSelectedLenses] = useState([]);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [cameraCondition, setCameraCondition] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showPrice, setShowPrice] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  // Step 1: Canon Camera Model Logic
  const handleCameraModelChange = (event) => {
    setCameraModel(event.target.value);
  };

  // Step 2: Canon Lens Logic
  const handleLensChange = (event) => {
    const lens = event.target.value;
    if (selectedLenses.includes(lens)) {
      setSelectedLenses(selectedLenses.filter((l) => l !== lens));
    } else {
      setSelectedLenses([...selectedLenses, lens]);
    }
  };

  // Step 3: Select Accessories Logic
  const handleAccessoryChange = (event) => {
    const accessory = event.target.value;
    if (selectedAccessories.includes(accessory)) {
      setSelectedAccessories(selectedAccessories.filter((a) => a !== accessory));
    } else {
      setSelectedAccessories([...selectedAccessories, accessory]);
    }
  };

  // Step 4: Camera Condition Logic
  const handleCameraConditionChange = (event) => {
    setCameraCondition(event.target.value);
  };

  // Step 5: Details Camera Page
  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const validateMobileNumber = () => {
    // Add your mobile number validation logic here
    return mobileNumber.length === 10;
  };

  const handleNextPage = () => {
    if (validateMobileNumber()) {
      // Proceed to the next page or perform necessary actions
      setShowPrice(true);
      // Calculate the final price based on the selected options
      // You can define your own pricing logic here
      let price = 0;

      // Calculate base price based on camera model
      switch (cameraModel) {
        case '200D':
          price += 21000;
          break;
        case 'M50':
          price += 23000;
          break;
        case '700D':
          price += 12000;
          break;
        default:
          break;
      }

      // Adjust price based on selected lenses
      for (const lens of selectedLenses) {
        switch (lens) {
          case '18-55':
            price += 4000;
            break;
          case '55-250':
            price += 5000;
            break;
          default:
            break;
        }
      }

      // Adjust price based on selected accessories
      for (const accessory of selectedAccessories) {
        // Add your accessory pricing logic here
        // For simplicity, let's assume all accessories cost 1000
        price += 1000;
      }

      // Adjust price based on camera condition
      switch (cameraCondition) {
        case 'Great':
          price += 500;
          break;
        case 'Good':
          price -= 500;
          break;
        case 'Average':
          price -= 2000;
          break;
        default:
          break;
      }

      setFinalPrice(price);
    } else {
      alert('Please enter a valid mobile number.');
    }
  };

  return (
    <div>
      <h1>Pricing Questionnaire</h1>

      <form>
        <h2>Step 1: Canon Camera Model</h2>
        <label>
          <input
            type="radio"
            name="cameraModel"
            value="200D"
            checked={cameraModel === '200D'}
            onChange={handleCameraModelChange}
          />{' '}
          Canon 200D (INR 21,000)
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="cameraModel"
            value="M50"
            checked={cameraModel === 'M50'}
            onChange={handleCameraModelChange}
          />{' '}
          Canon M50 (INR 23,000)
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="cameraModel"
            value="700D"
            checked={cameraModel === '700D'}
            onChange={handleCameraModelChange}
          />{' '}
          Canon 700D (INR 12,000)
        </label>
        <br />

        <h2>Step 2: Canon Lens</h2>
        <label>
          <input
            type="checkbox"
            name="lens"
            value="18-55"
            checked={selectedLenses.includes('18-55')}
            onChange={handleLensChange}
          />{' '}
          Canon 18-55 (INR 4,000)
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="lens"
            value="55-250"
            checked={selectedLenses.includes('55-250')}
            onChange={handleLensChange}
          />{' '}
          Canon 55-250 (INR 5,000)
        </label>
        <br />

        <h2>Step 3: Select Accessories</h2>
        <label>
          <input
            type="checkbox"
            name="accessory"
            value="Accessory 1"
            checked={selectedAccessories.includes('Accessory 1')}
            onChange={handleAccessoryChange}
          />{' '}
          Accessory 1 (INR 1,000)
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="accessory"
            value="Accessory 2"
            checked={selectedAccessories.includes('Accessory 2')}
            onChange={handleAccessoryChange}
          />{' '}
          Accessory 2 (INR 1,000)
        </label>
        <br />

        <h2>Step 4: Camera Condition</h2>
        <label>
          <input
            type="radio"
            name="cameraCondition"
            value="Great"
            checked={cameraCondition === 'Great'}
            onChange={handleCameraConditionChange}
          />{' '}
          Great (+INR 500)
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="cameraCondition"
            value="Good"
            checked={cameraCondition === 'Good'}
            onChange={handleCameraConditionChange}
          />{' '}
          Good (-INR 500)
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="cameraCondition"
            value="Average"
            checked={cameraCondition === 'Average'}
            onChange={handleCameraConditionChange}
          />{' '}
          Average (-INR 2,000)
        </label>
        <br />

        <h2>Step 5: Details Camera Page</h2>
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
        </label>
        <br />

        <button type="button" onClick={handleNextPage}>
          Calculate Price
        </button>
      </form>

      {showPrice && (
        <div>
          <h2>Step 6: Questions Page</h2>
          {/* Display all questions with prices in INR */}
          {/* Allow the user to answer "Yes" or "No" for each question */}
          {/* Show disclaimer if the user selects "No" for any question */}
        </div>
      )}

      {showPrice && (
        <div>
          <h2>Step 7: Final Select</h2>
          <p>Final Price: INR {finalPrice}</p>
          {/* Create a button for the user to proceed with the selling process */}
        </div>
      )}
    </div>
  );
}

export default PricingQuestionnaire;
