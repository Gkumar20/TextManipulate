import React from 'react'

export default function Alert(props) {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.alert.type}</strong> :<strong>{props.alert.msg}</strong>
            </div>
        </div>
    )
}
