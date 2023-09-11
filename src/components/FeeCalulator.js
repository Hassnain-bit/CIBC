import React, { useState } from "react";

function FeeCalculator() {
  const [tuition, setTuition] = useState("");
  const [admission, setAdmission] = useState("");
  const [totalFee, setTotalFee] = useState("");

  const handleTuitionChange = (e) => {
    const newTuition = parseInt(e.target.value, 10);
    setTuition(newTuition);
    setTotalFee(newTuition + admission);
  };

  const handleAdmissionChange = (e) => {
    const newAdmission = parseInt(e.target.value, 10);
    setAdmission(newAdmission);
    setTotalFee(tuition + newAdmission);
  };

  return (
    <div>
      <label>
        Tuition:
        <input type="number" value={tuition} onChange={handleTuitionChange} />
      </label>
      <br />
      <label>
        Admission:
        <input
          type="number"
          value={admission}
          onChange={handleAdmissionChange}
        />
      </label>
      <br />
      <label>
        Total Fee:
        <input type="number" value={totalFee} readOnly />
      </label>
    </div>
  );
}

export default FeeCalculator;
