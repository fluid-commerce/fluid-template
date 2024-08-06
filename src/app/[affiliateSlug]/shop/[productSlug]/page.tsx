import { serverGetProduct } from "@/api";
import { Metadata } from "next";
import ProductPage from "./ProductPage";

const Page = async () => {
  const product = await serverGetProduct();

  return <ProductPage product={product} />;
};

export async function generateMetadata(): Promise<Metadata> {
  const product = await serverGetProduct();

  const images = [
    {
      url: product.image_url,
      width: 800,
      height: 600,
      alt: `${product.title} main image`,
    },
    ...product.images.map((image, index) => ({
      url: image.image_url,
      width: 800,
      height: 600,
      alt: `${product.title} image ${index}`,
    })),
  ];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `${process.env.FLUID_HOST}`,
      images,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      images,
    },
  };
}

export default Page;
