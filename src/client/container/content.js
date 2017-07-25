import React from "react"
import { Route } from "react-router-dom"
import { Layout } from "antd"
import styles from "./content.scss"
import index from "../pages/index"

export default () => (
    <Layout className={styles.content}>
        <Route path="/" component={index} />
    </Layout>
)
