import React from 'react'
import Styles from './css.module.css'

export default function Magnify() {
    return (
        <div>
            <div class={Styles.span}>
                <div class={Styles.magnifier}></div>
            </div>
        </div>
    )
}
