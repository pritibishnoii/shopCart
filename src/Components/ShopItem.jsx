const ShopItem = ({ cards }) => {
  return (
    <div className="flex">
      {cards.map(cartItem =>
        cartItem.products.map(elm => {
          return (
            <>
              <div className="flex  bg-white m-4 p-4 shadow-2xl rounded-2xl w-12/6">
                <div className="m-5">
                  <img src={elm.thumbnail} alt={elm.title} className="w-auto h-[150px]" />
                </div>
                <div>
                  <h3 className="w-2/4">{elm.title}</h3>
                  <div>
                    <span>Quantity: {elm.quantity}</span> {" "}
                    Price: <strong>${elm.price}</strong>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default ShopItem;
