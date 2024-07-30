import { serverGetCollection } from "@/api";
import ProductGrid from "@/components/ProductGrid";
import { faChevronDown } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Page = async () => {
  const collection = await serverGetCollection();
  return (
    <div className="px-20 w-full py-28">
      <div className="text-5xl font-bold mb-24">{collection.title}</div>
      <div className="inline-flex w-full justify-between mb-24 px-4">
        <div className="inline-flex gap-6">
          <span>Filter: </span>
          <span>
            <button>
              Availibility <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </span>
          <span>
            <button>
              Price <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </span>
        </div>
        <div className="inline-flex gap-6">
          <span>Sort: </span>
          <span>
            <button>
              Best Selling <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </span>
          <span>
            {collection.products?.length || 0} Product
            {collection.products?.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <ProductGrid products={collection.products} />
    </div>
  );
};

export default Page;
