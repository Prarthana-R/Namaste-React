import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -ResturantConatianer
 *  -ResturantCards
 * Footer
 *  -Coprights
 *  -Links
 *  -Address
 *  -Contact
 */


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://tse2.mm.bing.net/th/id/OIP.9hl54qFeHA_2o_PIo3JhswAAAA?pid=Api&P=0&h=180"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>        
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const resList = [
  {
    info: {
      id: "334475",
      name: "Meghana Foods",
      cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
      locality: "Koramangala",
      areaName: "Koramangala 5th Block",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian"],
      avgRating: 4.5,
      sla: { deliveryTime: 30, slaString: "25-30 mins" },
    },
  },
  {
    info: {
      id: "121603",
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      locality: "BTM Layout",
      areaName: "BTM",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Chicken"],
      avgRating: 4.1,
      sla: { deliveryTime: 28, slaString: "25-30 mins" },
    },
  },
  {
    info: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId: "28fb13049b4e55297bb3f703cde63c35",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      sla: { deliveryTime: 26, slaString: "25-30 mins" },
    },
  },
  {
    info: {
      id: "34562",
      name: "Empire Restaurant",
      cloudinaryImageId: "qltgnkyywuo5gmnpqzbm",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹450 for two",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      avgRating: 4.2,
      sla: { deliveryTime: 24, slaString: "20-25 mins" },
    },
  },
  {
    info: {
      id: "23764",
      name: "Truffles",
      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
      locality: "St. Marks Road",
      areaName: "MG Road",
      costForTwo: "₹500 for two",
      cuisines: ["Burgers", "Cafe", "Desserts"],
      avgRating: 4.6,
      sla: { deliveryTime: 31, slaString: "30-35 mins" },
    },
  },
  
  {
    info: {
      id: "13512",
      name: "Sri Udupi Park",
      cloudinaryImageId: "tfbnpd65irvhp9iwhbtk",
      locality: "Residency Road",
      areaName: "MG Road",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "North Indian"],
      avgRating: 4.4,
      sla: { deliveryTime: 19, slaString: "15-20 mins" },
    },
  },
];

const ResturantCard = (props) => {
  
  const {resData} = props;
  const {name,cuisines,costForTwo,avgRating,cloudinaryImageId,sla} = resData?.info;
    const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";
  return (
    <div className="res-card">
      <img alt={name} className="res-img" src={IMG_CDN_URL + cloudinaryImageId}/>
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p> 
      <p>{costForTwo}</p> 
      <p>{sla?.deliveryTime} mins</p>
    </div>
  )}

  // not using keys (not acceptable) <<<<< index as Key <<<<<<<<< unique id (best practiceee)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       {
        resList.map((restaurant) => (<ResturantCard key={restaurant.info.id} resData={restaurant}/>))
       }
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
