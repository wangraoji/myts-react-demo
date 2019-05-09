import * as React from 'react';
import { Menu, Icon } from 'antd';
import history from '../../../../history';
import { Link } from 'react-router-dom';
export interface Routers {
    routes: any,
}

export default class MenuCom extends React.PureComponent<Routers> {
    public render() {
        const { routes } = this.props;
        let pathName = history.location.pathname;
        let activeInx = "";
        routes.map((route: any, index: any) => {
            if (pathName === route.path) {
                activeInx = index + "";
            }
            return false;
        })
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[activeInx]}>
                {routes.map((route: any, index: any) => (
                    <Menu.Item key={index}>
                        <Icon type={route.icon} />
                        <span>{route.name}</span>
                        <Link to={route.path}></Link>
                    </Menu.Item>
                ))}
            </Menu>
        )
    }
}