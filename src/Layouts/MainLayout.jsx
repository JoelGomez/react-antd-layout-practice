import {
MenuFoldOutlined,
MenuUnfoldOutlined,
UserOutlined,
HomeOutlined,
TeamOutlined
} from "@ant-design/icons";

import { Button, Layout, Menu, Row, Col } from "antd";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout


// estilizar componentes

const LayoutStyled = styled(Layout)`
    min-height: 100vh;
`;

const HeaderStyled = styled(Header)`
    background-color: #fff;
    padding: 0 2rem;
    text-align: right;
`;

const SiderStyled = styled(Sider)`
    overflow: auto;
    min-height: 100vh;
    background-color: #fff;
`;

const ContentStyled = styled(Content)`
    margin: 24px 16px;
    padding: 24px;
    min-height: 280px;
    background-color: #fff;
`;

const ButtonCollapsedStyled = styled(Button)`
    font-size: 16px;
    width: 64px;
    height:64px;
    
`;


export default function MainLayout(){

    const [collapsed, setCollapsed] = useState(false);

    return (
        <LayoutStyled>
            <SiderStyled trigger={null} collapsible collapsed={collapsed}>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={
                    [
                        {
                            Key: "1",
                            icon: <HomeOutlined/>,
                            label: <Link to="/home">Home</Link>
                        },
                        {
                            key : "2",
                            icon: <UserOutlined></UserOutlined>,
                            label: <Link to="/about">About</Link>

                        },
                        {
                            key: "3",
                            icon: <TeamOutlined />,
                            label: <Link to="/community">Community</Link>
                        }
                    ]
                } ></Menu>
            </SiderStyled>
            <Layout>
                <HeaderStyled>
                    <Row type="flex" justify="space-between" >
                        <Col>
                            <ButtonCollapsedStyled
                                type="text" 
                                icon={collapsed?<MenuUnfoldOutlined />: <MenuFoldOutlined />} 
                                onClick={() => setCollapsed(!collapsed)}
                            />
                        </Col>
                    </Row>
                </HeaderStyled>
                <ContentStyled>
                    <Outlet />
                </ContentStyled>
                <Footer>
                    Footer
                </Footer>
            </Layout>
        </LayoutStyled>
    );
}