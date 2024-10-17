import { FC } from "react";
import HeroSection from "../home/HeroSection";
import ServicePageHeroSection from "../services/HeroSection";
import ProductInfo from "../home/ProductInfo";
import CaseStudy from "../home/CaseStudy";
import CardSection from "../home/CardSection";
import { StrapiPageDataQuery } from "@/gql/graphql";
import OurServices from "../services/OurServices";
import ContactUs from "../services/ContactUs";
import SolutionsPage from "../solutions/SolutionsPage";
import ProductHeroSection from "../product/ProductHeroSection";
import WorksSection from "../product/WorksSection";
import FAQSection from "../product/FAQSection";
import ComingSoonSection from "../product/ComingSoonSection";

const componentMapping: Record<string, FC<React.JSX.Element>> = {
  ComponentSectionsHero: HeroSection,
  ComponentSectionsHomeProductInfo: ProductInfo,
  ComponentSectionsHomeCaseStudy: CaseStudy,
  ComponentSectionsCardCollection: CardSection,
  ComponentSectionsServiceHero: ServicePageHeroSection,
  ComponentSectionsOurServices: OurServices,
  ComponentSectionsContactUs: ContactUs,
  ComponentSectionsSolutions: SolutionsPage,
  ComponentSectionsHeroProductPage: ProductHeroSection,
  ComponentSectionsProductWorks: WorksSection,
  ComponentSectionsFaq: FAQSection,
  ComponentSectionsProductComingHero: ComingSoonSection
};

const SectionRenderer = ({ section }: { section: any }) => {
  const Component = componentMapping[section.__typename];
  console.log(section.__typename);

  if (!Component) {
    return <p className="flex justify-center bg-gray-700 p-10 text-white">Component Not Found : Contact to developer</p>;
  }

  return <Component {...section} />;
};

export default SectionRenderer;
