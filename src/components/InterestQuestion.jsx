
  export const Interests = ({ updateFormData, value }) => {
    const generalInterest = (e) => updateFormData("generalInterest", e.target.value);
    return (
      <div>
        <label>Please select your general interests:</label>
        <select value={value} onChange={generalInterest}>
          <option value="">Interests</option>
          <option value="adventurous-activity">Adventurous activities</option>
          <option value="history">History</option>
          <option value="sports">Sports</option>
          <option value="architecture">Architecture</option>
        </select>
      </div>
    );
  };