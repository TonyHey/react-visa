import React, { Component } from "react"
import logo from "../logo.svg"
import styles from "./App.scss"

class App extends Component {
    componentDidMount() {
        /* eslint-disable */
        let c = document.getElementsByTagName("canvas")[0],
            x = c.getContext("2d"),
            pr = window.devicePixelRatio || 1,
            w = window.innerWidth,
            h = window.innerHeight,
            f = 90,
            m = Math,
            r = 0,
            u = m.PI * 2,
            v = m.cos,
            z = m.random
        let q
        c.width = w*pr
        c.height = h*pr
        x.scale(pr, pr)
        x.globalAlpha = 0.6
        function i(){
            x.clearRect(0,0,w,h)
            q=[{x:0,y:h*.5+f},{x:0,y:h*.5-f}]
            while(q[1].x<w+f) d(q[0], q[1])
        }
        function d(i,j){
            x.beginPath()
            x.moveTo(i.x, i.y)
            x.lineTo(j.x, j.y)
            const k = j.x + (z()*2-0.25)*f, n = y(j.y)
            x.lineTo(k, n)
            x.closePath()
            r-=u/-50
            x.fillStyle = "#"+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)
            x.fill()
            q[0] = q[1]
            q[1] = {x:k,y:n}
        }
        function y(p){
            const t = p + (z()*2-1.1)*f
            return (t>h||t<0) ? y(p) : t
        }
        document.addEventListener("click", () => i())
        i()
        /* eslint-enable */
    }
    render() {
        return (
            <div className={styles.app}>
                <section className={styles.container}>
                    <div className={styles.app_header}>
                        <img src={logo} className={styles.app_logo} alt="logo" />
                        <h1>Tony Here</h1>
                        <h2>Keep moving and carry on</h2>
                    </div>
                    <p className={styles.app_intro}>
                        <a
                            rel={node => node}
                            href="https://github.com/TonyHey"
                            target="_blank"
                        >github</a>
                    </p>
                    <p className={styles.app_intro}>
                        <a
                            rel={node => node}
                            href="http://project.freedomlove.me"
                            target="_blank"
                        >project</a>
                    </p>
                    <p className={styles.app_intro}>
                        <a
                            rel={node => node}
                            href="https://github.com/TonyHey"
                            target="_blank"
                        >resume</a>
                    </p>
                    <p className={styles.app_intro}>
                        <a
                            rel={node => node}
                            href="https://www.facebook.com/Tonyheee"
                            target="_blank"
                        >facebook</a>
                    </p>
                </section>
                <canvas id="canvas_box" className={styles.canvas}>your browser not suport canvas</canvas>
            </div>
        )
    }
}

export default App