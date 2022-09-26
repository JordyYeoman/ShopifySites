import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import SectionDescription from "../atoms/SectionDescription";
import SectionTitle from "../atoms/SectionTitle";
import SingleProductCardSmall from "../organisms/SingleProductCardSmall";
import IntersectionObserverWrapper from "../utils/IntersectionObserverWrapper";

function ListOfSingleProductCards() {
  const data = useStaticQuery(graphql`
    query SingleCardFeaturesCollection {
      allShopifyCollection(
        filter: { title: { in: "HomePageSingleCardFeatures" } }
      ) {
        edges {
          node {
            products {
              onlineStoreUrl
              shopifyId
              featuredImage {
                altText
                height
                width
                gatsbyImageData
              }
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
              title
              description
              createdAt
              handle
            }
          }
        }
      }
    }
  `);
  const products = data.allShopifyCollection.edges[0].node.products;
  return (
    <div className="flex flex-col pb-12 pt-32">
      <div>
        <IntersectionObserverWrapper duration={"duration-[1.5s]"}>
          <div className="px-16 md:px-0 max-w-2xl text-center flex items-center flex-col mx-auto py-12">
            <SectionTitle title={"Featured Items"} />
            <SectionDescription
              description={
                "Maecenas commodo augue tristique sagittis vehicula. Suspendisse a accumsan felis, in varius magna. Duis tincidunt lectus non volutpat scelerisque. Duis eu sapien non elit volutpat consectetur sed at mi."
              }
            />
          </div>
        </IntersectionObserverWrapper>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-around py-4 lg:px-6">
        {products.map((product: any, index: number) => {
          if (index > 5) return;
          return (
            <SingleProductCardSmall
              gatsbyImageData={product.featuredImage.gatsbyImageData}
              imageAlt={product?.featureImage?.altText ?? ""}
              title={product.title}
              price={product.priceRangeV2.maxVariantPrice.amount}
              handle={product.handle}
              id={product.shopifyId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListOfSingleProductCards;
