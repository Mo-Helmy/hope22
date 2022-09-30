import React from "react";
import Layout from "../layout/Layout";
import FeaturedProductsSection from "./featuredProducts/FeaturedProductsSection";
import FeaturesList from "./FeaturesList";
import LandingSection from "./LandingSection";
import ProdutTypeSection from "./ProdutTypeSection";

const HomePage = () => {
  return (
    <Layout>
      <LandingSection />

      <ProdutTypeSection />

      <FeaturesList />

      <FeaturedProductsSection />
    </Layout>
  );
};

export default HomePage;
