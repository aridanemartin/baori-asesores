import { ReactNode } from "react";

import "./PageTitle.css";

export const PageTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className="pageTitle">{children}</h1>;
};
