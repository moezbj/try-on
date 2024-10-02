import { Suspense, useState } from "react";
import Scene from "../components/scene";
import TryOn from "./Section";

const ProductDetail = () => {
  const productDetailItem = {
    title: "Glasses",
    reviews: "150",
    availability: true,
    brand: "apex",
    category: "Man",
    sku: "BE45VGTRK",
    price: 450,
    previousPrice: 599,
    description: "",
    color: ["gray", "violet", "red"],
  };
  const [open, setOpen] = useState(false);
  /*  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
   */ return (
    <Suspense fallback={"loading.."} >
      <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10  h-fit">
        <div className="container mx-auto px-4 ">
          <Scene path="../assets/glasses.glb" />
        </div>
        <div className="mx-auto  w-full px-5 lg:px-5">
          <h2 className="pt-3 text-2xl font-bold lg:pt-0">
            {productDetailItem.title}
          </h2>
          <p className="mt-5 font-bold">
            Availability:{" "}
            {productDetailItem.availability ? (
              <span className="text-green-600">In Stock </span>
            ) : (
              <span className="text-red-600">Expired</span>
            )}
          </p>
          <p className="font-bold">
            Brand:{" "}
            <span className="font-normal">{productDetailItem.brand}</span>
          </p>
          <p className="font-bold">
            Cathegory:{" "}
            <span className="font-normal">{productDetailItem.category}</span>
          </p>

          <p className="mt-4 text-4xl font-bold text-violet-900">
            ${productDetailItem.price}{" "}
            <span className="text-xs text-gray-400 line-through">
              ${productDetailItem.previousPrice}
            </span>
          </p>
          <p className="pt-5 text-sm leading-5 text-gray-500">
            {productDetailItem.description}
          </p>

          <div className="mt-7 mb-4 flex flex-row items-center gap-6">
            <button
              onClick={() => setOpen(true)}
              /*             to="/try"
               */ className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300"
            >
              try on
            </button>
          </div>
          {open && (
            <div className="w-full">
              <TryOn />
            </div>
          )}
        </div>
      </section>
    </Suspense>
  );
};

export default ProductDetail;
