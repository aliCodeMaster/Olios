import React from 'react';
import {Badge, Icon, Tooltip} from "antd";
import {Link, useLocation} from "react-router-dom";
import {direction, isOnThisPage} from '../../../../../Configs/config';

function MenuElements(props) {
    const location = useLocation().pathname;
    const hash = useLocation().hash;
    const {data} = props;
    return (
        <div className="menu-item">
            <Tooltip overlayClassName={"custom-tooltip " + direction} title={data.name}
                     placement={direction === "ltr" ? "right" : "left"}>
                <Link to={data.link}>
                    {
                        typeof data.badgeNumber === "number" ?
                            <Badge className="menu-badge" showZero count={data.badgeNumber}>
                                <Icon type={data.icon} className={isOnThisPage(location, hash, data)} />
                            </Badge>
                            :
                            <Icon type={data.icon} className={isOnThisPage(location, hash, data)}/>
                    }
                </Link>
            </Tooltip>
        </div>
    );
}

export default MenuElements;