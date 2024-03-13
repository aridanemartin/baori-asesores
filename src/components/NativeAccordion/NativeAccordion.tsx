import React from "react";
import "./NativeAccordion.css";

interface NativeAccordionProps {
  title: string;
  children: React.ReactNode;
}

export const NativeAccordion = ({ title, children }: NativeAccordionProps) => {
  return (
    <>
      <details>
        <summary>
          <span role="term" aria-details="pure-css">
            {title}
          </span>
        </summary>
      </details>
      <div role="definition" id="pure-css" className="detailsContent">
        {children}
      </div>
    </>
  );
};
