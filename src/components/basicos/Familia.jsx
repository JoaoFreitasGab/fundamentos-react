import React, { cloneElement } from 'react'


export default function Familia(props) {

    return (
        <div>
            {
                React.Children.map((child, i) => {
                    return cloneElement(child, {...props, key: i});

                })
            }
        </div>

    )


}