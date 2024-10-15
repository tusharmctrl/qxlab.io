import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date; output: Date };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: Record<string, any>; output: Record<string, any> };
  PageContentSectionsDynamicZoneInput: { input: any; output: any };
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]["input"]>;
  containsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  eqi?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
  nei?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ComponentElementsFeature = {
  __typename?: "ComponentElementsFeature";
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentElementsFeatureColumn = {
  __typename?: "ComponentElementsFeatureColumn";
  description?: Maybe<Scalars["String"]["output"]>;
  icon: UploadFile;
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
};

export type ComponentElementsFeatureColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureColumnFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsFeatureColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureColumnFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureFiltersInput>>>;
};

export type ComponentElementsFeatureRow = {
  __typename?: "ComponentElementsFeatureRow";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  link?: Maybe<ComponentLinksLink>;
  media: UploadFile;
  title: Scalars["String"]["output"];
};

export type ComponentElementsFeatureRowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureRowFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentLinksLinkFiltersInput>;
  not?: InputMaybe<ComponentElementsFeatureRowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFeatureRowFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFooterSection = {
  __typename?: "ComponentElementsFooterSection";
  id: Scalars["ID"]["output"];
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentElementsFooterSectionLinksArgs = {
  filters?: InputMaybe<ComponentLinksLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentElementsFooterSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFooterSectionFiltersInput>>>;
  links?: InputMaybe<ComponentLinksLinkFiltersInput>;
  not?: InputMaybe<ComponentElementsFooterSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFooterSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFooterSectionInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  links?: InputMaybe<Array<InputMaybe<ComponentLinksLinkInput>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentElementsLogos = {
  __typename?: "ComponentElementsLogos";
  id: Scalars["ID"]["output"];
  logo?: Maybe<UploadFile>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentElementsLogosFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsLogosFiltersInput>>>;
  not?: InputMaybe<ComponentElementsLogosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsLogosFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsNotificationBanner = {
  __typename?: "ComponentElementsNotificationBanner";
  id: Scalars["ID"]["output"];
  text?: Maybe<Scalars["String"]["output"]>;
  type: Enum_Componentelementsnotificationbanner_Type;
};

export type ComponentElementsNotificationBannerInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Enum_Componentelementsnotificationbanner_Type>;
};

export type ComponentElementsPlan = {
  __typename?: "ComponentElementsPlan";
  description?: Maybe<Scalars["String"]["output"]>;
  features?: Maybe<Array<Maybe<ComponentElementsFeature>>>;
  id: Scalars["ID"]["output"];
  isRecommended?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  pricePeriod?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentElementsPlanFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentElementsPlanFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsPlanFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  features?: InputMaybe<ComponentElementsFeatureFiltersInput>;
  isRecommended?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsPlanFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsPlanFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  pricePeriod?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsTestimonial = {
  __typename?: "ComponentElementsTestimonial";
  authorName?: Maybe<Scalars["String"]["output"]>;
  authorTitle?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
  logo?: Maybe<UploadFile>;
  picture?: Maybe<UploadFile>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentElementsTestimonialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsTestimonialFiltersInput>>>;
  authorName?: InputMaybe<StringFilterInput>;
  authorTitle?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsTestimonialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsTestimonialFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentLayoutFooter = {
  __typename?: "ComponentLayoutFooter";
  columns?: Maybe<Array<Maybe<ComponentElementsFooterSection>>>;
  id: Scalars["ID"]["output"];
  logo?: Maybe<UploadFile>;
  smallText?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentLayoutFooterColumnsArgs = {
  filters?: InputMaybe<ComponentElementsFooterSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentLayoutFooterInput = {
  columns?: InputMaybe<Array<InputMaybe<ComponentElementsFooterSectionInput>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  logo?: InputMaybe<Scalars["ID"]["input"]>;
  smallText?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentLayoutNavbar = {
  __typename?: "ComponentLayoutNavbar";
  button?: Maybe<ComponentLinksButtonLink>;
  id: Scalars["ID"]["output"];
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
  logo: UploadFile;
};

export type ComponentLayoutNavbarLinksArgs = {
  filters?: InputMaybe<ComponentLinksLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentLayoutNavbarInput = {
  button?: InputMaybe<ComponentLinksButtonLinkInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  links?: InputMaybe<Array<InputMaybe<ComponentLinksLinkInput>>>;
  logo?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentLinksButton = {
  __typename?: "ComponentLinksButton";
  id: Scalars["ID"]["output"];
  text?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
};

export type ComponentLinksButtonLink = {
  __typename?: "ComponentLinksButtonLink";
  id: Scalars["ID"]["output"];
  newTab?: Maybe<Scalars["Boolean"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Enum_Componentlinksbuttonlink_Type>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentLinksButtonLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinksButtonLinkFiltersInput>>>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinksButtonLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentLinksButtonLinkInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  newTab?: InputMaybe<Scalars["Boolean"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Enum_Componentlinksbuttonlink_Type>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentLinksLink = {
  __typename?: "ComponentLinksLink";
  id: Scalars["ID"]["output"];
  newTab?: Maybe<Scalars["Boolean"]["output"]>;
  sublinks?: Maybe<Array<Maybe<ComponentLinksSublinks>>>;
  text: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type ComponentLinksLinkSublinksArgs = {
  filters?: InputMaybe<ComponentLinksSublinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentLinksLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinksLinkFiltersInput>>>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentLinksLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinksLinkFiltersInput>>>;
  sublinks?: InputMaybe<ComponentLinksSublinksFiltersInput>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentLinksLinkInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  newTab?: InputMaybe<Scalars["Boolean"]["input"]>;
  sublinks?: InputMaybe<Array<InputMaybe<ComponentLinksSublinksInput>>>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentLinksSublinks = {
  __typename?: "ComponentLinksSublinks";
  id: Scalars["ID"]["output"];
  newTab?: Maybe<Scalars["Boolean"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentLinksSublinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLinksSublinksFiltersInput>>>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentLinksSublinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinksSublinksFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentLinksSublinksInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  newTab?: InputMaybe<Scalars["Boolean"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentMetaMetadata = {
  __typename?: "ComponentMetaMetadata";
  id: Scalars["ID"]["output"];
  metaDescription: Scalars["String"]["output"];
  metaTitle: Scalars["String"]["output"];
  shareImage?: Maybe<UploadFile>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentMetaMetadataFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMetaMetadataFiltersInput>>>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMetaMetadataFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMetaMetadataFiltersInput>>>;
  twitterCardType?: InputMaybe<StringFilterInput>;
  twitterUsername?: InputMaybe<StringFilterInput>;
};

export type ComponentMetaMetadataInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metaDescription?: InputMaybe<Scalars["String"]["input"]>;
  metaTitle?: InputMaybe<Scalars["String"]["input"]>;
  shareImage?: InputMaybe<Scalars["ID"]["input"]>;
  twitterCardType?: InputMaybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentSectionsBottomActions = {
  __typename?: "ComponentSectionsBottomActions";
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLink>>>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsBottomActionsButtonsArgs = {
  filters?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsFeatureColumnsGroup = {
  __typename?: "ComponentSectionsFeatureColumnsGroup";
  features?: Maybe<Array<Maybe<ComponentElementsFeatureColumn>>>;
  id: Scalars["ID"]["output"];
};

export type ComponentSectionsFeatureColumnsGroupFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsFeatureRowsGroup = {
  __typename?: "ComponentSectionsFeatureRowsGroup";
  features?: Maybe<Array<Maybe<ComponentElementsFeatureRow>>>;
  id: Scalars["ID"]["output"];
};

export type ComponentSectionsFeatureRowsGroupFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsFeatureRowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsHero = {
  __typename?: "ComponentSectionsHero";
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonLink>>>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  picture?: Maybe<UploadFile>;
  smallTextWithLink?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsHeroButtonsArgs = {
  filters?: InputMaybe<ComponentLinksButtonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsLargeVideo = {
  __typename?: "ComponentSectionsLargeVideo";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  poster?: Maybe<UploadFile>;
  title?: Maybe<Scalars["String"]["output"]>;
  video: UploadFile;
};

export type ComponentSectionsLeadForm = {
  __typename?: "ComponentSectionsLeadForm";
  emailPlaceholder?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
  submitButton?: Maybe<ComponentLinksButton>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsPricing = {
  __typename?: "ComponentSectionsPricing";
  id: Scalars["ID"]["output"];
  plans?: Maybe<Array<Maybe<ComponentElementsPlan>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsPricingPlansArgs = {
  filters?: InputMaybe<ComponentElementsPlanFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsRichText = {
  __typename?: "ComponentSectionsRichText";
  content?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type ComponentSectionsTestimonialsGroup = {
  __typename?: "ComponentSectionsTestimonialsGroup";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  link?: Maybe<ComponentLinksLink>;
  logos?: Maybe<Array<Maybe<ComponentElementsLogos>>>;
  testimonials?: Maybe<Array<Maybe<ComponentElementsTestimonial>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsTestimonialsGroupLogosArgs = {
  filters?: InputMaybe<ComponentElementsLogosFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsTestimonialsGroupTestimonialsArgs = {
  filters?: InputMaybe<ComponentElementsTestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]["input"]>;
  containsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  eqi?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  ne?: InputMaybe<Scalars["DateTime"]["input"]>;
  nei?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]["input"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DeleteMutationResponse = {
  __typename?: "DeleteMutationResponse";
  documentId: Scalars["ID"]["output"];
};

export enum Enum_Componentelementsnotificationbanner_Type {
  Alert = "alert",
  Info = "info",
  Warning = "warning"
}

export enum Enum_Componentlinksbuttonlink_Type {
  Primary = "primary",
  Secondary = "secondary"
}

export enum Enum_Componentlinksbutton_Type {
  Primary = "primary",
  Secondary = "secondary"
}

export enum Enum_Componentmetametadata_Twittercardtype {
  App = "app",
  Player = "player",
  Summary = "summary",
  SummaryLargeImage = "summary_large_image"
}

export enum Enum_Leadformsubmission_Status {
  Contacted = "contacted",
  Ignored = "ignored",
  Seen = "seen"
}

export type Error = {
  __typename?: "Error";
  code: Scalars["String"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  contains?: InputMaybe<Scalars["Float"]["input"]>;
  containsi?: InputMaybe<Scalars["Float"]["input"]>;
  endsWith?: InputMaybe<Scalars["Float"]["input"]>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  eqi?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  ne?: InputMaybe<Scalars["Float"]["input"]>;
  nei?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Float"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]["input"]>;
};

export type GenericMorph =
  | ComponentElementsFeature
  | ComponentElementsFeatureColumn
  | ComponentElementsFeatureRow
  | ComponentElementsFooterSection
  | ComponentElementsLogos
  | ComponentElementsNotificationBanner
  | ComponentElementsPlan
  | ComponentElementsTestimonial
  | ComponentLayoutFooter
  | ComponentLayoutNavbar
  | ComponentLinksButton
  | ComponentLinksButtonLink
  | ComponentLinksLink
  | ComponentLinksSublinks
  | ComponentMetaMetadata
  | ComponentSectionsBottomActions
  | ComponentSectionsFeatureColumnsGroup
  | ComponentSectionsFeatureRowsGroup
  | ComponentSectionsHero
  | ComponentSectionsLargeVideo
  | ComponentSectionsLeadForm
  | ComponentSectionsPricing
  | ComponentSectionsRichText
  | ComponentSectionsTestimonialsGroup
  | Global
  | I18NLocale
  | LeadFormSubmission
  | Page
  | ReviewWorkflowsWorkflow
  | ReviewWorkflowsWorkflowStage
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type Global = {
  __typename?: "Global";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  favicon?: Maybe<UploadFile>;
  footer?: Maybe<ComponentLayoutFooter>;
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<Global>>;
  localizations_connection?: Maybe<GlobalRelationResponseCollection>;
  metaTitleSuffix: Scalars["String"]["output"];
  metadata?: Maybe<ComponentMetaMetadata>;
  navbar?: Maybe<ComponentLayoutNavbar>;
  notificationBanner?: Maybe<ComponentElementsNotificationBanner>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type GlobalInput = {
  favicon?: InputMaybe<Scalars["ID"]["input"]>;
  footer?: InputMaybe<ComponentLayoutFooterInput>;
  metaTitleSuffix?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<ComponentMetaMetadataInput>;
  navbar?: InputMaybe<ComponentLayoutNavbarInput>;
  notificationBanner?: InputMaybe<ComponentElementsNotificationBannerInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type GlobalRelationResponseCollection = {
  __typename?: "GlobalRelationResponseCollection";
  nodes: Array<Global>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<I18NLocale>>;
  localizations_connection?: Maybe<I18NLocaleRelationResponseCollection>;
  name?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type I18NLocaleLocalizationsArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type I18NLocaleLocalizations_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<I18NLocaleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type I18NLocaleRelationResponseCollection = {
  __typename?: "I18NLocaleRelationResponseCollection";
  nodes: Array<I18NLocale>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  containsi?: InputMaybe<Scalars["ID"]["input"]>;
  endsWith?: InputMaybe<Scalars["ID"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  eqi?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  nei?: InputMaybe<Scalars["ID"]["input"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
  notContainsi?: InputMaybe<Scalars["ID"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]["input"]>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  contains?: InputMaybe<Scalars["Int"]["input"]>;
  containsi?: InputMaybe<Scalars["Int"]["input"]>;
  endsWith?: InputMaybe<Scalars["Int"]["input"]>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  eqi?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
  nei?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Int"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]["input"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  contains?: InputMaybe<Scalars["JSON"]["input"]>;
  containsi?: InputMaybe<Scalars["JSON"]["input"]>;
  endsWith?: InputMaybe<Scalars["JSON"]["input"]>;
  eq?: InputMaybe<Scalars["JSON"]["input"]>;
  eqi?: InputMaybe<Scalars["JSON"]["input"]>;
  gt?: InputMaybe<Scalars["JSON"]["input"]>;
  gte?: InputMaybe<Scalars["JSON"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  lt?: InputMaybe<Scalars["JSON"]["input"]>;
  lte?: InputMaybe<Scalars["JSON"]["input"]>;
  ne?: InputMaybe<Scalars["JSON"]["input"]>;
  nei?: InputMaybe<Scalars["JSON"]["input"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]["input"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type LeadFormSubmission = {
  __typename?: "LeadFormSubmission";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<LeadFormSubmission>>;
  localizations_connection?: Maybe<LeadFormSubmissionRelationResponseCollection>;
  location?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Enum_Leadformsubmission_Status>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type LeadFormSubmissionLocalizationsArgs = {
  filters?: InputMaybe<LeadFormSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type LeadFormSubmissionLocalizations_ConnectionArgs = {
  filters?: InputMaybe<LeadFormSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type LeadFormSubmissionEntityResponseCollection = {
  __typename?: "LeadFormSubmissionEntityResponseCollection";
  nodes: Array<LeadFormSubmission>;
  pageInfo: Pagination;
};

export type LeadFormSubmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LeadFormSubmissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<LeadFormSubmissionFiltersInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LeadFormSubmissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LeadFormSubmissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LeadFormSubmissionInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Enum_Leadformsubmission_Status>;
};

export type LeadFormSubmissionRelationResponseCollection = {
  __typename?: "LeadFormSubmissionRelationResponseCollection";
  nodes: Array<LeadFormSubmission>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createLeadFormSubmission?: Maybe<LeadFormSubmission>;
  createPage?: Maybe<Page>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteGlobal?: Maybe<DeleteMutationResponse>;
  deleteLeadFormSubmission?: Maybe<DeleteMutationResponse>;
  deletePage?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateGlobal?: Maybe<Global>;
  updateLeadFormSubmission?: Maybe<LeadFormSubmission>;
  updatePage?: Maybe<Page>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationCreateLeadFormSubmissionArgs = {
  data: LeadFormSubmissionInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteGlobalArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
};

export type MutationDeleteLeadFormSubmissionArgs = {
  documentId: Scalars["ID"]["input"];
};

export type MutationDeletePageArgs = {
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
};

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"];
};

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateLeadFormSubmissionArgs = {
  data: LeadFormSubmissionInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateUploadFileArgs = {
  id: Scalars["ID"]["input"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"]["input"];
};

export type Page = {
  __typename?: "Page";
  contentSections?: Maybe<Array<Maybe<PageContentSectionsDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<Page>>;
  localizations_connection?: Maybe<PageRelationResponseCollection>;
  metadata: ComponentMetaMetadata;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  shortName?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageLocalizations_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageContentSectionsDynamicZone =
  | ComponentSectionsBottomActions
  | ComponentSectionsFeatureColumnsGroup
  | ComponentSectionsFeatureRowsGroup
  | ComponentSectionsHero
  | ComponentSectionsLargeVideo
  | ComponentSectionsLeadForm
  | ComponentSectionsPricing
  | ComponentSectionsRichText
  | ComponentSectionsTestimonialsGroup
  | Error;

export type PageEntityResponseCollection = {
  __typename?: "PageEntityResponseCollection";
  nodes: Array<Page>;
  pageInfo: Pagination;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  metadata?: InputMaybe<ComponentMetaMetadataFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortName?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  contentSections?: InputMaybe<Array<Scalars["PageContentSectionsDynamicZoneInput"]["input"]>>;
  metadata?: InputMaybe<ComponentMetaMetadataInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  shortName?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type PageRelationResponseCollection = {
  __typename?: "PageRelationResponseCollection";
  nodes: Array<Page>;
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"]["output"];
  pageCount: Scalars["Int"]["output"];
  pageSize: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  start?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PublicationStatus {
  Draft = "DRAFT",
  Published = "PUBLISHED"
}

export type Query = {
  __typename?: "Query";
  global?: Maybe<Global>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  leadFormSubmission?: Maybe<LeadFormSubmission>;
  leadFormSubmissions: Array<Maybe<LeadFormSubmission>>;
  leadFormSubmissions_connection?: Maybe<LeadFormSubmissionEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<Page>;
  pages: Array<Maybe<Page>>;
  pages_connection?: Maybe<PageEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryGlobalArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocaleArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryLeadFormSubmissionArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryLeadFormSubmissionsArgs = {
  filters?: InputMaybe<LeadFormSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryLeadFormSubmissions_ConnectionArgs = {
  filters?: InputMaybe<LeadFormSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPageArgs = {
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFileArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: "ReviewWorkflowsWorkflow";
  contentTypes: Scalars["JSON"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<ReviewWorkflowsWorkflow>>;
  localizations_connection?: Maybe<ReviewWorkflowsWorkflowRelationResponseCollection>;
  name: Scalars["String"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ReviewWorkflowsWorkflowLocalizationsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowEntityResponseCollection";
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars["JSON"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  stages?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowRelationResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowRelationResponseCollection";
  nodes: Array<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: "ReviewWorkflowsWorkflowStage";
  color?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  localizations_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  name?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageLocalizationsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStageLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowStageEntityResponseCollection";
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  workflow?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowStageRelationResponseCollection";
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  containsi?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  eqi?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nei?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
  notContainsi?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]["output"]>;
  caption?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  ext?: Maybe<Scalars["String"]["output"]>;
  formats?: Maybe<Scalars["JSON"]["output"]>;
  hash: Scalars["String"]["output"];
  height?: Maybe<Scalars["Int"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<UploadFile>>;
  localizations_connection?: Maybe<UploadFileRelationResponseCollection>;
  mime: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  previewUrl?: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  url: Scalars["String"]["output"];
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type UploadFileLocalizationsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFileLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UploadFileFiltersInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  provider?: Scalars["String"]["input"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]["output"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"]["output"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<UsersPermissionsPermission>>;
  localizations_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsPermissionLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsPermissionLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<UsersPermissionsRole>>;
  localizations_connection?: Maybe<UsersPermissionsRoleRelationResponseCollection>;
  name: Scalars["String"]["output"];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRoleLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type UsersPermissionsRoleRelationResponseCollection = {
  __typename?: "UsersPermissionsRoleRelationResponseCollection";
  nodes: Array<UsersPermissionsRole>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  email: Scalars["String"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<UsersPermissionsUser>>;
  localizations_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  provider?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username: Scalars["String"]["output"];
};

export type UsersPermissionsUserLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsUserLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsUserFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>;
  confirmationToken?: InputMaybe<Scalars["String"]["input"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  nodes: Array<UsersPermissionsUser>;
};

export type GlobalDataQueryVariables = Exact<{ [key: string]: never }>;

export type GlobalDataQuery = { __typename?: "Query" } & {
  global?: Maybe<
    { __typename?: "Global" } & Pick<Global, "documentId"> & {
        favicon?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>;
        metadata?: Maybe<{ __typename?: "ComponentMetaMetadata" } & Pick<ComponentMetaMetadata, "id" | "metaTitle" | "metaDescription">>;
        navbar?: Maybe<
          { __typename?: "ComponentLayoutNavbar" } & Pick<ComponentLayoutNavbar, "id"> & {
              logo: { __typename?: "UploadFile" } & Pick<UploadFile, "url">;
              links?: Maybe<
                Array<
                  Maybe<
                    { __typename?: "ComponentLinksLink" } & Pick<ComponentLinksLink, "id" | "newTab" | "text" | "url"> & {
                        sublinks?: Maybe<
                          Array<Maybe<{ __typename?: "ComponentLinksSublinks" } & Pick<ComponentLinksSublinks, "id" | "newTab" | "text" | "url">>>
                        >;
                      }
                  >
                >
              >;
            }
        >;
        footer?: Maybe<
          { __typename: "ComponentLayoutFooter" } & Pick<ComponentLayoutFooter, "id" | "smallText"> & {
              logo?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>;
              columns?: Maybe<
                Array<
                  Maybe<
                    { __typename?: "ComponentElementsFooterSection" } & Pick<ComponentElementsFooterSection, "id" | "title"> & {
                        links?: Maybe<Array<Maybe<{ __typename?: "ComponentLinksLink" } & Pick<ComponentLinksLink, "id" | "text" | "url">>>>;
                      }
                  >
                >
              >;
            }
        >;
      }
  >;
};

export type StrapiPageDataQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type StrapiPageDataQuery = { __typename?: "Query" } & {
  pages: Array<
    Maybe<
      { __typename: "Page" } & Pick<Page, "documentId"> & {
          contentSections?: Maybe<
            Array<
              Maybe<
                | { __typename?: "ComponentSectionsBottomActions" }
                | { __typename?: "ComponentSectionsFeatureColumnsGroup" }
                | { __typename?: "ComponentSectionsFeatureRowsGroup" }
                | ({ __typename: "ComponentSectionsHero" } & Pick<ComponentSectionsHero, "id" | "title" | "label" | "description"> & {
                      buttons?: Maybe<
                        Array<Maybe<{ __typename?: "ComponentLinksButtonLink" } & Pick<ComponentLinksButtonLink, "id" | "text" | "newTab" | "type" | "url">>>
                      >;
                    })
                | { __typename?: "ComponentSectionsLargeVideo" }
                | { __typename?: "ComponentSectionsLeadForm" }
                | { __typename?: "ComponentSectionsPricing" }
                | { __typename?: "ComponentSectionsRichText" }
                | { __typename?: "ComponentSectionsTestimonialsGroup" }
                | { __typename?: "Error" }
              >
            >
          >;
        }
    >
  >;
};

export const GlobalDataDocument = gql`
  query GlobalData {
    global {
      documentId
      favicon {
        url
      }
      metadata {
        id
        metaTitle
        metaDescription
      }
      navbar {
        id
        logo {
          url
        }
        links {
          id
          newTab
          text
          url
          sublinks {
            id
            newTab
            text
            url
          }
        }
      }
      footer {
        __typename
        id
        logo {
          url
        }
        columns {
          id
          title
          links {
            id
            text
            url
          }
        }
        smallText
      }
    }
  }
`;

export function useGlobalDataQuery(options?: Omit<Urql.UseQueryArgs<GlobalDataQueryVariables>, "query">) {
  return Urql.useQuery<GlobalDataQuery, GlobalDataQueryVariables>({ query: GlobalDataDocument, ...options });
}
export const StrapiPageDataDocument = gql`
  query StrapiPageData($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      __typename
      documentId
      contentSections {
        ... on ComponentSectionsHero {
          __typename
          id
          title
          label
          description
          buttons {
            id
            text
            newTab
            type
            url
          }
        }
      }
    }
  }
`;

export function useStrapiPageDataQuery(options: Omit<Urql.UseQueryArgs<StrapiPageDataQueryVariables>, "query">) {
  return Urql.useQuery<StrapiPageDataQuery, StrapiPageDataQueryVariables>({ query: StrapiPageDataDocument, ...options });
}

export const GlobalData = gql`
  query GlobalData {
    global {
      documentId
      favicon {
        url
      }
      metadata {
        id
        metaTitle
        metaDescription
      }
      navbar {
        id
        logo {
          url
        }
        links {
          id
          newTab
          text
          url
          sublinks {
            id
            newTab
            text
            url
          }
        }
      }
      footer {
        __typename
        id
        logo {
          url
        }
        columns {
          id
          title
          links {
            id
            text
            url
          }
        }
        smallText
      }
    }
  }
`;
export const StrapiPageData = gql`
  query StrapiPageData($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      __typename
      documentId
      contentSections {
        ... on ComponentSectionsHero {
          __typename
          id
          title
          label
          description
          buttons {
            id
            text
            newTab
            type
            url
          }
        }
      }
    }
  }
`;
import { IntrospectionQuery } from "graphql";
export default {
  __schema: {
    queryType: {
      name: "Query"
    },
    mutationType: {
      name: "Mutation"
    },
    subscriptionType: null,
    types: [
      {
        kind: "OBJECT",
        name: "ComponentElementsFeature",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentElementsFeatureColumn",
        fields: [
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "icon",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UploadFile",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentElementsFeatureRow",
        fields: [
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "link",
            type: {
              kind: "OBJECT",
              name: "ComponentLinksLink",
              ofType: null
            },
            args: []
          },
          {
            name: "media",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UploadFile",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentElementsFooterSection",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "links",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentLinksLink",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentElementsLogos",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "logo",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentElementsNotificationBanner",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "text",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentElementsPlan",
        fields: [
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "features",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentElementsFeature",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isRecommended",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "price",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "pricePeriod",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentElementsTestimonial",
        fields: [
          {
            name: "authorName",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "authorTitle",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "link",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "logo",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "picture",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "text",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentLayoutFooter",
        fields: [
          {
            name: "columns",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentElementsFooterSection",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "logo",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "smallText",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentLayoutNavbar",
        fields: [
          {
            name: "button",
            type: {
              kind: "OBJECT",
              name: "ComponentLinksButtonLink",
              ofType: null
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "links",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentLinksLink",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "logo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UploadFile",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentLinksButton",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "text",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentLinksButtonLink",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "newTab",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "text",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "url",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentLinksLink",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "newTab",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "sublinks",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentLinksSublinks",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "text",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "url",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentLinksSublinks",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "newTab",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "text",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "url",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentMetaMetadata",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "metaDescription",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "metaTitle",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "shareImage",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "twitterCardType",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "twitterUsername",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsBottomActions",
        fields: [
          {
            name: "buttons",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentLinksButtonLink",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsFeatureColumnsGroup",
        fields: [
          {
            name: "features",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentElementsFeatureColumn",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsFeatureRowsGroup",
        fields: [
          {
            name: "features",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentElementsFeatureRow",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsHero",
        fields: [
          {
            name: "buttons",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentLinksButtonLink",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "label",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "picture",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "smallTextWithLink",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsLargeVideo",
        fields: [
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "poster",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "video",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UploadFile",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsLeadForm",
        fields: [
          {
            name: "emailPlaceholder",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "location",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "submitButton",
            type: {
              kind: "OBJECT",
              name: "ComponentLinksButton",
              ofType: null
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsPricing",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "plans",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentElementsPlan",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsRichText",
        fields: [
          {
            name: "content",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsTestimonialsGroup",
        fields: [
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "link",
            type: {
              kind: "OBJECT",
              name: "ComponentLinksLink",
              ofType: null
            },
            args: []
          },
          {
            name: "logos",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentElementsLogos",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "testimonials",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentElementsTestimonial",
                ofType: null
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "DeleteMutationResponse",
        fields: [
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Error",
        fields: [
          {
            name: "code",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "message",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "UNION",
        name: "GenericMorph",
        possibleTypes: [
          {
            kind: "OBJECT",
            name: "ComponentElementsFeature"
          },
          {
            kind: "OBJECT",
            name: "ComponentElementsFeatureColumn"
          },
          {
            kind: "OBJECT",
            name: "ComponentElementsFeatureRow"
          },
          {
            kind: "OBJECT",
            name: "ComponentElementsFooterSection"
          },
          {
            kind: "OBJECT",
            name: "ComponentElementsLogos"
          },
          {
            kind: "OBJECT",
            name: "ComponentElementsNotificationBanner"
          },
          {
            kind: "OBJECT",
            name: "ComponentElementsPlan"
          },
          {
            kind: "OBJECT",
            name: "ComponentElementsTestimonial"
          },
          {
            kind: "OBJECT",
            name: "ComponentLayoutFooter"
          },
          {
            kind: "OBJECT",
            name: "ComponentLayoutNavbar"
          },
          {
            kind: "OBJECT",
            name: "ComponentLinksButton"
          },
          {
            kind: "OBJECT",
            name: "ComponentLinksButtonLink"
          },
          {
            kind: "OBJECT",
            name: "ComponentLinksLink"
          },
          {
            kind: "OBJECT",
            name: "ComponentLinksSublinks"
          },
          {
            kind: "OBJECT",
            name: "ComponentMetaMetadata"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsBottomActions"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsFeatureColumnsGroup"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsFeatureRowsGroup"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsHero"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsLargeVideo"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsLeadForm"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsPricing"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsRichText"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsTestimonialsGroup"
          },
          {
            kind: "OBJECT",
            name: "Global"
          },
          {
            kind: "OBJECT",
            name: "I18NLocale"
          },
          {
            kind: "OBJECT",
            name: "LeadFormSubmission"
          },
          {
            kind: "OBJECT",
            name: "Page"
          },
          {
            kind: "OBJECT",
            name: "ReviewWorkflowsWorkflow"
          },
          {
            kind: "OBJECT",
            name: "ReviewWorkflowsWorkflowStage"
          },
          {
            kind: "OBJECT",
            name: "UploadFile"
          },
          {
            kind: "OBJECT",
            name: "UsersPermissionsPermission"
          },
          {
            kind: "OBJECT",
            name: "UsersPermissionsRole"
          },
          {
            kind: "OBJECT",
            name: "UsersPermissionsUser"
          }
        ]
      },
      {
        kind: "OBJECT",
        name: "Global",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "favicon",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "footer",
            type: {
              kind: "OBJECT",
              name: "ComponentLayoutFooter",
              ofType: null
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Global",
                  ofType: null
                }
              }
            },
            args: []
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "GlobalRelationResponseCollection",
              ofType: null
            },
            args: []
          },
          {
            name: "metaTitleSuffix",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "metadata",
            type: {
              kind: "OBJECT",
              name: "ComponentMetaMetadata",
              ofType: null
            },
            args: []
          },
          {
            name: "navbar",
            type: {
              kind: "OBJECT",
              name: "ComponentLayoutNavbar",
              ofType: null
            },
            args: []
          },
          {
            name: "notificationBanner",
            type: {
              kind: "OBJECT",
              name: "ComponentElementsNotificationBanner",
              ofType: null
            },
            args: []
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "GlobalRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Global",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "I18NLocale",
        fields: [
          {
            name: "code",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "I18NLocale",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "I18NLocaleRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "I18NLocaleEntityResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "I18NLocale",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "pageInfo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Pagination",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "I18NLocaleRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "I18NLocale",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "LeadFormSubmission",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "LeadFormSubmission",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "LeadFormSubmissionRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "location",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "status",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "LeadFormSubmissionEntityResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "LeadFormSubmission",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "pageInfo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Pagination",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "LeadFormSubmissionRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "LeadFormSubmission",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Mutation",
        fields: [
          {
            name: "changePassword",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsLoginPayload",
              ofType: null
            },
            args: [
              {
                name: "currentPassword",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "password",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "passwordConfirmation",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createLeadFormSubmission",
            type: {
              kind: "OBJECT",
              name: "LeadFormSubmission",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "createPage",
            type: {
              kind: "OBJECT",
              name: "Page",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "createReviewWorkflowsWorkflow",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflow",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "createReviewWorkflowsWorkflowStage",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflowStage",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "createUsersPermissionsRole",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsCreateRolePayload",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createUsersPermissionsUser",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UsersPermissionsUserEntityResponse",
                ofType: null
              }
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "deleteGlobal",
            type: {
              kind: "OBJECT",
              name: "DeleteMutationResponse",
              ofType: null
            },
            args: [
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "deleteLeadFormSubmission",
            type: {
              kind: "OBJECT",
              name: "DeleteMutationResponse",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "deletePage",
            type: {
              kind: "OBJECT",
              name: "DeleteMutationResponse",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "deleteReviewWorkflowsWorkflow",
            type: {
              kind: "OBJECT",
              name: "DeleteMutationResponse",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "deleteReviewWorkflowsWorkflowStage",
            type: {
              kind: "OBJECT",
              name: "DeleteMutationResponse",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "deleteUploadFile",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "deleteUsersPermissionsRole",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsDeleteRolePayload",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "deleteUsersPermissionsUser",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UsersPermissionsUserEntityResponse",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "emailConfirmation",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsLoginPayload",
              ofType: null
            },
            args: [
              {
                name: "confirmation",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "forgotPassword",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsPasswordPayload",
              ofType: null
            },
            args: [
              {
                name: "email",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "login",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UsersPermissionsLoginPayload",
                ofType: null
              }
            },
            args: [
              {
                name: "input",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "register",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UsersPermissionsLoginPayload",
                ofType: null
              }
            },
            args: [
              {
                name: "input",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "resetPassword",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsLoginPayload",
              ofType: null
            },
            args: [
              {
                name: "code",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "password",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "passwordConfirmation",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateGlobal",
            type: {
              kind: "OBJECT",
              name: "Global",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "updateLeadFormSubmission",
            type: {
              kind: "OBJECT",
              name: "LeadFormSubmission",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "updatePage",
            type: {
              kind: "OBJECT",
              name: "Page",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "updateReviewWorkflowsWorkflow",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflow",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "updateReviewWorkflowsWorkflowStage",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflowStage",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "updateUploadFile",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UploadFile",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "info",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "updateUsersPermissionsRole",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsUpdateRolePayload",
              ofType: null
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateUsersPermissionsUser",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UsersPermissionsUserEntityResponse",
                ofType: null
              }
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Page",
        fields: [
          {
            name: "contentSections",
            type: {
              kind: "LIST",
              ofType: {
                kind: "UNION",
                name: "PageContentSectionsDynamicZone",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Page",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "PageRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "metadata",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "ComponentMetaMetadata",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "shortName",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "slug",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "UNION",
        name: "PageContentSectionsDynamicZone",
        possibleTypes: [
          {
            kind: "OBJECT",
            name: "ComponentSectionsBottomActions"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsFeatureColumnsGroup"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsFeatureRowsGroup"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsHero"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsLargeVideo"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsLeadForm"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsPricing"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsRichText"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsTestimonialsGroup"
          },
          {
            kind: "OBJECT",
            name: "Error"
          }
        ]
      },
      {
        kind: "OBJECT",
        name: "PageEntityResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Page",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "pageInfo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Pagination",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "PageRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Page",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Pagination",
        fields: [
          {
            name: "page",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "pageCount",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "pageSize",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "total",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Query",
        fields: [
          {
            name: "global",
            type: {
              kind: "OBJECT",
              name: "Global",
              ofType: null
            },
            args: [
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "i18NLocale",
            type: {
              kind: "OBJECT",
              name: "I18NLocale",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "i18NLocales",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "I18NLocale",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "i18NLocales_connection",
            type: {
              kind: "OBJECT",
              name: "I18NLocaleEntityResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "leadFormSubmission",
            type: {
              kind: "OBJECT",
              name: "LeadFormSubmission",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "leadFormSubmissions",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "LeadFormSubmission",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "leadFormSubmissions_connection",
            type: {
              kind: "OBJECT",
              name: "LeadFormSubmissionEntityResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "me",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsMe",
              ofType: null
            },
            args: []
          },
          {
            name: "page",
            type: {
              kind: "OBJECT",
              name: "Page",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "pages",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Page",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "pages_connection",
            type: {
              kind: "OBJECT",
              name: "PageEntityResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "locale",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "reviewWorkflowsWorkflow",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflow",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "reviewWorkflowsWorkflowStage",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflowStage",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "reviewWorkflowsWorkflowStages",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "ReviewWorkflowsWorkflowStage",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "reviewWorkflowsWorkflowStages_connection",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflowStageEntityResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "reviewWorkflowsWorkflows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "ReviewWorkflowsWorkflow",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "reviewWorkflowsWorkflows_connection",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflowEntityResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "uploadFile",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "uploadFiles",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UploadFile",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "uploadFiles_connection",
            type: {
              kind: "OBJECT",
              name: "UploadFileEntityResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "usersPermissionsRole",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsRole",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "usersPermissionsRoles",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UsersPermissionsRole",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "usersPermissionsRoles_connection",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsRoleEntityResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "usersPermissionsUser",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsUser",
              ofType: null
            },
            args: [
              {
                name: "documentId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "usersPermissionsUsers",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UsersPermissionsUser",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "usersPermissionsUsers_connection",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsUserEntityResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "status",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ReviewWorkflowsWorkflow",
        fields: [
          {
            name: "contentTypes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "ReviewWorkflowsWorkflow",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflowRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "stages",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "ReviewWorkflowsWorkflowStage",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "stages_connection",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflowStageRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ReviewWorkflowsWorkflowEntityResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "ReviewWorkflowsWorkflow",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "pageInfo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Pagination",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ReviewWorkflowsWorkflowRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "ReviewWorkflowsWorkflow",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ReviewWorkflowsWorkflowStage",
        fields: [
          {
            name: "color",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "ReviewWorkflowsWorkflowStage",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflowStageRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "workflow",
            type: {
              kind: "OBJECT",
              name: "ReviewWorkflowsWorkflow",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ReviewWorkflowsWorkflowStageEntityResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "ReviewWorkflowsWorkflowStage",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "pageInfo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Pagination",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ReviewWorkflowsWorkflowStageRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "ReviewWorkflowsWorkflowStage",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UploadFile",
        fields: [
          {
            name: "alternativeText",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "caption",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "ext",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "formats",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "hash",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "height",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UploadFile",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "UploadFileRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "mime",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "previewUrl",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "provider",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "provider_metadata",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "related",
            type: {
              kind: "LIST",
              ofType: {
                kind: "UNION",
                name: "GenericMorph",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "size",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "url",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "width",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UploadFileEntityResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UploadFile",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "pageInfo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Pagination",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UploadFileRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UploadFile",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsCreateRolePayload",
        fields: [
          {
            name: "ok",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsDeleteRolePayload",
        fields: [
          {
            name: "ok",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsLoginPayload",
        fields: [
          {
            name: "jwt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "user",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UsersPermissionsMe",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsMe",
        fields: [
          {
            name: "blocked",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "confirmed",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "role",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsMeRole",
              ofType: null
            },
            args: []
          },
          {
            name: "username",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsMeRole",
        fields: [
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsPasswordPayload",
        fields: [
          {
            name: "ok",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsPermission",
        fields: [
          {
            name: "action",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UsersPermissionsPermission",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsPermissionRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "role",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsRole",
              ofType: null
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsPermissionRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UsersPermissionsPermission",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsRole",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UsersPermissionsRole",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsRoleRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "permissions",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UsersPermissionsPermission",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "permissions_connection",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsPermissionRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "users",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UsersPermissionsUser",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "users_connection",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsUserRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsRoleEntityResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UsersPermissionsRole",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "pageInfo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Pagination",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsRoleRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UsersPermissionsRole",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsUpdateRolePayload",
        fields: [
          {
            name: "ok",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsUser",
        fields: [
          {
            name: "blocked",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "confirmed",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "documentId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "email",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "locale",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "localizations",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "UsersPermissionsUser",
                  ofType: null
                }
              }
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "localizations_connection",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsUserRelationResponseCollection",
              ofType: null
            },
            args: [
              {
                name: "filters",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pagination",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "sort",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "provider",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "publishedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "role",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsRole",
              ofType: null
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "username",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsUserEntityResponse",
        fields: [
          {
            name: "data",
            type: {
              kind: "OBJECT",
              name: "UsersPermissionsUser",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsUserEntityResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UsersPermissionsUser",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "pageInfo",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Pagination",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "UsersPermissionsUserRelationResponseCollection",
        fields: [
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UsersPermissionsUser",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "SCALAR",
        name: "Any"
      }
    ],
    directives: []
  }
} as unknown as IntrospectionQuery;
