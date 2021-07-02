import React from 'react'
import Styles from './css.module.css'

export default function Location() {
    return (
        <div>
            <div class={Styles.span}>
                <div class={Styles.location_indicator}></div>
            </div>
        </div>
    )
}
