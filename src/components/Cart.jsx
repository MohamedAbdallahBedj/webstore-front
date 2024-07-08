"use client";
import { useCartContext } from "@/contexts/CartContext";
import Image from "next/image";

export default function Cart() {
  const {
    showCart,
    setShowCart,
    cartItems,
    totalPrice,
    onRemove,
    toggleCartItemQuanitity,
  } = useCartContext();

  return (
    <div className="py-16 mx-4 md:mx-8 lg:max-w-4xl lg:mx-auto flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h1 className=" text-3xl text-center font-bold">Panier</h1>
          <div className="mr-3 flex h-7 items-center">
            <button
              type="button"
              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
              onClick={() => setShowCart(false)}
            >
              <span className="sr-only">Close panel</span>
              {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between py-6"
                >
                  <div className="flex gap-4 items-center w-[300px]">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={product.imageSrc}
                        alt={product.title}
                        width={100}
                        height={200}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="flex justify-between text-base font-medium text-gray-900">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="flex justify-between text-sm text-gray-600">
                        {product.color}
                      </p>
                      <p className="mx-4" dir="ltr">
                        {product?.price || 0} DA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        toggleCartItemQuanitity(product.id, "inc");
                      }}
                      type="button"
                      className="font-bold text-blue-700 hover:text-slate-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                    <p className="text-md text-gray-600">{product.quantity}</p>
                    <button
                      onClick={() => {
                        toggleCartItemQuanitity(product.id, "dec");
                      }}
                      type="button"
                      className="font-bold text-blue-700 hover:text-slate-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-base font-medium text-gray-900">
                      <p>Total {product.price * product.quantity} Da</p>
                    </h3>
                    <button
                      onClick={() => {
                        onRemove(product);
                      }}
                      type="button"
                      className="font-bold text-red-700 hover:text-slate-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Prix Total</p>
          <p>{totalPrice} DA</p>
        </div>
        {/* <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p> */}
        <div className="flex items-center gap-8 justify-end mt-6">
          <p>
            <span aria-hidden="true"> &larr;</span>
            <button
              type="button"
              className="mx-2 font-medium text-red-700 hover:text-red-600"
              onClick={() => setShowCart(false)}
            >
              Retour
            </button>
          </p>
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600"
          >
            Payment
          </a>
        </div>
      </div>
    </div>
  );
}
