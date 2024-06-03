import React from "react";

const Categories = () => {
    return (
        <div className="py-16 md:mx-8 lg:max-w-7xl lg:mx-auto">
            <div className="flex flex-wrap justify-center gap-8 mx-auto">
                <a className=" max-w-[350px] drop-shadow-xl" to="#">
                    <div className=" overflow-hidden">
                        <img
                            className=" aspect-[4/3] object-cover transition-all scale-110 hover:-translate-x-2 hover:-translate-y-2 hover:opacity-70"
                            src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    <p className="text-center py-2 px-4 bg-blue-700 text-slate-100 transition-opacity hover:opacity-70">
                        Lorem ipsum dolor
                    </p>
                </a>
                <a className=" max-w-[350px] drop-shadow-xl" to="#">
                    <div className=" overflow-hidden">
                        <img
                            className=" aspect-[4/3] object-cover transition-all scale-110 hover:-translate-x-2 hover:-translate-y-2 hover:opacity-70"
                            src="https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    <p className="text-center py-2 px-4 bg-blue-700 text-slate-100 transition-opacity hover:opacity-70">
                        Lorem ipsum dolor
                    </p>
                </a>
                <a className=" max-w-[350px] drop-shadow-xl" to="#">
                    <div className=" overflow-hidden">
                        <img
                            className=" aspect-[4/3] object-cover transition-all scale-110 hover:-translate-x-2 hover:-translate-y-2 hover:opacity-70"
                            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    <p className="text-center py-2 px-4 bg-blue-700 text-slate-100 transition-opacity hover:opacity-70">
                        Lorem ipsum dolor
                    </p>
                </a>
            </div>
        </div>
    );
};

export default Categories;
