export const TypeOfTrip = ({ updateFormData, value }) => {
  const tripType = (e) =>
    updateFormData('tripType', e.target.value);

  const tripTypes = [
    { value: 'honeymoon-couple', label: 'Honeymoon/couple' },
    { value: 'family', label: 'Family' },
    { value: 'friends', label: 'Friends' },
    { value: 'solo', label: 'Solo' },
  ];

  return (
    <div className="trip-types-container">
      <label className="trip-type-heading">Please select type of trip:</label>
      {tripTypes.map((trip) => (
        <div key={trip.value}>
          <label className="trip-type-values">
            <input
              type="radio"
              name="tripType"
              value={trip.value}
              checked={value === trip.value}
              onChange={tripType}
            />
            {trip.label}
          </label>
        </div>
      ))}
    </div>
  );
};
