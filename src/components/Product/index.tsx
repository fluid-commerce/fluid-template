/* eslint-disable @next/next/no-img-element */
"use client";
import type { Product } from "@/types/product";
import Link from "next/link";
import { useParams } from "next/navigation";

const Product = ({ product }: { product: Product }) => {
  const { affiliateSlug } = useParams();

  return (
    <div className="snap-start px-8 sm:px-4 py-8">
      <div>
        <Link
          className="flex flex-col justify-between h-full"
          href={`/${affiliateSlug}/shop/${product.slug}`}
        >
          <div className="flex items-center justify-center">
            <img
              src={
                product?.images[0]?.image_url ||
                product?.image_url ||
                product?.variants?.[0]?.images?.[0]?.image_url ||
                product?.variants?.[0]?.image_urL ||
                "https://placehold.co/304x364/2F4F4F/black@3x.png"
              }
              className="object-contain h-[233px]"
              alt={product?.title}
            />
          </div>
          <div className="overflow-hidden">
            <div className="sm:inline-flex justify-between w-full my-4">
              <h2 className="font-bold">{product.title}</h2>
              <p className="font-bold">{product.display_price}</p>
            </div>
            <div
              className="text-sm line-clamp-[8] overflow-ellipsis"
              dangerouslySetInnerHTML={{ __html: product.description || "" }}
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
