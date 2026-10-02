"use client";

import React from "react";

import "./digital-process.css";

const steps = [
  {
    number: "01",
    title: "Talk",
    description: "You tell us what you are building or fixing.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We agree on scope, team, and timeline.",
  },
  {
    number: "03",
    title: "Build",
    description: "Our specialists design and develop the work.",
  },
  {
    number: "04",
    title: "Launch and Improve",
    description: "We help you go live, then keep making it better.",
  },
];

export default function DigitalDesignProcess() {
  return (
    <section className="digital-process">
      <div className="digital-process-container">
        {/* Heading */}
        <div className="digital-process-heading">
          <h2>
            How Our Digital Design
            <br />
            <span>Services Work</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="digital-process-grid">
          {steps.map((step, index) => (
            <div className="process-step" key={step.number}>
              {/* Number + Line */}
              <div className="step-top">
                <div className="step-number">{step.number}</div>

                {index !== steps.length - 1 && (
                  <div className="step-line" />
                )}
              </div>

              {/* Content */}
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

