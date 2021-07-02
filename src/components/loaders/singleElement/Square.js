import React from 'react'
import Styles from './css.module.css'

export default function Square() {
    return (
        <div>
            <div class={Styles.span}>
                <div class={Styles.square}></div>
            </div>
        </div>
    )
}
