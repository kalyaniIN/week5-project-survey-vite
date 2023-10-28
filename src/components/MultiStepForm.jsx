import { useState } from "react";
import { IntroPage } from "./IntroPage";
import { Name } from "./Name";
import { Email } from "./Email";
import { Interests } from "./InterestQuestion";
import { TypeOfTrip } from "./TypeTripQuestion";
import { Summary } from "./Summary";

export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    generalInterest: "",
    tripType: "",
  });

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  // Function to move to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Function to start the form (set current step to 1)

  const submitForm = () => {
   
    // You can access all the form data in the `formData` state.
    setCurrentStep(6);
  };


  const steps = [
    { step: 1, component: <IntroPage onButtonClick={nextStep} /> },
    {
      step: 2,
      component: <Name value={formData.name} updateFormData={updateFormData} />,
    },
    {
      step: 3,
      component: (
        <Email value={formData.email} updateFormData={updateFormData} />
      ),
    },
    {
      step: 4,
      component: (
        <Interests
          value={formData.generalInterest}
          updateFormData={updateFormData}
        />
      ),
    },
    {
      step: 5,
      component: (
        <TypeOfTrip value={formData.tripType} updateFormData={updateFormData} />
      ),
    },
    {
      step: 6,
      component: (
        <Summary values={{ name: formData.name, email: formData.email }} />
      ),
    },
  ];

  return (
    <div>
      {currentStep === 6 ? (
        <Summary
          name={formData.name}
          email={formData.email}
          generalInterest={formData.generalInterest}
          typeOfTrip={formData.tripType}
        />
      ) : (
        steps.find((step) => step.step === currentStep)?.component
      )}
      {currentStep !== 1 && currentStep !== 6 && (
        <div className="multi-step-form">
          {currentStep > 1 && <button onClick={prevStep}>Back</button>}
          <button onClick={currentStep === 5 ? submitForm : nextStep}>
            {currentStep === 5 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};
