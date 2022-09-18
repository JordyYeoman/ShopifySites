import React from "react";
import SectionDescription from "./atoms/SectionDescription";
import SectionTitle from "./atoms/SectionTitle";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

function FeatureCategories() {
  const data = useStaticQuery(graphql`
    query FeatureCategoriesQuery {
      allShopifyProduct(limit: 4) {
        nodes {
          featuredImage {
            gatsbyImageData
          }
          onlineStoreUrl
          description
        }
      }
    }
  `);
  return (
    <div>
      <div className="max-w-2xl text-center flex items-center flex-col mx-auto pt-24 pb-8">
        <SectionTitle title={"Popular Collections"} />
        <SectionDescription
          description={
            "Maecenas commodo augue tristique sagittis vehicula. Suspendisse a accumsan felis, in varius magna. Duis tincidunt lectus non volutpat scelerisque. Duis eu sapien non elit volutpat consectetur sed at mi."
          }
        />
      </div>
      <div className="flex h-[40rem]">
        <div className="flex flex-col h-full w-full ">
          <div className="bg-red-200 w-full h-3/5 p-2 relative">
            <div className="bg-red-200 opacity-0 hover:opacity-50 transition duration-300 w-full h-full absolute top-0 z-10 left-0 flex flex-col"></div>
            <Link to="/">
              <GatsbyImage
                className="object-fit object-cover h-full w-full"
                image={
                  data?.allShopifyProduct?.nodes[0]?.featuredImage
                    ?.gatsbyImageData
                }
                alt={data?.allShopifyProduct?.nodes[0]?.description}
              />
            </Link>
          </div>
          <div className="bg-green-200 w-full h-2/5 p-2 relative">
            <div className="bg-green-200 opacity-0 hover:opacity-50 transition duration-300 w-full h-full absolute top-0 z-10 left-0"></div>
            <Link to="/">
              <GatsbyImage
                className="object-fit object-cover h-full w-full"
                image={
                  data?.allShopifyProduct?.nodes[1]?.featuredImage
                    ?.gatsbyImageData
                }
                alt={data?.allShopifyProduct?.nodes[1]?.description}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-full w-full">
          <div className="bg-green-200 w-full h-4/6 p-2 relative">
            <div className="bg-green-200 opacity-0 hover:opacity-50 transition duration-300 w-full h-full absolute top-0 z-10 left-0"></div>
            <Link to="/">
              <GatsbyImage
                className="object-fit object-cover h-full w-full"
                image={
                  data?.allShopifyProduct?.nodes[2]?.featuredImage
                    ?.gatsbyImageData
                }
                alt={data?.allShopifyProduct?.nodes[2]?.description}
              />
            </Link>
          </div>
          <div className="bg-red-200 w-full h-2/6 p-2 relative">
            <div className="bg-red-200 opacity-0 hover:opacity-50 transition duration-300 w-full h-full absolute top-0 z-10 left-0"></div>
            <Link className="" to="/">
              <GatsbyImage
                className="object-fit object-cover h-full w-full"
                image={
                  data?.allShopifyProduct?.nodes[3]?.featuredImage
                    ?.gatsbyImageData
                }
                alt={data?.allShopifyProduct?.nodes[3]?.description}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCategories;
