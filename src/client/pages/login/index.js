import React from "react"
import { Form, Input, Button, notification, Icon } from "antd"

import styles from "./index.scss"

const FormItem = Form.Item

class LoginPage extends React.Component {
    componentDidMount() {
        this.openNotificationWithIcon("info")
    }
    handleSubmit = e => {
        e.preventDefault()
        const n = this.props.form.getFieldsValue().username
        const p = this.props.form.getFieldsValue().password
        if (n === "123" && p === "123") {
            // 表单的路由处理
            this.props.history.push("/")
        } else {
            this.openNotificationWithIcon("info")
        }
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = type => notification[type]({
        message: "Hello, World",
        description: "username:123, password:123",
        duration: 6,
        icon: <Icon type="smile-circle" style={{ color: "#108ee9" }} />
    })

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className={styles.loginpagewrap}>
                <div className={styles.box}>
                    <p>Welcome</p>
                    <div className={styles.loginWrap}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator("username", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "please input username"
                                        }
                                    ]
                                })(<Input placeholder="Username" />)}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator("password", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "please input password"
                                        }
                                    ]
                                })(<Input type="password" placeholder="Password" />)}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className={styles.loginBtn}>Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const Login = Form.create()(LoginPage)
export default Login
