import React from 'react'
import Styles from './css.module.css'

export default function Timer() {
    return (
        <div>
            <div class={Styles.span}>
                <div class={Styles.timer}></div>
            </div>
        </div>
    )
}
