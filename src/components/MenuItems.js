import { ITEM_IMG_CDN_URL } from "../utils/constants";

const MenuItems = ({
    name,
    imageId,
    price,
    description,
}) => {
    return (
        <div className=" flex justify-between py-4 px-48 p-14 border-b">
            <div className="">
                <h2 className="text-xl font-bold mt-1">{name}</h2>
                <p>Rs-{price / 100}</p>
                <p className="hidden md:flex text-sm w-[90%] md:w-4/5 text-gray-400">
                    {description && description}</p>
            </div>
            <div>
                <img
                    className="rounded"
                    src={ITEM_IMG_CDN_URL + imageId}
                    alt="image"
                />

            </div>
        </div>
    );
};

export default MenuItems;