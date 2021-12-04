import React from "react";
import Header from "./Main.Header";

import type { Props } from "./Main.types";

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
