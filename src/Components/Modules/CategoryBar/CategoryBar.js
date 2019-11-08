import React, {useState} from 'react';
import {Button, Drawer, Icon} from "antd";
import {categories, direction, isOnThisPage} from '../../../Configs/config';
import './CategoryBar.css'
import {Link, useLocation} from "react-router-dom";
import CustomImage from "../CustomImage/CustomImage";


function CategoryBar() {
    let [drawerVisible, handleDrawer] = useState(false);

    function handleDrawerFunction(situation = null)  {
        if (situation !== null){
            return handleDrawer(situation);
        }
        return handleDrawer(!drawerVisible);
    }

    const location = useLocation().pathname;
    const hash = useLocation().hash;
    const collapseDrawer = drawerVisible ? " bar-opened" : "";
    return (
        <>
            <Button
                shape="circle"
                className={"category-bar-button " + direction + collapseDrawer}
                htmlType="button"
                onClick={()=> handleDrawerFunction(null)}
            >
                <Icon type={drawerVisible ? "close" : "bars"} />
            </Button>
            <Drawer
                closable={false}
                title={null}
                placement={direction === "ltr" ? "right" : "left"}
                visible={drawerVisible}
                onClose={()=> handleDrawerFunction(false)}
                bodyStyle={{height : "100%",paddingTop : "3rem"}}
            >
                <div className="category-bar-item-wrapper d-flex flex-column justify-content-center align-items-end px-lg-3">
                    {
                        categories &&
                        categories.map(data => (
                            <Link
                                key={data.id}
                                to={data.link}
                                className={"category-bar-item d-flex flex-row-reverse align-items-center" +
                                " justify-content-center my-3 " + isOnThisPage(location, hash, data)}
                            >
                                <CustomImage className="category-bar-item-picture ml-2" url={data.image} />
                                <h3>{data.name.toUpperCase()}</h3>
                            </Link>
                        ))
                    }
                </div>
                <div className="d-flex align-items-center justify-content-center category-bar-item-wrapper py-3">
                    <Link to="/Category" className={"category-bar-show-all-link " + isOnThisPage(location, hash, {link : "/Category"})}>
                        Show All Categories
                    </Link>
                </div>
            </Drawer>
        </>
    );
}

export default CategoryBar;