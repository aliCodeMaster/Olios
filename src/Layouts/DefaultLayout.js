import React from 'react';
import {Layout, Breadcrumb} from 'antd';
import {Sidebar, CategoryBar} from "../Components/module";
import {useLocation} from "react-router-dom";

const {Content, Sider} = Layout;

export function DefaultLayout(props) {
    function breadcrumbProcessor(location) {
        return location.pathname.split('/').filter(value => value !== "");
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
                    {props.children}
                </Content>
                <CategoryBar />
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;