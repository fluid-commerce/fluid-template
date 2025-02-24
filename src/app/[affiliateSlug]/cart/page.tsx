import { getCart } from "@/api";
import CartPage from "./CartPage";

type PageProps = {
  params: Record<string, string>;
};

const Page = async (props: PageProps) => {
  const params = await props.params;
  const { affiliateSlug } = params;
  const cart = await getCart();

  return (
    <CartPage
      cartInfo={Array.isArray(cart) ? null : cart}
      slug={affiliateSlug}
    />
  );
};

export default Page;
