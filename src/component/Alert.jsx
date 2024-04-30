import React from 'react'

function Alert({ type,colors }) {
    return (
        <>
            <div
                className={colors}
                role="alert"
            >
                <span className="font-medium"></span> {type}
            </div>
        </>
    )
}

export default Alert