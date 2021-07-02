import React from 'react'
import Styles from './css.module.css'

export default function TypingLoader() {
    return (
        <div>
            <div class={Styles.span}>
                <div class={Styles.typing_loader}></div>
            </div>
        </div>
    )
}
