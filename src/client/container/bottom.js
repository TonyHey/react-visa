import React from "react"
import { Layout } from "antd"
import "./bottom.scss"

const { Footer } = Layout

export default class Bottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
    }
    // 组件渲染后开始循环执行tick函数
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    // 组件将要死亡时清除计时器，不清除也可以
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    tick = () => {
        this.setState({ timer: this.state.timer + 1 })
    }

    render() {
        return (
            <Footer className="bottom animated bounceInLeft">
                <div className="text">
                    <div><span className="me">©2017</span>
                        <span className="stay">stayed <span className="time">{this.state.timer}</span> s</span></div>
                </div>
            </Footer>
        )
    }
}
