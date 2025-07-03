import React from "react";
import "../App.css";

const steps = [
  { num: 1, label: "Manuscript Info", sub: "Enter manuscript information" },
  { num: 2, label: "Authors Details", sub: "Add Author(s) details" },
  { num: 3, label: "Upload Files",   sub: "Upload your files" },
];

export default function StepIndicator({ current, onStepClick }) {
  return (
    <div className="steps">
      {steps.map(({ num, label, sub }) => (
        <button
          key={num}
          className={`step ${current === num ? "current" : ""}`}
          onClick={() => onStepClick?.(num)}
          type="button"
        >
          <div className="step-num">{num}</div>
          <div className="step-text">
            <div>{label}</div>
            <small>{sub}</small>
          </div>
        </button>
      ))}
    </div>
  );
}
