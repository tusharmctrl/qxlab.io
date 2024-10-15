import { FC } from "react";
import HeroSection from "../home/HeroSection";
import ProductInfo from "../home/ProductInfo";
import CaseStudy from "../home/CaseStudy";
import { type StrapiPageDataQuery } from "@/gql/graphql";
import CardSection from "../home/CardSection";

const componentMapping: Record<string, FC<HTMLElement>> = {
  ComponentSectionsHero: HeroSection,
  ComponentSectionsHomeProductInfo: ProductInfo,
  ComponentSectionsHomeCaseStudy: CaseStudy,
  ComponentSectionsCardCollection: CardSection
};

const SectionRenderer = ({ section }) => {
  const Component = componentMapping[section.__typename];

  if (!Component) {
    return <p>Component Not Found</p>;
  }

  return <Component {...section} />;
};

export default SectionRenderer;
