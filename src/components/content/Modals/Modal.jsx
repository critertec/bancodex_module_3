import React from 'react';
import './Modal.css';

export default ({ 
    handleChange,
    children
 }) => {

    const onClose = (e) => {
        e.stopPropagation()

        handleChange && handleChange();
    }

    return (
        <div 
            className="modal"
            onClick={onClose}
        >
            <div 
                className="modal-content"
                onClick={ e => e.stopPropagation() }
            >
                <span 
                    className="close"
                    onClick={ onClose }
                >
                    &times;
                </span>

                    {children}
            </div>
        </div>
    )
}