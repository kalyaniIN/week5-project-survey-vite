
export const Email= ({ updateFormData, value }) => {
    const emailInput = (e) => updateFormData("email", e.target.value);
    console.log(value)
    return (
      <div className="email">
        <label className="email-label">Email : </label>
        <input className="email-value" type="email" value={value} onChange={emailInput} />
      </div>
    );
  };