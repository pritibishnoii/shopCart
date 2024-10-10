

export const CartComponent = ({ item ,addToCart}) => {
    const { price, title, quantity, thumbnail, total } = item.products[1];

    return (
        <div className="flex flex-col bg-white m-4 p-4  shadow-2xl rounded-2xl w-12/6">
            <div className="">
                <img src={thumbnail} alt={title} className="w-auto h-[150px]" />
            </div>
            <div className="">
                <h3 className="w-2/4">{title}</h3>
                <div className="">

                    <span>Quantity: {quantity}</span> {"   "}
                    Price: <strong>${price}</strong>
                </div>
            </div>
            <button className="bg-orange-400 p-2 mt-5 rounded-lg"
            onClick={()=>addToCart(item)}
            >Add to cart</button>
        </div>

    );
};
