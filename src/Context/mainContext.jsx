import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const Context = createContext();

const initialCart = {
  products: [],
  total: 0,
};

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [login, setLogin] = useState(true);
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const tokenData = localStorage.getItem("alpharapha_token");

  // const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    const storedCart = localStorage.getItem("rapha-solarcart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart !== initialCart) {
      localStorage.setItem("rapha-solarcart", JSON.stringify(cart));
    }
  }, [cart]);

  const isValidToken = () => {
    try {
      const decoded = jwtDecode(tokenData);
      return decoded.exp * 1000 > Date.now();
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    if (!isValidToken()) {
      localStorage.removeItem("alpharapha_token");
    }
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.products.find(
        (p) => p._id === product._id
      );

      if (existingProduct) {
        // Prevent the item from being added again
        toast.error(`${product.title} is already in the cart!`);
        return prevCart; // Return the previous state without changes
      }

      const updatedProducts = [
        ...prevCart.products,
        { ...product, quantity: 1 },
      ];
      const productPrice = parseFloat(product.price); // Convert price to a number

      toast.success(`${product.title} added to cart!`);

      return {
        products: updatedProducts,
        total: prevCart.total + productPrice, // Add the numeric price to the total
      };
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      // Log the initial cart state and the product to be removed
      console.log("Initial cart:", prevCart);
      console.log("Product to remove:", product);

      // Find the existing product in the cart
      const existingProduct = prevCart.products.find(
        (p) => p._id === product._id
      );

      let updatedProducts;
      let updatedTotal = prevCart.total;

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          // Decrease the quantity
          updatedProducts = prevCart.products.map((p) =>
            p._id === product._id ? { ...p, quantity: p.quantity - 1 } : p
          );
          updatedTotal -= parseFloat(product.price);
        } else {
          // Remove the product if quantity is 1
          updatedProducts = prevCart.products.filter(
            (p) => p._id !== product._id
          );
          updatedTotal -= parseFloat(product.price);
        }
      } else {
        // If product is not found
        console.log("Product not found in the cart.");
        updatedProducts = prevCart.products;
      }

      // Log the updated products array and total
      console.log("Updated products:", updatedProducts);
      console.log("Updated total:", updatedTotal);

      return {
        products: updatedProducts,
        total: updatedTotal > 0 ? updatedTotal : 0,
      };
    });
  };

  const contextValue = {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
