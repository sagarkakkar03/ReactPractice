
import React from "react"
import ReactDOM from "react-dom"

const Title = () => (
    <h2 className="title" key = "h2">
        <a href="#">
        <img alt="" src = "https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"></img>
        Food Villa 
        </a>
    </h2>
)


const Body = () => {
    return (
    <div className="cards">
     { restraunt.map((rest, index) => {
      console.log(rest, index)
        return <RestrauntCard number = {index} key = {index}/>
      })}
        <h4>Body</h4>
    </div>)
}

const restraunt = [
  {
        "info": {
      "id": "160946",
      "name": "Adhikari Chinese Food",
      "cloudinaryImageId": "xwnujftq86flnxlcllgw",
      "locality": "Patel Market",
      "areaName": "Sector 15",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Snacks"
      ],
      "avgRating": 4.2,
      "parentId": "27075",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-13 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=160946",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "43834",
      "name": "Subway",
      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
      "areaName": "Sector 11",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "2",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-14 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=43834",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "374597",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Vidya Path",
      "areaName": "Sector 15",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=374597",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }]

// config driven UI => Say this
// map is the best way to do functional operation
const RestrauntCard = ({number}) => {
    return (
    <div className="card">
        <img alt ="" src = {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restraunt[number].info.cloudinaryImageId}`}></img>
        <h2>{restraunt[number].info?.name}</h2>
        <h3> {restraunt[number].info.cuisines.join(", ")}</h3>
        <h4>{restraunt[number].info.sla.lastMileTravel} Minutes</h4> 
    </div>)
}

const FooterComponent = () => {
    return (<>
        <div style ={{background: "blue", border : "1px solid red"}}>
            Footer
        </div>
        </>
    )
}
// jsx can only have one parent 
// React.Fragment can remove outer div  => <>
const HeaderComponent = () => 
    (<div className="heading">
        <Title />
        <div className= "nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>)

const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
            <FooterComponent />
        </>
    )
}
ReactDOM.render(<AppLayout />, document.getElementById("root"));