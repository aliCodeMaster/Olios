const LivingRoomSVG = require("../Image/Svg/LivingRoom.svg");
const OfficeSVG = require("../Image/Svg/Office.svg");
const KidsRoomSVG = require("../Image/Svg/KidsRoom.svg");
const KitchenSVG = require("../Image/Svg/Kitchen.svg");
const AccessoriesSVG = require("../Image/Svg/Accessories.svg");

module.exports = {
    direction : "ltr",
    siteTitle : "Olios",
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
    siteDescription : "Olios Descriptions",
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