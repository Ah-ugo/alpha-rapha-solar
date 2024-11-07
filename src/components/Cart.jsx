import React, { useContext, useState, useEffect } from "react";
import CartCard from "./CartCard";
import { Context } from "../Context/mainContext";
import { formatNumber } from "../utils/FormatString";
import Swal from "sweetalert2";
import { PaystackButton } from "react-paystack";
import { createOrder } from "../utils/Products";
import { useDisclosure } from "@chakra-ui/react"; // Ensure this is imported
import ModalWrapper from "./ModalWrapper"; // Ensure you import your ModalWrapper
import toast from "react-hot-toast";

export function Cart({ close }) {
  const { handleRemoveFromCart } = useContext(Context);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("rapha-solarcart"));
    return savedCart ? savedCart : { products: [], total: 0 };
  });

  const {
    isOpen: isOpenModal1,
    onOpen: onOpenModal1,
    onClose: onCloseModal1,
  } = useDisclosure();
  const localeData = localStorage.getItem("alphrapha_details");
  const parsedLocaleData = JSON.parse(localeData);
  const totalAmount = cartItems?.total + 30 + 35;
  const amount = totalAmount * 100; // Amount in kobo
  const email = parsedLocaleData?.email;
  const name = parsedLocaleData?.full_name;

  // State to manage whether to proceed with the payment
  const [canProceed, setCanProceed] = useState(false);

  const componentProps = {
    email: email,
    amount: amount,
    metadata: {
      name: name,
    },
    publicKey: "pk_test_8f8736df30d72b3c427000bed14e1d5bf12e3b17",
    text: "Checkout",
    onSuccess: () => {
      function pushOrder() {
        const items = cartItems.products.map((item) => {
          return {
            product_id: item._id, // Ensure this ID is being mapped correctly
            quantity: item.quantity, // Keep this as it is
            title: item.title, // Keep this as it is
            price: item.price, // Keep this as it is
          };
        });

        // Log the items for debugging
        console.log("Order Items:", items); // Check if product_id is present

        const pushed = {
          items: items, // The final payload
        };

        // Debugging: Log the payload before making the request
        console.log("Order Data:", JSON.stringify(pushed, null, 2)); // Log formatted JSON for easier reading

        createOrder(pushed)
          .then((response) => {
            console.log("Order created successfully:", response);
            toast.success("Order created successfully:", response);
          })
          .catch((error) => {
            if (error.response) {
              console.error("Error response data:", error.response.data);
              console.error("Error response status:", error.response.status);
              toast.error("Error response status:", error.response.status);
            } else if (error.request) {
              console.error("No response received:", error.request);
              toast.error("No response received:", error.request);
            } else {
              console.error("Error message:", error.message);
              toast.error("Error message:", error.message);
            }
          });
      }

      pushOrder();
      Swal.fire({
        title: "Thank You!",
        text: "Thanks for doing business with us! Come back soon!!",
        icon: "success",
      });
      window.location.replace("/store");
      localStorage.removeItem("rapha-solarcart");
    },
    onClose: () =>
      Swal.fire({
        title: "Please Don't Go",
        text: "Wait! You need this product(s), don't go!!!!",
        icon: "error",
      }),
  };

  useEffect(() => {
    localStorage.setItem("rapha-solarcart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoval = (product) => {
    const updatedProducts = cartItems.products.filter(
      (item) => item._id !== product._id
    );

    const updatedTotal = updatedProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setCartItems({ products: updatedProducts, total: updatedTotal });
    handleRemoveFromCart(product);
  };

  // Checkout handler
  const handleCheckout = () => {
    if (!parsedLocaleData) {
      // If user details are not found, open the modal
      onOpenModal1();
      setCanProceed(false); // Do not proceed with payment
    } else {
      setCanProceed(true); // Proceed with payment
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedProducts = cartItems.products.map((item) =>
      item._id === productId ? { ...item, quantity: newQuantity } : item
    );

    const updatedTotal = updatedProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setCartItems({ products: updatedProducts, total: updatedTotal });
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
                className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-scree"
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
                      key={product._id}
                      quantity={product.quantity}
                      price={product.price}
                      title={product.title}
                      specs={product.text_specifications}
                      img_uri={product.image_urls[0]}
                      stock={product.stock}
                      remove={() => handleRemoval(product)}
                      updateQuantity={(newQuantity) =>
                        updateQuantity(product._id, newQuantity)
                      }
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
                        ₦{formatNumber(cartItems.total + 30 + 35)}
                      </p>
                    </div>
                    {parsedLocaleData ? (
                      <PaystackButton
                        className="text-base leading-none w-full py-5 bg-blue-900 border-blue-900 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 text-white"
                        {...componentProps}
                      />
                    ) : (
                      <button
                        onClick={handleCheckout}
                        className="text-base leading-none w-full py-5 bg-blue-900 border-blue-900 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 text-white"
                      >
                        Checkout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for user details */}
      <ModalWrapper isOpen={isOpenModal1} onClose={onCloseModal1} />
    </>
  );
}
