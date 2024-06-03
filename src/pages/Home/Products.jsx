import ProductCard from "@/components/ui/ProductCard";
import React from "react";

const tabs = [
    {
        id: 0,
        label: "All",
    },
    {
        id: 1,
        label: "Fruits & Légumes",
    },
    {
        id: 3,
        label: "Viande",
    },
    {
        id: 4,
        label: "Boissons",
    },
    {
        id: 5,
        label: "Desserts",
    },
];


const products = [
    {
        image:
            "https://images.unsplash.com/photo-1609161307645-3ad8d7cafb55?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Légumes",
        rating: "5",
        label: "Pomme de terre",
        price: "0.0",
        promotion: "false",
        newPrice: "0.0",
    },
    {
        image:
            "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Légumes",
        rating: "5",
        label: "Tomates",
        price: "0.0",
        promotion: "false",
        newPrice: "0.0",
    },
    {
        image:
            "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Légumes",
        rating: "5",
        label: "Carotte",
        price: "0.0",
        promotion: "false",
        newPrice: "0.0",
    },
];

const Products = () => {
    return (
        <div className="py-16 mx-4 md:mx-8 lg:max-w-7xl lg:mx-auto">
            <h1 className=" text-3xl text-center font-bold">Produits</h1>
            <p className=" max-w-3xl text-base text-center text-gray-400 my-4 px-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore lacus vel facilisis.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
                <div>
                    <ul>
                        {tabs.map((item, index) => (
                            <li
                                key={`Tab ${index}`}
                                className="px-4 py-4 mt-2 flex justify-between rounded-md bg-slate-50 border border-slate-200 text-sm"
                            >
                                <p>{item.label}</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" lg:col-span-3 flex flex-wrap gap-4">
                    {products.map((item, index) => (
                        <ProductCard key={`Product Card ${index}`} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
