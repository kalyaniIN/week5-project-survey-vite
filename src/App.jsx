import { MultiStepForm } from "./components/MultiStepForm";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="container">
      <div className="main">
        <MultiStepForm />
      </div>
      <section className="footer-display">
        <Footer/>
      </section>
    </div>
  );
};
