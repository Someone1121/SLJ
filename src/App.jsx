import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StepIndicator from "./components/StepIndicator";
import ManuscriptInfo from "./components/ManuscriptInfo";
import AuthorsDetails from "./components/AuthorsDetails";  
import UploadForm from "./components/UploadForm";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const goto = (step) => setCurrentStep(step);

  return (
    <div className="app-root">
      <Header user="tribhuwan elijah" />

      <div className="body-wrap">
        <Sidebar />

        <main className="main-pane">
          <StepIndicator current={currentStep} onStepClick={goto} />

          {currentStep === 1 && (
            <ManuscriptInfo onNext={() => goto(2)} />
          )}

          {currentStep === 2 && (
            <AuthorsDetails onPrev={() => goto(1)} onNext={() => goto(3)} />
          )}

          {currentStep === 3 && (
            <UploadForm onPrev={() => goto(2)} />
          )}
        </main>
      </div>
    </div>
  );
}
