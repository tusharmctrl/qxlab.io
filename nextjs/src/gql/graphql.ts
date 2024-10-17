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
  Date: { input: any; output: any };
  DateTime: { input: Date; output: Date };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: Record<string, any>; output: Record<string, any> };
  PageContentSectionsDynamicZoneInput: { input: any; output: any };
};

export type Author = {
  __typename?: "Author";
  blogs: Array<Maybe<Blog>>;
  blogs_connection?: Maybe<BlogRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<Author>>;
  localizations_connection?: Maybe<AuthorRelationResponseCollection>;
  name?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AuthorBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type AuthorBlogs_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type AuthorLocalizationsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type AuthorLocalizations_ConnectionArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type AuthorEntityResponseCollection = {
  __typename?: "AuthorEntityResponseCollection";
  nodes: Array<Author>;
  pageInfo: Pagination;
};

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AuthorFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  blogs?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AuthorRelationResponseCollection = {
  __typename?: "AuthorRelationResponseCollection";
  nodes: Array<Author>;
};

export type Blog = {
  __typename?: "Blog";
  author?: Maybe<Author>;
  blog_content?: Maybe<Scalars["String"]["output"]>;
  blog_tags: Array<Maybe<BlogTag>>;
  blog_tags_connection?: Maybe<BlogTagRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  date?: Maybe<Scalars["Date"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<Blog>>;
  localizations_connection?: Maybe<BlogRelationResponseCollection>;
  page?: Maybe<Page>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type BlogBlog_TagsArgs = {
  filters?: InputMaybe<BlogTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogBlog_Tags_ConnectionArgs = {
  filters?: InputMaybe<BlogTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogLocalizationsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogLocalizations_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogEntityResponseCollection = {
  __typename?: "BlogEntityResponseCollection";
  nodes: Array<Blog>;
  pageInfo: Pagination;
};

export type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  author?: InputMaybe<AuthorFiltersInput>;
  blog_content?: InputMaybe<StringFilterInput>;
  blog_tags?: InputMaybe<BlogTagFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogFiltersInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  author?: InputMaybe<Scalars["ID"]["input"]>;
  blog_content?: InputMaybe<Scalars["String"]["input"]>;
  blog_tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  date?: InputMaybe<Scalars["Date"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  page?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogRelationResponseCollection = {
  __typename?: "BlogRelationResponseCollection";
  nodes: Array<Blog>;
};

export type BlogTag = {
  __typename?: "BlogTag";
  blogs: Array<Maybe<Blog>>;
  blogs_connection?: Maybe<BlogRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<BlogTag>>;
  localizations_connection?: Maybe<BlogTagRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  tag_name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type BlogTagBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogTagBlogs_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogTagLocalizationsArgs = {
  filters?: InputMaybe<BlogTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogTagLocalizations_ConnectionArgs = {
  filters?: InputMaybe<BlogTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogTagEntityResponseCollection = {
  __typename?: "BlogTagEntityResponseCollection";
  nodes: Array<BlogTag>;
  pageInfo: Pagination;
};

export type BlogTagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogTagFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogTagFiltersInput>;
  not?: InputMaybe<BlogTagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogTagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tag_name?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogTagInput = {
  blogs?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  tag_name?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogTagRelationResponseCollection = {
  __typename?: "BlogTagRelationResponseCollection";
  nodes: Array<BlogTag>;
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

export type CaseStudy = {
  __typename?: "CaseStudy";
  casestudy?: Maybe<ComponentSectionsCaseStudyDetails>;
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<CaseStudy>>;
  localizations_connection?: Maybe<CaseStudyRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type CaseStudyLocalizationsArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CaseStudyLocalizations_ConnectionArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CaseStudyEntityResponseCollection = {
  __typename?: "CaseStudyEntityResponseCollection";
  nodes: Array<CaseStudy>;
  pageInfo: Pagination;
};

export type CaseStudyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CaseStudyFiltersInput>>>;
  casestudy?: InputMaybe<ComponentSectionsCaseStudyDetailsFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CaseStudyFiltersInput>;
  not?: InputMaybe<CaseStudyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CaseStudyFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CaseStudyInput = {
  casestudy?: InputMaybe<ComponentSectionsCaseStudyDetailsInput>;
  category?: InputMaybe<Scalars["ID"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type CaseStudyRelationResponseCollection = {
  __typename?: "CaseStudyRelationResponseCollection";
  nodes: Array<CaseStudy>;
};

export type Category = {
  __typename?: "Category";
  case_studies: Array<Maybe<CaseStudy>>;
  case_studies_connection?: Maybe<CaseStudyRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<Category>>;
  localizations_connection?: Maybe<CategoryRelationResponseCollection>;
  name: Scalars["String"]["output"];
  page?: Maybe<Page>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type CategoryCase_StudiesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CategoryCase_Studies_ConnectionArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CategoryLocalizations_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CategoryEntityResponseCollection = {
  __typename?: "CategoryEntityResponseCollection";
  nodes: Array<Category>;
  pageInfo: Pagination;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  case_studies?: InputMaybe<CaseStudyFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  case_studies?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  page?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CategoryRelationResponseCollection = {
  __typename?: "CategoryRelationResponseCollection";
  nodes: Array<Category>;
};

export type ComponentElementsFeature = {
  __typename?: "ComponentElementsFeature";
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentElementsFeatureColumn = {
  __typename?: "ComponentElementsFeatureColumn";
  arrow?: Maybe<UploadFile>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
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

export type ComponentElementsSocialMediaName = {
  __typename?: "ComponentElementsSocialMediaName";
  icon?: Maybe<UploadFile>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentElementsSocialMediaNameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsSocialMediaNameFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsSocialMediaNameFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsSocialMediaNameFiltersInput>>>;
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

export type ComponentSectionsAboutSection = {
  __typename?: "ComponentSectionsAboutSection";
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  section_description?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsAboutSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsAboutSectionFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsAboutSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsAboutSectionFiltersInput>>>;
  section_description?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsAboutUs = {
  __typename?: "ComponentSectionsAboutUs";
  about_section?: Maybe<Array<Maybe<ComponentSectionsAboutSection>>>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsAboutUsAbout_SectionArgs = {
  filters?: InputMaybe<ComponentSectionsAboutSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsBlog = {
  __typename?: "ComponentSectionsBlog";
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
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

export type ComponentSectionsCard = {
  __typename?: "ComponentSectionsCard";
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  more?: Maybe<ComponentLinksLink>;
  title: Scalars["String"]["output"];
};

export type ComponentSectionsCardCollection = {
  __typename?: "ComponentSectionsCardCollection";
  card?: Maybe<Array<Maybe<ComponentSectionsCard>>>;
  id: Scalars["ID"]["output"];
};

export type ComponentSectionsCardCollectionCardArgs = {
  filters?: InputMaybe<ComponentSectionsCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsCardFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  more?: InputMaybe<ComponentLinksLinkFiltersInput>;
  not?: InputMaybe<ComponentSectionsCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsCardFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsCaseStudyDetails = {
  __typename?: "ComponentSectionsCaseStudyDetails";
  details?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<UploadFile>;
};

export type ComponentSectionsCaseStudyDetailsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsCaseStudyDetailsFiltersInput>>>;
  details?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsCaseStudyDetailsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsCaseStudyDetailsFiltersInput>>>;
};

export type ComponentSectionsCaseStudyDetailsInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  image?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentSectionsContactUs = {
  __typename?: "ComponentSectionsContactUs";
  contact_us_btn?: Maybe<ComponentLinksButtonLink>;
  id: Scalars["ID"]["output"];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsFaq = {
  __typename?: "ComponentSectionsFaq";
  downArrow?: Maybe<UploadFile>;
  faqList?: Maybe<ComponentSectionsFeatureColumnsGroup>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  upArrow?: Maybe<UploadFile>;
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

export type ComponentSectionsHeroProductPage = {
  __typename?: "ComponentSectionsHeroProductPage";
  button?: Maybe<ComponentLinksButtonLink>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  logo?: Maybe<UploadFile>;
  productImage: UploadFile;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsHomeCaseStudy = {
  __typename?: "ComponentSectionsHomeCaseStudy";
  case_study_btn?: Maybe<ComponentLinksButtonLink>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsHomeProductInfo = {
  __typename?: "ComponentSectionsHomeProductInfo";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  product_image?: Maybe<UploadFile>;
  title?: Maybe<Scalars["String"]["output"]>;
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

export type ComponentSectionsOurServices = {
  __typename?: "ComponentSectionsOurServices";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  services_cards?: Maybe<Array<Maybe<ComponentSectionsServicesCard>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsOurServicesServices_CardsArgs = {
  filters?: InputMaybe<ComponentSectionsServicesCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
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

export type ComponentSectionsProductComingHero = {
  __typename?: "ComponentSectionsProductComingHero";
  button?: Maybe<ComponentLinksButtonLink>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  logo?: Maybe<UploadFile>;
};

export type ComponentSectionsProductHowWorks = {
  __typename?: "ComponentSectionsProductHowWorks";
  id: Scalars["ID"]["output"];
  image?: Maybe<UploadFile>;
  worksFeature?: Maybe<ComponentSectionsFeatureColumnsGroup>;
};

export type ComponentSectionsProductWorks = {
  __typename?: "ComponentSectionsProductWorks";
  howItWorks?: Maybe<ComponentSectionsProductHowWorks>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsRichText = {
  __typename?: "ComponentSectionsRichText";
  content?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type ComponentSectionsServiceHero = {
  __typename?: "ComponentSectionsServiceHero";
  button?: Maybe<ComponentLinksButtonLink>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  logo?: Maybe<UploadFile>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsServicesCard = {
  __typename?: "ComponentSectionsServicesCard";
  description?: Maybe<Scalars["String"]["output"]>;
  icon: Array<Maybe<UploadFile>>;
  icon_connection?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsServicesCardIconArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsServicesCardIcon_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsServicesCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsServicesCardFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsServicesCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsServicesCardFiltersInput>>>;
};

export type ComponentSectionsSocialMediaLinks = {
  __typename?: "ComponentSectionsSocialMediaLinks";
  id: Scalars["ID"]["output"];
  social_media_name?: Maybe<Array<Maybe<ComponentElementsSocialMediaName>>>;
};

export type ComponentSectionsSocialMediaLinksSocial_Media_NameArgs = {
  filters?: InputMaybe<ComponentElementsSocialMediaNameFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsSolutionCard = {
  __typename?: "ComponentSectionsSolutionCard";
  id: Scalars["ID"]["output"];
  image_position?: Maybe<Enum_Componentsectionssolutioncard_Image_Position>;
  label?: Maybe<UploadFile>;
  solution_description?: Maybe<Scalars["String"]["output"]>;
  solution_image?: Maybe<UploadFile>;
  solution_name?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsSolutionCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSolutionCardFiltersInput>>>;
  image_position?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsSolutionCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSolutionCardFiltersInput>>>;
  solution_description?: InputMaybe<StringFilterInput>;
  solution_name?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsSolutions = {
  __typename?: "ComponentSectionsSolutions";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  solution_cards?: Maybe<Array<Maybe<ComponentSectionsSolutionCard>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSectionsSolutionsSolution_CardsArgs = {
  filters?: InputMaybe<ComponentSectionsSolutionCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSectionsTest = {
  __typename?: "ComponentSectionsTest";
  id: Scalars["ID"]["output"];
  test?: Maybe<Scalars["String"]["output"]>;
  testmed?: Maybe<Scalars["JSON"]["output"]>;
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

export type ComponentSectionsTitle = {
  __typename?: "ComponentSectionsTitle";
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  contains?: InputMaybe<Scalars["Date"]["input"]>;
  containsi?: InputMaybe<Scalars["Date"]["input"]>;
  endsWith?: InputMaybe<Scalars["Date"]["input"]>;
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  eqi?: InputMaybe<Scalars["Date"]["input"]>;
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  ne?: InputMaybe<Scalars["Date"]["input"]>;
  nei?: InputMaybe<Scalars["Date"]["input"]>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars["Date"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Date"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Date"]["input"]>;
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

export enum Enum_Componentsectionssolutioncard_Image_Position {
  Left = "left",
  Right = "right"
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
  | Author
  | Blog
  | BlogTag
  | CaseStudy
  | Category
  | ComponentElementsFeature
  | ComponentElementsFeatureColumn
  | ComponentElementsFeatureRow
  | ComponentElementsFooterSection
  | ComponentElementsLogos
  | ComponentElementsNotificationBanner
  | ComponentElementsPlan
  | ComponentElementsSocialMediaName
  | ComponentElementsTestimonial
  | ComponentLayoutFooter
  | ComponentLayoutNavbar
  | ComponentLinksButton
  | ComponentLinksButtonLink
  | ComponentLinksLink
  | ComponentLinksSublinks
  | ComponentMetaMetadata
  | ComponentSectionsAboutSection
  | ComponentSectionsAboutUs
  | ComponentSectionsBlog
  | ComponentSectionsBottomActions
  | ComponentSectionsCard
  | ComponentSectionsCardCollection
  | ComponentSectionsCaseStudyDetails
  | ComponentSectionsContactUs
  | ComponentSectionsFaq
  | ComponentSectionsFeatureColumnsGroup
  | ComponentSectionsFeatureRowsGroup
  | ComponentSectionsHero
  | ComponentSectionsHeroProductPage
  | ComponentSectionsHomeCaseStudy
  | ComponentSectionsHomeProductInfo
  | ComponentSectionsLargeVideo
  | ComponentSectionsLeadForm
  | ComponentSectionsOurServices
  | ComponentSectionsPricing
  | ComponentSectionsProductComingHero
  | ComponentSectionsProductHowWorks
  | ComponentSectionsProductWorks
  | ComponentSectionsRichText
  | ComponentSectionsServiceHero
  | ComponentSectionsServicesCard
  | ComponentSectionsSocialMediaLinks
  | ComponentSectionsSolutionCard
  | ComponentSectionsSolutions
  | ComponentSectionsTest
  | ComponentSectionsTestimonialsGroup
  | ComponentSectionsTitle
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

export type Page = {
  __typename?: "Page";
  blogs: Array<Maybe<Blog>>;
  blogs_connection?: Maybe<BlogRelationResponseCollection>;
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryRelationResponseCollection>;
  contentSections?: Maybe<Array<Maybe<PageContentSectionsDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Array<Maybe<Page>>;
  localizations_connection?: Maybe<PageRelationResponseCollection>;
  metadata: ComponentMetaMetadata;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  shortName?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PageBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageBlogs_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
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
  | ComponentElementsFeature
  | ComponentElementsFeatureColumn
  | ComponentElementsFeatureRow
  | ComponentElementsFooterSection
  | ComponentElementsLogos
  | ComponentElementsNotificationBanner
  | ComponentElementsPlan
  | ComponentElementsSocialMediaName
  | ComponentElementsTestimonial
  | ComponentLayoutFooter
  | ComponentLayoutNavbar
  | ComponentLinksButton
  | ComponentLinksButtonLink
  | ComponentLinksLink
  | ComponentLinksSublinks
  | ComponentMetaMetadata
  | ComponentSectionsAboutSection
  | ComponentSectionsAboutUs
  | ComponentSectionsBlog
  | ComponentSectionsBottomActions
  | ComponentSectionsCard
  | ComponentSectionsCardCollection
  | ComponentSectionsCaseStudyDetails
  | ComponentSectionsContactUs
  | ComponentSectionsFaq
  | ComponentSectionsFeatureColumnsGroup
  | ComponentSectionsFeatureRowsGroup
  | ComponentSectionsHero
  | ComponentSectionsHeroProductPage
  | ComponentSectionsHomeCaseStudy
  | ComponentSectionsHomeProductInfo
  | ComponentSectionsLargeVideo
  | ComponentSectionsLeadForm
  | ComponentSectionsOurServices
  | ComponentSectionsPricing
  | ComponentSectionsProductComingHero
  | ComponentSectionsProductHowWorks
  | ComponentSectionsProductWorks
  | ComponentSectionsRichText
  | ComponentSectionsServiceHero
  | ComponentSectionsServicesCard
  | ComponentSectionsSocialMediaLinks
  | ComponentSectionsSolutionCard
  | ComponentSectionsSolutions
  | ComponentSectionsTest
  | ComponentSectionsTestimonialsGroup
  | ComponentSectionsTitle
  | Error;

export type PageEntityResponseCollection = {
  __typename?: "PageEntityResponseCollection";
  nodes: Array<Page>;
  pageInfo: Pagination;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  categories?: InputMaybe<CategoryFiltersInput>;
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
  blogs?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
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

export type CmsMutation = {
  __typename?: "cmsMutation";
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAuthor?: Maybe<Author>;
  createBlog?: Maybe<Blog>;
  createBlogTag?: Maybe<BlogTag>;
  createCaseStudy?: Maybe<CaseStudy>;
  createCategory?: Maybe<Category>;
  createLeadFormSubmission?: Maybe<LeadFormSubmission>;
  createPage?: Maybe<Page>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAuthor?: Maybe<DeleteMutationResponse>;
  deleteBlog?: Maybe<DeleteMutationResponse>;
  deleteBlogTag?: Maybe<DeleteMutationResponse>;
  deleteCaseStudy?: Maybe<DeleteMutationResponse>;
  deleteCategory?: Maybe<DeleteMutationResponse>;
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
  updateAuthor?: Maybe<Author>;
  updateBlog?: Maybe<Blog>;
  updateBlogTag?: Maybe<BlogTag>;
  updateCaseStudy?: Maybe<CaseStudy>;
  updateCategory?: Maybe<Category>;
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

export type CmsMutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type CmsMutationCreateAuthorArgs = {
  data: AuthorInput;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreateBlogArgs = {
  data: BlogInput;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreateBlogTagArgs = {
  data: BlogTagInput;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreateCaseStudyArgs = {
  data: CaseStudyInput;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreateCategoryArgs = {
  data: CategoryInput;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreateLeadFormSubmissionArgs = {
  data: LeadFormSubmissionInput;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type CmsMutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type CmsMutationDeleteAuthorArgs = {
  documentId: Scalars["ID"]["input"];
};

export type CmsMutationDeleteBlogArgs = {
  documentId: Scalars["ID"]["input"];
};

export type CmsMutationDeleteBlogTagArgs = {
  documentId: Scalars["ID"]["input"];
};

export type CmsMutationDeleteCaseStudyArgs = {
  documentId: Scalars["ID"]["input"];
};

export type CmsMutationDeleteCategoryArgs = {
  documentId: Scalars["ID"]["input"];
};

export type CmsMutationDeleteGlobalArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
};

export type CmsMutationDeleteLeadFormSubmissionArgs = {
  documentId: Scalars["ID"]["input"];
};

export type CmsMutationDeletePageArgs = {
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
};

export type CmsMutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"];
};

export type CmsMutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"];
};

export type CmsMutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"];
};

export type CmsMutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type CmsMutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
};

export type CmsMutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"];
};

export type CmsMutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type CmsMutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type CmsMutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type CmsMutationResetPasswordArgs = {
  code: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type CmsMutationUpdateAuthorArgs = {
  data: AuthorInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateBlogArgs = {
  data: BlogInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateBlogTagArgs = {
  data: BlogTagInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateCaseStudyArgs = {
  data: CaseStudyInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateCategoryArgs = {
  data: CategoryInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateGlobalArgs = {
  data: GlobalInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateLeadFormSubmissionArgs = {
  data: LeadFormSubmissionInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsMutationUpdateUploadFileArgs = {
  id: Scalars["ID"]["input"];
  info?: InputMaybe<FileInfoInput>;
};

export type CmsMutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"]["input"];
};

export type CmsMutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"]["input"];
};

export type CmsQuery = {
  __typename?: "cmsQuery";
  author?: Maybe<Author>;
  authors: Array<Maybe<Author>>;
  authors_connection?: Maybe<AuthorEntityResponseCollection>;
  blog?: Maybe<Blog>;
  blogTag?: Maybe<BlogTag>;
  blogTags: Array<Maybe<BlogTag>>;
  blogTags_connection?: Maybe<BlogTagEntityResponseCollection>;
  blogs: Array<Maybe<Blog>>;
  blogs_connection?: Maybe<BlogEntityResponseCollection>;
  caseStudies: Array<Maybe<CaseStudy>>;
  caseStudies_connection?: Maybe<CaseStudyEntityResponseCollection>;
  caseStudy?: Maybe<CaseStudy>;
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<Category>;
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

export type CmsQueryAuthorArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryAuthors_ConnectionArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryBlogArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryBlogTagArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryBlogTagsArgs = {
  filters?: InputMaybe<BlogTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryBlogTags_ConnectionArgs = {
  filters?: InputMaybe<BlogTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryBlogs_ConnectionArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryCaseStudiesArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryCaseStudies_ConnectionArgs = {
  filters?: InputMaybe<CaseStudyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryCaseStudyArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryCategoryArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryGlobalArgs = {
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryI18NLocaleArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryLeadFormSubmissionArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryLeadFormSubmissionsArgs = {
  filters?: InputMaybe<LeadFormSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryLeadFormSubmissions_ConnectionArgs = {
  filters?: InputMaybe<LeadFormSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryPageArgs = {
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUploadFileArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUsersPermissionsRoleArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUsersPermissionsUserArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type CmsQueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  cms?: Maybe<CmsMutation>;
};

export type Query_Root = {
  __typename?: "query_root";
  cms?: Maybe<CmsQuery>;
};

export type GlobalDataQueryVariables = Exact<{ [key: string]: never }>;

export type GlobalDataQuery = { __typename?: "query_root" } & {
  cms?: Maybe<
    { __typename?: "cmsQuery" } & {
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
    }
  >;
};

export type StrapiPageDataQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type StrapiPageDataQuery = { __typename?: "query_root" } & {
  cms?: Maybe<
    { __typename?: "cmsQuery" } & {
      pages: Array<
        Maybe<
          { __typename: "Page" } & Pick<Page, "documentId"> & {
              contentSections?: Maybe<
                Array<
                  Maybe<
                    | { __typename: "ComponentElementsFeature" }
                    | { __typename: "ComponentElementsFeatureColumn" }
                    | { __typename: "ComponentElementsFeatureRow" }
                    | { __typename: "ComponentElementsFooterSection" }
                    | { __typename: "ComponentElementsLogos" }
                    | { __typename: "ComponentElementsNotificationBanner" }
                    | { __typename: "ComponentElementsPlan" }
                    | { __typename: "ComponentElementsSocialMediaName" }
                    | { __typename: "ComponentElementsTestimonial" }
                    | { __typename: "ComponentLayoutFooter" }
                    | { __typename: "ComponentLayoutNavbar" }
                    | { __typename: "ComponentLinksButton" }
                    | { __typename: "ComponentLinksButtonLink" }
                    | { __typename: "ComponentLinksLink" }
                    | { __typename: "ComponentLinksSublinks" }
                    | { __typename: "ComponentMetaMetadata" }
                    | { __typename: "ComponentSectionsAboutSection" }
                    | { __typename: "ComponentSectionsAboutUs" }
                    | { __typename: "ComponentSectionsBlog" }
                    | { __typename: "ComponentSectionsBottomActions" }
                    | { __typename: "ComponentSectionsCard" }
                    | ({ __typename: "ComponentSectionsCardCollection" } & Pick<ComponentSectionsCardCollection, "id"> & {
                          card?: Maybe<
                            Array<
                              Maybe<
                                { __typename?: "ComponentSectionsCard" } & Pick<ComponentSectionsCard, "id" | "label" | "title" | "description"> & {
                                    more?: Maybe<{ __typename?: "ComponentLinksLink" } & Pick<ComponentLinksLink, "id" | "url" | "text" | "newTab">>;
                                  }
                              >
                            >
                          >;
                        })
                    | { __typename: "ComponentSectionsCaseStudyDetails" }
                    | ({ __typename: "ComponentSectionsContactUs" } & Pick<ComponentSectionsContactUs, "id" | "title"> & {
                          image?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>;
                          contact_us_btn?: Maybe<{ __typename?: "ComponentLinksButtonLink" } & Pick<ComponentLinksButtonLink, "id" | "text" | "url">>;
                        })
                    | ({ __typename: "ComponentSectionsFaq" } & Pick<ComponentSectionsFaq, "id" | "title"> & {
                          upArrow?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url" | "name">>;
                          downArrow?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url" | "name">>;
                          faqList?: Maybe<
                            { __typename?: "ComponentSectionsFeatureColumnsGroup" } & {
                              features?: Maybe<
                                Array<
                                  Maybe<
                                    { __typename?: "ComponentElementsFeatureColumn" } & Pick<ComponentElementsFeatureColumn, "id" | "title" | "description"> & {
                                        arrow?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url" | "name">>;
                                      }
                                  >
                                >
                              >;
                            }
                          >;
                        })
                    | { __typename: "ComponentSectionsFeatureColumnsGroup" }
                    | { __typename: "ComponentSectionsFeatureRowsGroup" }
                    | ({ __typename: "ComponentSectionsHero" } & Pick<ComponentSectionsHero, "id" | "title" | "label" | "description"> & {
                          buttons?: Maybe<
                            Array<
                              Maybe<{ __typename?: "ComponentLinksButtonLink" } & Pick<ComponentLinksButtonLink, "id" | "text" | "newTab" | "type" | "url">>
                            >
                          >;
                        })
                    | ({ __typename: "ComponentSectionsHeroProductPage" } & Pick<ComponentSectionsHeroProductPage, "id" | "title" | "description"> & {
                          logo?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "name" | "url">>;
                          productImage: { __typename?: "UploadFile" } & Pick<UploadFile, "name" | "url">;
                          button?: Maybe<
                            { __typename?: "ComponentLinksButtonLink" } & Pick<ComponentLinksButtonLink, "text" | "id" | "newTab" | "url" | "type">
                          >;
                        })
                    | ({ __typename: "ComponentSectionsHomeCaseStudy" } & Pick<ComponentSectionsHomeCaseStudy, "id" | "title" | "description"> & {
                          case_study_btn?: Maybe<{ __typename?: "ComponentLinksButtonLink" } & Pick<ComponentLinksButtonLink, "id" | "text" | "type" | "url">>;
                          image?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>;
                        })
                    | ({ __typename: "ComponentSectionsHomeProductInfo" } & Pick<ComponentSectionsHomeProductInfo, "id" | "title" | "description"> & {
                          product_image?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>;
                        })
                    | { __typename: "ComponentSectionsLargeVideo" }
                    | { __typename: "ComponentSectionsLeadForm" }
                    | ({ __typename: "ComponentSectionsOurServices" } & Pick<ComponentSectionsOurServices, "id" | "title" | "description"> & {
                          services_cards?: Maybe<
                            Array<
                              Maybe<
                                { __typename?: "ComponentSectionsServicesCard" } & Pick<ComponentSectionsServicesCard, "id" | "name" | "description"> & {
                                    icon: Array<Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>>;
                                  }
                              >
                            >
                          >;
                        })
                    | { __typename: "ComponentSectionsPricing" }
                    | ({ __typename: "ComponentSectionsProductComingHero" } & Pick<ComponentSectionsProductComingHero, "id" | "description"> & {
                          logo?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url" | "name">>;
                          button?: Maybe<
                            { __typename?: "ComponentLinksButtonLink" } & Pick<ComponentLinksButtonLink, "id" | "text" | "url" | "type" | "newTab">
                          >;
                        })
                    | { __typename: "ComponentSectionsProductHowWorks" }
                    | ({ __typename: "ComponentSectionsProductWorks" } & Pick<ComponentSectionsProductWorks, "id" | "title"> & {
                          howItWorks?: Maybe<
                            { __typename?: "ComponentSectionsProductHowWorks" } & Pick<ComponentSectionsProductHowWorks, "id"> & {
                                image?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "name" | "url">>;
                                worksFeature?: Maybe<
                                  { __typename?: "ComponentSectionsFeatureColumnsGroup" } & {
                                    features?: Maybe<
                                      Array<
                                        Maybe<
                                          { __typename?: "ComponentElementsFeatureColumn" } & Pick<
                                            ComponentElementsFeatureColumn,
                                            "id" | "title" | "description"
                                          >
                                        >
                                      >
                                    >;
                                  }
                                >;
                              }
                          >;
                        })
                    | { __typename: "ComponentSectionsRichText" }
                    | ({ __typename: "ComponentSectionsServiceHero" } & Pick<ComponentSectionsServiceHero, "title" | "description"> & {
                          button?: Maybe<
                            { __typename?: "ComponentLinksButtonLink" } & Pick<ComponentLinksButtonLink, "id" | "newTab" | "text" | "type" | "url">
                          >;
                        })
                    | { __typename: "ComponentSectionsServicesCard" }
                    | { __typename: "ComponentSectionsSocialMediaLinks" }
                    | { __typename: "ComponentSectionsSolutionCard" }
                    | ({ __typename: "ComponentSectionsSolutions" } & Pick<ComponentSectionsSolutions, "id" | "title" | "description"> & {
                          solution_cards?: Maybe<
                            Array<
                              Maybe<
                                { __typename?: "ComponentSectionsSolutionCard" } & Pick<
                                  ComponentSectionsSolutionCard,
                                  "id" | "image_position" | "solution_name" | "solution_description"
                                > & {
                                    label?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>;
                                    solution_image?: Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>;
                                  }
                              >
                            >
                          >;
                        })
                    | { __typename: "ComponentSectionsTest" }
                    | { __typename: "ComponentSectionsTestimonialsGroup" }
                    | { __typename: "ComponentSectionsTitle" }
                    | { __typename: "Error" }
                  >
                >
              >;
            }
        >
      >;
    }
  >;
};

export const GlobalDataDocument = gql`
  query GlobalData {
    cms {
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
  }
`;

export function useGlobalDataQuery(options?: Omit<Urql.UseQueryArgs<GlobalDataQueryVariables>, "query">) {
  return Urql.useQuery<GlobalDataQuery, GlobalDataQueryVariables>({ query: GlobalDataDocument, ...options });
}
export const StrapiPageDataDocument = gql`
  query StrapiPageData($slug: String!) {
    cms {
      pages(filters: { slug: { eq: $slug } }) {
        __typename
        documentId
        contentSections {
          __typename
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
          ... on ComponentSectionsHomeProductInfo {
            id
            title
            description
            product_image {
              url
            }
          }
          ... on ComponentSectionsHomeCaseStudy {
            id
            title
            description
            case_study_btn {
              id
              text
              type
              url
            }
            image {
              url
            }
          }
          ... on ComponentSectionsCardCollection {
            __typename
            id
            card {
              id
              label
              title
              description
              more {
                id
                url
                text
                newTab
              }
            }
          }
          ... on ComponentSectionsServiceHero {
            title
            button {
              id
              newTab
              text
              type
              url
            }
            description
            __typename
          }
          ... on ComponentSectionsOurServices {
            id
            title
            description
            services_cards {
              id
              name
              icon {
                url
              }
              description
            }
          }
          ... on ComponentSectionsContactUs {
            id
            title
            image {
              url
            }
            contact_us_btn {
              id
              text
              url
            }
          }
          ... on ComponentSectionsSolutions {
            id
            title
            description
            title
            solution_cards {
              id
              label {
                url
              }
              image_position
              solution_name
              solution_description
              solution_image {
                url
              }
            }
          }
          ... on ComponentSectionsHeroProductPage {
            id
            logo {
              name
              url
            }
            title
            productImage {
              name
              url
            }
            description
            button {
              text
              id
              newTab
              url
              type
            }
          }
          ... on ComponentSectionsProductWorks {
            id
            title
            howItWorks {
              id
              image {
                name
                url
              }
              worksFeature {
                features {
                  id
                  title
                  description
                }
              }
            }
          }
          ... on ComponentSectionsFaq {
            __typename
            id
            title
            upArrow {
              url
              name
            }
            downArrow {
              url
              name
            }
            faqList {
              features {
                id
                arrow {
                  url
                  name
                }
                title
                description
              }
            }
          }
          ... on ComponentSectionsProductComingHero {
            id
            logo {
              url
              name
            }
            description
            button {
              id
              text
              url
              type
              newTab
            }
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
    cms {
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
  }
`;
export const StrapiPageData = gql`
  query StrapiPageData($slug: String!) {
    cms {
      pages(filters: { slug: { eq: $slug } }) {
        __typename
        documentId
        contentSections {
          __typename
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
          ... on ComponentSectionsHomeProductInfo {
            id
            title
            description
            product_image {
              url
            }
          }
          ... on ComponentSectionsHomeCaseStudy {
            id
            title
            description
            case_study_btn {
              id
              text
              type
              url
            }
            image {
              url
            }
          }
          ... on ComponentSectionsCardCollection {
            __typename
            id
            card {
              id
              label
              title
              description
              more {
                id
                url
                text
                newTab
              }
            }
          }
          ... on ComponentSectionsServiceHero {
            title
            button {
              id
              newTab
              text
              type
              url
            }
            description
            __typename
          }
          ... on ComponentSectionsOurServices {
            id
            title
            description
            services_cards {
              id
              name
              icon {
                url
              }
              description
            }
          }
          ... on ComponentSectionsContactUs {
            id
            title
            image {
              url
            }
            contact_us_btn {
              id
              text
              url
            }
          }
          ... on ComponentSectionsSolutions {
            id
            title
            description
            title
            solution_cards {
              id
              label {
                url
              }
              image_position
              solution_name
              solution_description
              solution_image {
                url
              }
            }
          }
          ... on ComponentSectionsHeroProductPage {
            id
            logo {
              name
              url
            }
            title
            productImage {
              name
              url
            }
            description
            button {
              text
              id
              newTab
              url
              type
            }
          }
          ... on ComponentSectionsProductWorks {
            id
            title
            howItWorks {
              id
              image {
                name
                url
              }
              worksFeature {
                features {
                  id
                  title
                  description
                }
              }
            }
          }
          ... on ComponentSectionsFaq {
            __typename
            id
            title
            upArrow {
              url
              name
            }
            downArrow {
              url
              name
            }
            faqList {
              features {
                id
                arrow {
                  url
                  name
                }
                title
                description
              }
            }
          }
          ... on ComponentSectionsProductComingHero {
            id
            logo {
              url
              name
            }
            description
            button {
              id
              text
              url
              type
              newTab
            }
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
      name: "query_root"
    },
    mutationType: {
      name: "mutation_root"
    },
    subscriptionType: null,
    types: [
      {
        kind: "OBJECT",
        name: "Author",
        fields: [
          {
            name: "blogs",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Blog",
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
            name: "blogs_connection",
            type: {
              kind: "OBJECT",
              name: "BlogRelationResponseCollection",
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
                  name: "Author",
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
              name: "AuthorRelationResponseCollection",
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
        name: "AuthorEntityResponseCollection",
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
                    name: "Author",
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
        name: "AuthorRelationResponseCollection",
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
                    name: "Author",
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
        name: "Blog",
        fields: [
          {
            name: "author",
            type: {
              kind: "OBJECT",
              name: "Author",
              ofType: null
            },
            args: []
          },
          {
            name: "blog_content",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "blog_tags",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "BlogTag",
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
            name: "blog_tags_connection",
            type: {
              kind: "OBJECT",
              name: "BlogTagRelationResponseCollection",
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
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "date",
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
                  name: "Blog",
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
              name: "BlogRelationResponseCollection",
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
            name: "page",
            type: {
              kind: "OBJECT",
              name: "Page",
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
            name: "title",
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
        name: "BlogEntityResponseCollection",
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
                    name: "Blog",
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
        name: "BlogRelationResponseCollection",
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
                    name: "Blog",
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
        name: "BlogTag",
        fields: [
          {
            name: "blogs",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Blog",
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
            name: "blogs_connection",
            type: {
              kind: "OBJECT",
              name: "BlogRelationResponseCollection",
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
                  name: "BlogTag",
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
              name: "BlogTagRelationResponseCollection",
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
            name: "tag_name",
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
        name: "BlogTagEntityResponseCollection",
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
                    name: "BlogTag",
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
        name: "BlogTagRelationResponseCollection",
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
                    name: "BlogTag",
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
        name: "CaseStudy",
        fields: [
          {
            name: "casestudy",
            type: {
              kind: "OBJECT",
              name: "ComponentSectionsCaseStudyDetails",
              ofType: null
            },
            args: []
          },
          {
            name: "category",
            type: {
              kind: "OBJECT",
              name: "Category",
              ofType: null
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
                  name: "CaseStudy",
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
              name: "CaseStudyRelationResponseCollection",
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
            name: "title",
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
        name: "CaseStudyEntityResponseCollection",
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
                    name: "CaseStudy",
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
        name: "CaseStudyRelationResponseCollection",
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
                    name: "CaseStudy",
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
        name: "Category",
        fields: [
          {
            name: "case_studies",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "CaseStudy",
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
            name: "case_studies_connection",
            type: {
              kind: "OBJECT",
              name: "CaseStudyRelationResponseCollection",
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
                  name: "Category",
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
              name: "CategoryRelationResponseCollection",
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
            name: "page",
            type: {
              kind: "OBJECT",
              name: "Page",
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
        name: "CategoryEntityResponseCollection",
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
                    name: "Category",
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
        name: "CategoryRelationResponseCollection",
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
                    name: "Category",
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
            name: "arrow",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
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
        name: "ComponentElementsSocialMediaName",
        fields: [
          {
            name: "icon",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
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
        name: "ComponentSectionsAboutSection",
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
            name: "label",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "section_description",
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
        name: "ComponentSectionsAboutUs",
        fields: [
          {
            name: "about_section",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentSectionsAboutSection",
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
        name: "ComponentSectionsBlog",
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
        name: "ComponentSectionsCard",
        fields: [
          {
            name: "description",
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
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "more",
            type: {
              kind: "OBJECT",
              name: "ComponentLinksLink",
              ofType: null
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
        name: "ComponentSectionsCardCollection",
        fields: [
          {
            name: "card",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentSectionsCard",
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
        name: "ComponentSectionsCaseStudyDetails",
        fields: [
          {
            name: "details",
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
            name: "image",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsContactUs",
        fields: [
          {
            name: "contact_us_btn",
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
            name: "image",
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
        name: "ComponentSectionsFaq",
        fields: [
          {
            name: "downArrow",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "faqList",
            type: {
              kind: "OBJECT",
              name: "ComponentSectionsFeatureColumnsGroup",
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
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "upArrow",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
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
        name: "ComponentSectionsHeroProductPage",
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
            name: "logo",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "productImage",
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
        name: "ComponentSectionsHomeCaseStudy",
        fields: [
          {
            name: "case_study_btn",
            type: {
              kind: "OBJECT",
              name: "ComponentLinksButtonLink",
              ofType: null
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
            name: "image",
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
        name: "ComponentSectionsHomeProductInfo",
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
            name: "product_image",
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
        name: "ComponentSectionsOurServices",
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
            name: "services_cards",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentSectionsServicesCard",
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
        name: "ComponentSectionsProductComingHero",
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
            name: "logo",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsProductHowWorks",
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
            name: "image",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "worksFeature",
            type: {
              kind: "OBJECT",
              name: "ComponentSectionsFeatureColumnsGroup",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsProductWorks",
        fields: [
          {
            name: "howItWorks",
            type: {
              kind: "OBJECT",
              name: "ComponentSectionsProductHowWorks",
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
        name: "ComponentSectionsServiceHero",
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
        name: "ComponentSectionsServicesCard",
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
            name: "icon_connection",
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
        name: "ComponentSectionsSocialMediaLinks",
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
            name: "social_media_name",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentElementsSocialMediaName",
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
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ComponentSectionsSolutionCard",
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
            name: "image_position",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "label",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "solution_description",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "solution_image",
            type: {
              kind: "OBJECT",
              name: "UploadFile",
              ofType: null
            },
            args: []
          },
          {
            name: "solution_name",
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
        name: "ComponentSectionsSolutions",
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
            name: "solution_cards",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "ComponentSectionsSolutionCard",
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
        name: "ComponentSectionsTest",
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
            name: "test",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "testmed",
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
        name: "ComponentSectionsTitle",
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
            name: "Author"
          },
          {
            kind: "OBJECT",
            name: "Blog"
          },
          {
            kind: "OBJECT",
            name: "BlogTag"
          },
          {
            kind: "OBJECT",
            name: "CaseStudy"
          },
          {
            kind: "OBJECT",
            name: "Category"
          },
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
            name: "ComponentElementsSocialMediaName"
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
            name: "ComponentSectionsAboutSection"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsAboutUs"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsBlog"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsBottomActions"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsCard"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsCardCollection"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsCaseStudyDetails"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsContactUs"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsFaq"
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
            name: "ComponentSectionsHeroProductPage"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsHomeCaseStudy"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsHomeProductInfo"
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
            name: "ComponentSectionsOurServices"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsPricing"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsProductComingHero"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsProductHowWorks"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsProductWorks"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsRichText"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsServiceHero"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsServicesCard"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsSocialMediaLinks"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsSolutionCard"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsSolutions"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsTest"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsTestimonialsGroup"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsTitle"
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
        name: "Page",
        fields: [
          {
            name: "blogs",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Blog",
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
            name: "blogs_connection",
            type: {
              kind: "OBJECT",
              name: "BlogRelationResponseCollection",
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
            name: "categories",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Category",
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
            name: "categories_connection",
            type: {
              kind: "OBJECT",
              name: "CategoryRelationResponseCollection",
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
            name: "ComponentElementsSocialMediaName"
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
            name: "ComponentSectionsAboutSection"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsAboutUs"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsBlog"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsBottomActions"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsCard"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsCardCollection"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsCaseStudyDetails"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsContactUs"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsFaq"
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
            name: "ComponentSectionsHeroProductPage"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsHomeCaseStudy"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsHomeProductInfo"
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
            name: "ComponentSectionsOurServices"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsPricing"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsProductComingHero"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsProductHowWorks"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsProductWorks"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsRichText"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsServiceHero"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsServicesCard"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsSocialMediaLinks"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsSolutionCard"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsSolutions"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsTest"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsTestimonialsGroup"
          },
          {
            kind: "OBJECT",
            name: "ComponentSectionsTitle"
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
        kind: "OBJECT",
        name: "cmsMutation",
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
            name: "createAuthor",
            type: {
              kind: "OBJECT",
              name: "Author",
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
            name: "createBlog",
            type: {
              kind: "OBJECT",
              name: "Blog",
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
            name: "createBlogTag",
            type: {
              kind: "OBJECT",
              name: "BlogTag",
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
            name: "createCaseStudy",
            type: {
              kind: "OBJECT",
              name: "CaseStudy",
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
            name: "createCategory",
            type: {
              kind: "OBJECT",
              name: "Category",
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
            name: "deleteAuthor",
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
            name: "deleteBlog",
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
            name: "deleteBlogTag",
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
            name: "deleteCaseStudy",
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
            name: "deleteCategory",
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
            name: "updateAuthor",
            type: {
              kind: "OBJECT",
              name: "Author",
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
            name: "updateBlog",
            type: {
              kind: "OBJECT",
              name: "Blog",
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
            name: "updateBlogTag",
            type: {
              kind: "OBJECT",
              name: "BlogTag",
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
            name: "updateCaseStudy",
            type: {
              kind: "OBJECT",
              name: "CaseStudy",
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
            name: "updateCategory",
            type: {
              kind: "OBJECT",
              name: "Category",
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
        name: "cmsQuery",
        fields: [
          {
            name: "author",
            type: {
              kind: "OBJECT",
              name: "Author",
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
            name: "authors",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Author",
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
            name: "authors_connection",
            type: {
              kind: "OBJECT",
              name: "AuthorEntityResponseCollection",
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
            name: "blog",
            type: {
              kind: "OBJECT",
              name: "Blog",
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
            name: "blogTag",
            type: {
              kind: "OBJECT",
              name: "BlogTag",
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
            name: "blogTags",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "BlogTag",
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
            name: "blogTags_connection",
            type: {
              kind: "OBJECT",
              name: "BlogTagEntityResponseCollection",
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
            name: "blogs",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Blog",
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
            name: "blogs_connection",
            type: {
              kind: "OBJECT",
              name: "BlogEntityResponseCollection",
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
            name: "caseStudies",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "CaseStudy",
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
            name: "caseStudies_connection",
            type: {
              kind: "OBJECT",
              name: "CaseStudyEntityResponseCollection",
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
            name: "caseStudy",
            type: {
              kind: "OBJECT",
              name: "CaseStudy",
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
            name: "categories",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "OBJECT",
                  name: "Category",
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
            name: "categories_connection",
            type: {
              kind: "OBJECT",
              name: "CategoryEntityResponseCollection",
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
            name: "category",
            type: {
              kind: "OBJECT",
              name: "Category",
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
        name: "mutation_root",
        fields: [
          {
            name: "cms",
            type: {
              kind: "OBJECT",
              name: "cmsMutation",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "query_root",
        fields: [
          {
            name: "cms",
            type: {
              kind: "OBJECT",
              name: "cmsQuery",
              ofType: null
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
