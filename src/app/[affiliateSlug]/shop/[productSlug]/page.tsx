import { getProduct } from "@/api";
import { Product } from "@/types/product";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProductPage from "./ProductPage";

type PageProps = {
  params: Promise<Record<string, string>>;
};

const Page = async (props: PageProps) => {
  const params = await props.params;
  let product: Product;
  try {
    product = await getProduct(params.productSlug);
  } catch (error) {
    console.error(error);
    redirect(`/${params.affiliateSlug}/shop/`);
  }
  return <ProductPage product={product} />;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.productSlug);
  const headersList = await headers();

  const images = [
    {
      url: product.image_url,
      width: 800,
      height: 600,
      alt: `${product.title} main image`,
    },
    ...product.images.map((image: Product["images"][0], index: number) => ({
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
      description: product.description ?? "",
      url: `${headersList.get("x-url")}`,
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
