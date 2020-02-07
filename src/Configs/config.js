const LivingRoomSVG = require("../assets/Image/Svg/LivingRoom.svg");
const OfficeSVG = require("../assets/Image/Svg/Office.svg");
const KidsRoomSVG = require("../assets/Image/Svg/KidsRoom.svg");
const KitchenSVG = require("../assets/Image/Svg/Kitchen.svg");
const AccessoriesSVG = require("../assets/Image/Svg/Accessories.svg");
const RedSeat = require("../assets/Image/RedSeat.png");
const WhiteTable = require("../assets/Image/WhiteTable.png");
const BlueSeat = require("../assets/Image/BlueSeat.png");
const ModernBed = require("../assets/Image/ModernBed.png");
const DarkSeat = require("../assets/Image/DarkSeat.png");

module.exports = {
    direction : "ltr",
    siteTitle : "Olios",
    siteDescription : "Olios Descriptions",
    categories : [
        {
            id : 1,
            name : "living room",
            image : LivingRoomSVG,
            link : "/Category/LivingRoom"
        },
        {
            id : 2,
            name : "office",
            image : OfficeSVG,
            link : "/Category/Office"
        },
        {
            id : 3,
            name : "for Kids",
            image : KidsRoomSVG,
            link : "/Category/ForKids"
        },
        {
            id : 4,
            name : "kitchen",
            image : KitchenSVG,
            link : "/Category/Kitchen"
        },
        {
            id : 5,
            name : "accessories",
            image : AccessoriesSVG,
            link : "/Category/Accessories"
        }
    ],
    posts : [
        {
            id : 1,
            title : "red seat",
            slug : "red-seat",
            content : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : {"discount" : "$45","original" : "$85"},
            image : RedSeat,
            category : "ForKids"
        },
        {
            id : 2,
            title : "white table",
            slug : "white-table",
            content : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$350",
            image : WhiteTable,
            category : "ForKids"
        },
        {
            id : 3,
            title : "blue seat",
            slug : "blue-seat",
            content : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$35",
            image : BlueSeat,
            category : "ForKids"
        },
        {
            id : 4,
            title : "modern bed",
            slug : "modern-bed",
            content : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$120",
            image : ModernBed,
            category : "Office"
        },
        {
            id : 5,
            title : "dark seat",
            slug : "dark-seat",
            content : "Lorem ipsum dolor sit amet, in nisl malis evertitur nam. Ne sea legere constituto, ne has minim appellantur." +
                " Veniam invenire scribentur mei id, sit te tantas euripidis, usu an natum referrentur. Elitr offendit an mel.\n",
            price : "$50",
            image : DarkSeat,
            category : "ForKids"
        }
    ],
    priceProcessor : function(price) {
        if (typeof price === "object"){
            return '<div class="price d-flex align-items-center">' +
                        '<p class="discounted">' + price.discount + '</p>' +
                        '<p class="original">' + price.original + '</p>' +
                    '</div>';
        }
        return '<div class="price"><p class="original">' + price + '</p></div>';
    },
    getLastPartLink :  function(link) {
        return link.split("/").slice(-1)[0];
    },
    isOnThisPage : function (location, hash, data) {
        let splitLink = data.link.split('/').slice(-1)[0];
        splitLink = splitLink.split('#').length > 1 ? splitLink.split('#')[1] : splitLink;
        let isOnThisPage = location !== "/" ?
            location.split("/").filter(sign => sign !== "/" && sign !== "").slice(-1).filter(sign => sign === splitLink).length !== 0 :
            location === data.link;
        isOnThisPage = hash !== "" && hash.split('#').slice(-1)[0] === splitLink ? true : isOnThisPage;
        return isOnThisPage ? "onPage" : "";
    }
};