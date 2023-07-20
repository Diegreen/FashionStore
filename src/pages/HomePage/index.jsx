
import {BannerSection} from "../../components/BannerSection"
import {NewsletterSection} from "../../components/NewsletterSection"
import {ProductsSection} from "../../components/ProductsSection"
import {CategorySection} from "../../components/CategorySection"
import { DefaultTemplate } from "../../components/DefaultTemplate";

export const HomePage = () => {
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <CategorySection />
        <ProductsSection />
        <NewsletterSection />
      </DefaultTemplate>
    </>
  );
};
