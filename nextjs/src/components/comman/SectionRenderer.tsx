import { FC } from "react";
import HeroSection from "../home/HeroSection";
import { type StrapiPageDataQuery } from "@/gql/graphql";

// Map component types to the corresponding components
const componentMapping: Record<string, FC<HTMLElement>> = {
  ComponentSectionsHero: HeroSection
};

const SectionRenderer = ({ section }) => {
  const Component = componentMapping[section.__typename];

  if (!Component) {
    return <p>Component Not Found</p>;
  }

  return <Component {...section} />;
};

export default SectionRenderer;
