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
  const [login, setLogin] = useState(true);
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const tokenData = localStorage.getItem("alpharapha_token");

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
    // Check if stock is invalid or zero
    if (!product.stock || product.stock <= 0) {
      toast.error(`${product.title} is unavailable or out of stock!`);
      return; // Do not proceed with adding to the cart
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.products.find(
        (p) => p._id === product._id
      );

      if (existingProduct) {
        toast.error(`${product.title} is already in the cart!`);
        return prevCart;
      }

      const updatedProducts = [
        ...prevCart.products,
        { ...product, quantity: 1 },
      ];
      const productPrice = parseFloat(product.price);

      toast.success(`${product.title} added to cart!`);

      return {
        products: updatedProducts,
        total: prevCart.total + productPrice,
      };
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.products.find(
        (p) => p._id === product._id
      );

      let updatedProducts;
      let updatedTotal = prevCart.total;

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          updatedProducts = prevCart.products.map((p) =>
            p._id === product._id ? { ...p, quantity: p.quantity - 1 } : p
          );
          updatedTotal -= parseFloat(product.price);
        } else {
          updatedProducts = prevCart.products.filter(
            (p) => p._id !== product._id
          );
          updatedTotal -= parseFloat(product.price);
        }
      } else {
        updatedProducts = prevCart.products;
      }

      return {
        products: updatedProducts,
        total: updatedTotal > 0 ? updatedTotal : 0,
      };
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems((prevCartItems) => {
      const updatedProducts = prevCartItems.products.map((product) => {
        if (product._id === productId) {
          return { ...product, quantity: Math.min(newQuantity, product.stock) };
        }
        return product;
      });

      const updatedTotal = updatedProducts.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );

      return { products: updatedProducts, total: updatedTotal };
    });
  };

  const contextValue = {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
