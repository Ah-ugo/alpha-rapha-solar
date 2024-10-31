import React, { useContext, useState, useEffect } from "react";
import CartCard from "./CartCard";
import { Context } from "../Context/mainContext";
import { formatNumber } from "../utils/FormatString";
import Swal from "sweetalert2";
import { PaystackButton } from "react-paystack";

export function Cart({ close }) {
  const { handleRemoveFromCart } = useContext(Context);

  // Initialize cart from localStorage or set a default structure
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("rapha-solarcart"));
    return savedCart ? savedCart : { products: [], total: 0 };
  });

  const [show, setShow] = useState(false);
  const localeData = localStorage.getItem("alphrapha_details");
  const parsedLocaleData = JSON.parse(localeData);
  console.log(parsedLocaleData);
  const amount = cartItems?.total + 30 + 35 * 1000; // Remember, set in kobo!
  const email = parsedLocaleData?.email;
  const name = parsedLocaleData?.full_name;
  const [phone, setPhone] = useState("");

  const componentProps = {
    email: email,
    amount: amount,
    metadata: {
      name: name,
    },
    publicKey: "pk_test_8f8736df30d72b3c427000bed14e1d5bf12e3b17",
    text: "Checkout",
    onSuccess: () => {
      Swal.fire({
        title: "Thank You!",
        text: "Thanks for doing business with us! Come back soon!!",
        icon: "success",
      }),
        window.location.replace("/listing");
    },
    onClose: () =>
      Swal.fire({
        title: "Please Don't Go",
        text: "Wait! You need this product(s), don't go!!!!",
        icon: "error",
      }),
  };

  // Sync cartItems state to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("rapha-solarcart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to handle removal of a product
  const handleRemoval = (product) => {
    // Filter out the product using its unique _id
    const updatedProducts = cartItems.products.filter(
      (item) => item._id !== product._id
    );

    // Calculate the new total by summing the prices of the remaining products
    const updatedTotal = updatedProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Update local state
    setCartItems({ products: updatedProducts, total: updatedTotal });

    // Call the context method to handle removal
    handleRemoveFromCart(product);

    // Debugging statements
    console.log("Removed product:", product);
    console.log("Updated products:", updatedProducts);
    console.log("New total:", updatedTotal);
  };

  return (
    <>
      <div className="cart-container">
        <div
          className="w-full h-full bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
          id="chec-div"
        >
          <div
            className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
            id="checkout"
          >
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div
                className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
              >
                <div
                  className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                  onClick={() => close()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p className="text-sm pl-2 leading-none">Back</p>
                </div>
                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                  Solar
                </p>
                {cartItems.products.length > 0 ? (
                  cartItems.products.map((product) => (
                    <CartCard
                      key={product._id} // Ensure each product has a unique ID
                      quantity={product.quantity}
                      price={product.price}
                      title={product.title}
                      specs={product.text_specifications}
                      img_uri={product.image_urls[0]}
                      remove={() => handleRemoval(product)}
                    />
                  ))
                ) : (
                  <p className="text-center py-4">Your cart is empty.</p>
                )}
              </div>
              <div className="md:w-1/3 xl:w-1/2 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">
                      Summary
                    </p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        ₦{formatNumber(cartItems.total)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        ₦30
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Tax
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        ₦35
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">
                        Total
                      </p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                        ₦{formatNumber(cartItems.total + 30 + 35)}{" "}
                        {/* Shipping and Tax included */}
                      </p>
                    </div>
                    <PaystackButton
                      onClick={() => setShow(!show)}
                      className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                      {...componentProps}
                    />
                    {/* <button
                      onClick={() => setShow(!show)}
                      className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                    >
                      Checkout
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
