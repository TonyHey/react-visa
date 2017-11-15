import React from "react"
import { Link } from "react-router-dom"
import { Menu, Icon, Switch, Layout } from "antd"
import allMenu from "../../common/utils/menu"
import Top from "./header"
import Contents from "./content"
import Footer from "./bottom"
import "./App.scss"

const SubMenu = Menu.SubMenu
const { Sider } = Layout

export default class Container extends React.Component {
    state = {
        theme: "dark",
        current: "home",
        collapsed: false,
        mode: "inline",
    }
    componentDidMount() {
        const path = this.props.location.pathname.split("/")
        const selectedKey = !path[path.length - 1] ? "home" : path[path.length - 1]
        this.handleClick([], selectedKey)
    }
    changeTheme = value => {
        this.setState({
            theme: value
                ? "dark"
                : "light"
        })
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            mode: this.state.collapsed
                ? "inline"
                : "vertical"
        })
    }
    clear = () => {
        this.setState({ current: "home" })
    }
    handleClick = (e, special) => {
        this.setState({
            current: e.key || special
        })
    }
    render() {
        return (
            <Layout className="containAll">
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="leftMenu">
                    {this.state.theme === "light"
                        ? <a
                            rel="noopener noreferrer"
                            href="https://github.com/tonyhey"
                            target="_blank"
                        >
                            <Icon type="github" className="github" />
                        </a>
                        : <a
                            rel="noopener noreferrer"
                            href="https://github.com/tonyhey"
                            target="_blank"
                        >
                            <Icon type="github" className="github white" />
                        </a>}
                    {this.state.theme === "light"
                        ? <span className="author">Tony</span>
                        : <span className="author white">Tony</span>}
                    <Menu theme={this.state.theme} onClick={this.handleClick} defaultOpenKeys={[""]} selectedKeys={[this.state.current]} className="menu" mode={this.state.mode}>
                        {allMenu.map(subMenu => {
                            if (subMenu.children && subMenu.children.length) {
                                return (
                                    <SubMenu
                                        key={subMenu.url}
                                        title={
                                            <span><Icon type={subMenu.icon} /><span>
                                                {subMenu.name}
                                            </span></span>
                                        }
                                    >
                                        {subMenu.children.map(menu => (
                                            <Menu.Item key={menu.url}>
                                                <Link to={`/${menu.url}`}>{menu.name}</Link>
                                            </Menu.Item>
                                        ))}
                                    </SubMenu>
                                )
                            }
                            return (
                                <Menu.Item key={subMenu.url}>
                                    <Link to={`/${subMenu.url === "home" ? "" : subMenu.url}`}>
                                        <Icon type={subMenu.icon} />
                                        <span className="nav-text">{subMenu.name}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        })
}
                    </Menu>
                    <div className="switch">
                        <Switch checked={this.state.theme === "dark"} onChange={this.changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
                    </div>
                </Sider>
                <Layout>
                    <Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear} />
                    <Contents />
                    <Footer />
                </Layout>
            </Layout>
        )
    }
}
