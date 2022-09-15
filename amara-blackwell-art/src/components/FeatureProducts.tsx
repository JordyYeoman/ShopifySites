import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function FeatureProducts() {
  const { allShopifyProduct: data } = useStaticQuery(graphql`
    query {
      allShopifyProduct(limit: 12) {
        nodes {
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          seo {
            description
            title
          }
          shopifyId
          storefrontId
          totalInventory
          tracksInventory
          totalVariants
          featuredImage {
            originalSrc
          }
        }
      }
    }
  `);

  console.log("DATA BUOUOU: ", data);
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-16">
      <div className="flex flex-col">
        <h3 className="text-4xl font-bold pb-4">Artwork</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-full">
          {Array.from(Array(12)).map((_, index) => (
            <div key={index} className="w-56 h-56 bg-orange-200 rounded">
              {index}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
