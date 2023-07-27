import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from '../redux/action';

const FormInput = () => {
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleLoadClick = () => {
    dispatch(setRegion(selectedRegion));
  };

  return (
    <div>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="">Select a region</option>
        <option value="USA">United States</option>
        <option value="IND">India</option>
        <option value="UK">United Kingdom</option>
      </select>
      <button onClick={handleLoadClick} className="grid h-8 w-32 text-white bg-blue-600/100 justify-center items-center ">Load</button>
    </div>
  );
};

export default FormInput;
