import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" description={description} />
      <meta name="keywords" description={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To ProShop",
  description: "we sell best products",
  keywords: "electronics, buy, purchase, cheap electronics",
};
export default Meta;
