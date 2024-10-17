import type { Struct, Schema } from '@strapi/strapi';

export interface MetaMetadata extends Struct.ComponentSchema {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
    twitterCardType: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Schema.Attribute.DefaultTo<'summary'>;
    twitterUsername: Schema.Attribute.String;
  };
}

export interface SectionsTitle extends Struct.ComponentSchema {
  collectionName: 'components_sections_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonialsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    name: 'TestimonialsGroup';
    displayName: 'Testimonials group';
    icon: 'user-friends';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'links.link', false>;
    logos: Schema.Attribute.Component<'elements.logos', true>;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SectionsTest extends Struct.ComponentSchema {
  collectionName: 'components_sections_tests';
  info: {
    displayName: 'test';
    description: '';
  };
  attributes: {
    test: Schema.Attribute.String;
    testmed: Schema.Attribute.Blocks;
  };
}

export interface SectionsSolutions extends Struct.ComponentSchema {
  collectionName: 'components_sections_solutions';
  info: {
    displayName: 'Solutions';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    solution_cards: Schema.Attribute.Component<'sections.solution-card', true>;
  };
}

export interface SectionsSolutionCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_solution_cards';
  info: {
    displayName: 'Solution Card';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    solution_name: Schema.Attribute.String;
    solution_description: Schema.Attribute.RichText;
    image_position: Schema.Attribute.Enumeration<['left', 'right']>;
    solution_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SectionsSocialMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_sections_social_media_links';
  info: {
    displayName: 'Social Media Links';
  };
  attributes: {
    social_media_name: Schema.Attribute.Component<
      'elements.social-media-name',
      true
    >;
  };
}

export interface SectionsServicesCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_cards';
  info: {
    displayName: 'Services Card';
  };
  attributes: {
    name: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.RichText;
  };
}

export interface SectionsServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_heroes';
  info: {
    displayName: 'Service Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'links.button-link', false>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SectionsProductWorks extends Struct.ComponentSchema {
  collectionName: 'components_sections_product_works';
  info: {
    displayName: 'product-works';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    howItWorks: Schema.Attribute.Component<'sections.product-how-works', false>;
  };
}

export interface SectionsProductHowWorks extends Struct.ComponentSchema {
  collectionName: 'components_sections_product_how_works';
  info: {
    displayName: 'productHowWorks';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    worksFeature: Schema.Attribute.Component<
      'sections.feature-columns-group',
      false
    >;
  };
}

export interface SectionsProductComingHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_product_coming_heroes';
  info: {
    displayName: 'product coming hero';
    description: '';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'links.button-link', false>;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    name: 'Pricing';
    displayName: 'Pricing';
    icon: 'dollar-sign';
  };
  attributes: {
    title: Schema.Attribute.String;
    plans: Schema.Attribute.Component<'elements.plan', true>;
  };
}

export interface SectionsOurServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_services';
  info: {
    displayName: 'Our Services';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    services_cards: Schema.Attribute.Component<'sections.services-card', true>;
  };
}

export interface SectionsLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<'links.button', false>;
    location: Schema.Attribute.String;
  };
}

export interface SectionsLargeVideo extends Struct.ComponentSchema {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    poster: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsHomeProductInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_product_infos';
  info: {
    displayName: 'Home Product Info';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    product_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SectionsHomeCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_case_studies';
  info: {
    displayName: 'Home Case Study';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    case_study_btn: Schema.Attribute.Component<'links.button-link', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
  };
  attributes: {
    title: Schema.Attribute.String;
    label: Schema.Attribute.String;
    description: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images'>;
    smallTextWithLink: Schema.Attribute.RichText;
    buttons: Schema.Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsHeroProductPage extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_product_pages';
  info: {
    displayName: 'Hero-product-page';
    description: '';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    productImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    button: Schema.Attribute.Component<'links.button-link', false>;
  };
}

export interface SectionsFeatureRowsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    name: 'FeatureRowsGroup';
    displayName: 'Feaures row group';
    icon: 'bars';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatureColumnsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    name: 'FeatureColumnsGroup';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
    description: '';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    upArrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    downArrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    faqList: Schema.Attribute.Component<
      'sections.feature-columns-group',
      false
    >;
  };
}

export interface SectionsContactUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_uses';
  info: {
    displayName: 'Contact Us';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    contact_us_btn: Schema.Attribute.Component<'links.button-link', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsCaseStudyDetails extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_study_details';
  info: {
    displayName: 'case-study-details';
    description: '';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    more: Schema.Attribute.Component<'links.link', false>;
  };
}

export interface SectionsCardCollection extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_collections';
  info: {
    displayName: 'card-collection';
  };
  attributes: {
    card: Schema.Attribute.Component<'sections.card', true>;
  };
}

export interface SectionsBottomActions extends Struct.ComponentSchema {
  collectionName: 'components_slices_bottom_actions';
  info: {
    name: 'BottomActions';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
  };
  attributes: {
    title: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsBlog extends Struct.ComponentSchema {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'Blog';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_us_s';
  info: {
    displayName: 'About Us ';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    about_section: Schema.Attribute.Component<'sections.about-section', true>;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    title: Schema.Attribute.String;
    label: Schema.Attribute.String;
    section_description: Schema.Attribute.RichText;
  };
}

export interface LinksSublinks extends Struct.ComponentSchema {
  collectionName: 'components_links_sublinks';
  info: {
    displayName: 'Sublinks';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    sublinks: Schema.Attribute.Component<'links.sublinks', true>;
  };
}

export interface LinksButton extends Struct.ComponentSchema {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Schema.Attribute.Component<'links.link', true>;
    button: Schema.Attribute.Component<'links.button-link', false>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    name: 'Footer';
    displayName: 'Footer';
    icon: 'caret-square-down';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    columns: Schema.Attribute.Component<'elements.footer-section', true>;
    smallText: Schema.Attribute.String;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    picture: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
    authorName: Schema.Attribute.String;
    authorTitle: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ElementsSocialMediaName extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_media_names';
  info: {
    displayName: 'Social Media Name';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ElementsPlan extends Struct.ComponentSchema {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.feature', true>;
    isRecommended: Schema.Attribute.Boolean;
    price: Schema.Attribute.Decimal;
    pricePeriod: Schema.Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    type: Schema.Attribute.Enumeration<['alert', 'info', 'warning']> &
      Schema.Attribute.Required;
  };
}

export interface ElementsLogos extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    name: 'logos';
    displayName: 'Logos';
    icon: 'apple-alt';
  };
  attributes: {
    title: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Schema.Attribute.String;
    links: Schema.Attribute.Component<'links.link', true>;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    name: 'feature';
    displayName: 'Feature';
    icon: 'traffic-light';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ElementsFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows';
  info: {
    name: 'FeatureRow';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Component<'links.link', false>;
  };
}

export interface ElementsFeatureColumn extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns';
  info: {
    name: 'FeatureColumn';
    displayName: 'Feature column';
    icon: 'align-center';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    arrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meta.metadata': MetaMetadata;
      'sections.title': SectionsTitle;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.test': SectionsTest;
      'sections.solutions': SectionsSolutions;
      'sections.solution-card': SectionsSolutionCard;
      'sections.social-media-links': SectionsSocialMediaLinks;
      'sections.services-card': SectionsServicesCard;
      'sections.service-hero': SectionsServiceHero;
      'sections.rich-text': SectionsRichText;
      'sections.product-works': SectionsProductWorks;
      'sections.product-how-works': SectionsProductHowWorks;
      'sections.product-coming-hero': SectionsProductComingHero;
      'sections.pricing': SectionsPricing;
      'sections.our-services': SectionsOurServices;
      'sections.lead-form': SectionsLeadForm;
      'sections.large-video': SectionsLargeVideo;
      'sections.home-product-info': SectionsHomeProductInfo;
      'sections.home-case-study': SectionsHomeCaseStudy;
      'sections.hero': SectionsHero;
      'sections.hero-product-page': SectionsHeroProductPage;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.faq': SectionsFaq;
      'sections.contact-us': SectionsContactUs;
      'sections.case-study-details': SectionsCaseStudyDetails;
      'sections.card': SectionsCard;
      'sections.card-collection': SectionsCardCollection;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.blog': SectionsBlog;
      'sections.about-us': SectionsAboutUs;
      'sections.about-section': SectionsAboutSection;
      'links.sublinks': LinksSublinks;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'layout.navbar': LayoutNavbar;
      'layout.footer': LayoutFooter;
      'elements.testimonial': ElementsTestimonial;
      'elements.social-media-name': ElementsSocialMediaName;
      'elements.plan': ElementsPlan;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.logos': ElementsLogos;
      'elements.footer-section': ElementsFooterSection;
      'elements.feature': ElementsFeature;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature-column': ElementsFeatureColumn;
    }
  }
}
