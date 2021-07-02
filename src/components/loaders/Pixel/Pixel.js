import React from 'react'
import style from './css.module.css'
export default function Pixel(props) {
    return (
        <div>
            <div class={style.loading}>
                <h2>{props.title}</h2>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
