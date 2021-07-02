import React from 'react'
import style from './css.module.css'
export function Triangle() {
    return (
        <div>
            <div className={style.loader}>
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
            </div>
        </div>
    );
}
