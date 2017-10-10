import React from "react"
import { Route } from "react-router-dom"
import { Layout } from "antd"
import styles from "./content.scss"
import index from "../pages/index"
import hhh from "../pages/hhh"
import jjj from "../pages/jjj"

export default () => (
    <Layout className={styles.content}>
        <Route path="/" exact component={index} />
        <Route path="/hhh" component={hhh} />
        <Route path="/jjj" component={jjj} />
    </Layout>
)
