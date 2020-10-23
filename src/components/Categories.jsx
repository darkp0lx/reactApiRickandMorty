import React from "react";

const Categories = ({children,text}) => (
  <section className="Categories">
    <h3 className="categories__title">{text}</h3>
    {children}
  </section>
);
export default Categories