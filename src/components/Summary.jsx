export const Summary = ({ name, email,generalInterest,typeOfTrip }) => {
    return (
      <div className="summary-container">
        <div className="headings">
          <h2>Summary <span role="img" className="emoji" aria-label="travel emoji">🧳✈️</span></h2>
          <hr />
        </div>
        <div className="question-container">
          <div className="summary-box">
            <h4>Nice choices {name}</h4>
            <h5>Email: <span>{email}</span></h5>
            <h5>Interest: <span>{generalInterest}</span></h5>
            <h5>Triptype: <span>{typeOfTrip}</span></h5>
            
          </div>
          <p className="thank-you-title">Thank you! I will be reaching out to you soon to schedule
    consultation </p>
        </div>
      </div>
    );
  }
  