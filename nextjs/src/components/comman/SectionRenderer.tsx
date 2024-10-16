import { FC } from "react";
import HeroSection from "../home/HeroSection";
import ServicePageHeroSection from "../services/HeroSection";
import ProductInfo from "../home/ProductInfo";
import CaseStudy from "../home/CaseStudy";
import CardSection from "../home/CardSection";
import { StrapiPageDataQuery } from "@/gql/graphql";

const componentMapping: Record<string, FC<HTMLElement>> = {
  ComponentSectionsHero: HeroSection,
  ComponentSectionsHomeProductInfo: ProductInfo,
  ComponentSectionsHomeCaseStudy: CaseStudy,
  ComponentSectionsCardCollection: CardSection,
  ComponentSectionsServiceHero: ServicePageHeroSection
};

const SectionRenderer = ({ section }: { section }) => {
  const Component = componentMapping[section.__typename];

  if (!Component) {
    return <p>Component Not Found</p>;
  }

  return <Component {...section} />;
};

export default SectionRenderer;
