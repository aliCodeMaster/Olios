import React from 'react';
import {Layout, Breadcrumb} from 'antd';
import {Sidebar, CategoryBar, SearchOverlay} from "../Components/module";
import {useLocation} from "react-router-dom";
import {posts} from "../Configs/config";
import {CategoryPage} from "../Configs/links";

const {Content, Sider} = Layout;

export function DefaultLayout(props) {
    function breadcrumbProcessor(location) {
        const locationSplit = location.pathname.split('/');
        if(locationSplit.filter(val => val.toLowerCase() === "product").length > 0){
            const currentPost = posts.filter(val => val.slug === locationSplit.slice(-1)[0])[0];
            if (currentPost)
                return [CategoryPage.split("/")[1], currentPost.category, currentPost.title];
            return locationSplit.filter(value => value !== "");
        }
        return locationSplit.filter(value => value !== "");
    }
    function processTheSearchOverlay(location) {
        const hash = location.hash;
        return hash === "#Search";
    }
    const location = useLocation();
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider width={"fit-content"} style={{zIndex : 11}}>
                <Sidebar/>
            </Sider>
            <Layout id="mainSection">
                <Content>
                    <Breadcrumb style={{ margin: '1rem', zIndex : 1 }} className="position-absolute">
                        {
                            breadcrumbProcessor(location).length !== 0 &&
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        }
                        {
                            breadcrumbProcessor(location).map((data, i) => (
                                <Breadcrumb.Item key={i}>{data}</Breadcrumb.Item>
                            ))
                        }
                    </Breadcrumb>
                    {
                        processTheSearchOverlay(location) &&
                        <SearchOverlay />
                    }
                    {props.children}
                </Content>
                <CategoryBar />
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;