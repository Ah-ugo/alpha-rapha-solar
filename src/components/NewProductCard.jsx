import React, { memo } from "react";
import { motion } from "framer-motion";
import { formatNumber, truncateString } from "../utils/FormatString";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3 },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const NewProductCard = ({
  category,
  title,
  descr,
  rating,
  review,
  img,
  id,
  price,
  onClick,
  onImageClick,
}) => {
  // Generate star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <motion.div
      className="max-w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 product-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <motion.div
        className="w-full aspect-[4/3] overflow-hidden rounded-t-xl"
        variants={imageVariants}
        initial="rest"
        whileHover="hover"
      >
        <img
          src={img || "/placeholder.jpg"}
          onClick={() => onImageClick(img, title)}
          alt={`${title} product image`}
          className="w-full h-full object-cover cursor-pointer"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/placeholder.jpg";
          }}
        />
      </motion.div>
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm font-medium text-gray-500 uppercase">
            {category}
          </p>
          <a href={`/detail/${id}`} className="block">
            <h6 className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              {truncateString(title, 20)}
            </h6>
          </a>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex gap-1">{renderStars(rating)}</div>
          <p className="ml-2 text-sm text-gray-600">
            ({review || 0} {review === 1 ? "review" : "reviews"})
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="text-lg sm:text-xl font-bold text-blue-600">
            ₦{formatNumber(price)}
          </h6>
          <motion.button
            onClick={onClick}
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Add ${title} to cart`}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(NewProductCard);
