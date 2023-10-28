

  export const Name= ({ updateFormData, value }) => {
    const nameInput = (e) => updateFormData("name", e.target.value);
    console.log(value)
    return (
      <div>
        <label>Awesome. Mind providing your full name?</label>
        <input type="text" value={value} onChange={nameInput} />
      </div>
    );
  };