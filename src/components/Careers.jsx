import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const contents = [
  {
    img: "https://cdn.easyfrontend.com/pictures/logos/instagram-logo.png",
    link: "#",
    title: "User Experience Design Intern, Summer 2019",
    place: "Instagram",
    location: "Sydney, AU",
    duration: "6 Days",
    applicants: "68",

    authorImg: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
    authorName: "Sara Kleinz",
    authorEmail: "11shafayet@gmail.com",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/logos/apple-logo.png",
    link: "#",
    title: "Graphic Design Cordinator, Summer 2020",
    place: "Apple",
    location: "London, UK",
    duration: "3 Days",
    applicants: "55",

    authorImg: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
    authorName: "Steve Smith",
    authorEmail: "yourgmail@gmail.com",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/logos/twitter-logo.png",
    link: "#",
    title: "User Experience Design Intern, Summer 2019",
    place: "Twitter",
    location: " Melbourne, AU",
    duration: "2 Days",
    applicants: "11",

    authorImg: "https://cdn.easyfrontend.com/pictures/users/user7.jpg",
    authorName: "Abraham Finn",
    authorEmail: "111shafayet@gmail.com",
  },
];

const CareerCard = ({ content }) => {
  const {
    img,
    link,
    title,
    place,
    location,
    duration,
    applicants,
    authorImg,
    authorName,
    authorEmail,
  } = content;
  return (
    <div className="bg-white shadow-2xl dark:bg-[#1E2735] dark:shadow-none hover:bg-blue-600 hover:bg-opacity-20 dark:hover:bg-blue-600 dark:hover:bg-opacity-20 group hover:scale-[1.01] duration-[.4s] p-4 md:p-6">
      <div className="grid grid-cols-12 items-center w-full">
        <div className="col-span-12 md:col-span-2">
          <div className="w-24 h-24 border border-gray-200 dark:border-gray-700 rounded-full flex justify-center items-center mx-auto">
            <img src={img} alt="" className="max-w-[50px] h-auto" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 mt-4 md:mt-0">
          <div>
            <a
              href={link}
              className="text-center md:text-start hover:text-blue-600"
            >
              <h4 className="text-2xl font-bold mb-2">{title}</h4>
            </a>
            <h5 className="text-center md:text-start text-xl font-medium mb-2">
              <span className="text-blue-600">{place}</span> - {location}
            </h5>
          </div>
          <div className="text-center md:text-start mt-6">
            <p className="opacity-50 mb-2">
              Posted {duration} ago - {applicants} applicants
            </p>
            <div className="flex justify-center md:justify-start items-center">
              <div>
                <img
                  src={authorImg}
                  alt=""
                  className="rounded-full"
                  width="50"
                  height="50"
                />
              </div>
              <div className="ml-2">
                <h6 className="font-bold">Contact: {authorName}</h6>
                <p className="mb-2">{authorEmail}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 mt-4 md:mt-0">
          <div className="flex md:flex-col md:items-center justify-center h-full">
            <button className="py-2 px-4 w-36 text-lg border border-gray-200 dark:border-gray-700 opacity-75 transition hover:opacity-100 group-hover:border-gray-400">
              Save
              <FontAwesomeIcon icon={faBookmark} className="ml-2" />
            </button>
            <button className="py-2 px-4 w-36 text-lg border border-gray-200 dark:border-gray-700 opacity-75 transition hover:opacity-100 group-hover:border-gray-400 ml-3 md:ml-0 md:mt-4">
              Apply
              <FontAwesomeIcon icon={faCheckSquare} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CareerCard.propTypes = {
  content: PropTypes.object.isRequired,
};

const Careers15 = () => {
  return (
    <section className="ezy__careers15 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <h1 className="text-3xl lg:text-[40px] font-bold mb-12">
              All Jobs
            </h1>
          </div>

          {contents.map((content, i) => (
            <div className="col-span-12 mt-6" key={i}>
              <CareerCard content={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
