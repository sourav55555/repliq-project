import { GripVertical } from "lucide-react";
import { useEffect, useState } from "react";
import Categories from "./Categories";


const Products = ({ productsList, selectProduct }) => {

    const [showCategory, setShowCategory] = useState(false);

    const [categoryList, setCategoryList] = useState(() => {
        return [...new Set(productsList.map(item => item.category))];
    });

    console.log(categoryList)

    return (
        <div className="px-6 mb-16">
            <Categories
                categoryList={categoryList}
                showCategory={showCategory}
                setShowCategory={setShowCategory}
            />
            <div
                onClick={() => setShowCategory(true)}
                className="flex font-semibold justify-between items-center mt-5 gap-2"
            >
                <button className="px-4 border-[#176B87] secondary py-2 rounded-md border-2 text-lg flex-grow">All Categories</button>
                {
                    categoryList.slice(0, 4).map((category, index) => <button key={index} className="px-4 py-2 rounded-md border-2 border-gray-400 text-lg text-gray-600 md:inline hidden">{category}</button>)
                }
                <GripVertical />
            </div>

            {/* products list  */}
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-6">
                {
                    productsList.map((details, index) =>
                        <div
                            className="text-center cursor-pointer space-y-1 md:p-0 p-1 border border-gray-400"
                            onClick={() => selectProduct(details.shirtName, details.price)}
                            key={index}
                        >
                            <img src={details.image} className="h-[120px] w-fit" alt="" />
                            <p>${details.price}</p>
                            <p className="border-t">{details.shirtName}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Products;