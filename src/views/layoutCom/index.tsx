import * as React from 'react';
import { Layout, Icon } from 'antd';
import './index.scss';
// 引入菜单
import MenuCom from './components/menuCom';

// 引入路由
import { HashRouter as Router, Route } from "react-router-dom";
import routes from '../../router'
const { Header, Sider, Content } = Layout;


export class LayoutCom extends React.Component {
    state = {
        collapsed: false,
        toggleIconShow: true,
    };
    render() {
        return (
            <Router>
                <Layout style={{ height: "100%" }}>
                    <Sider
                        collapsed={this.state.collapsed}
                        trigger={null}
                        breakpoint="lg"
                        collapsedWidth={this.state.toggleIconShow ? "80" : "0"}
                        onBreakpoint={(broken) => this.onBreakpointFn(broken)}
                    >
                        <div className="logo" />
                        <MenuCom routes={routes} />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{
                            margin: '10px', padding: 20, background: '#fff', minHeight: 280,
                        }}
                        >
                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </Content>
                        {/* <Footer>Footer</Footer> */}
                    </Layout>
                </Layout>
            </Router>
        );
    }
    // menu 切换按钮
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    // 响应式布局
    onBreakpointFn = (broken: boolean) => {
        this.setState({
            collapsed: broken,
            toggleIconShow: !broken,
        });
    }
}