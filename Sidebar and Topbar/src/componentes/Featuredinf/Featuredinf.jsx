import React from 'react';
import './featuredinf.css';

export default function FeuaturedInf() {
    return (
        <div className='featured'>
            <div className="featureditem">
                <span className="featuredtitle">teste</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,2</span>
                </div>
                <span className="featuredsub">compared to last day</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Sales</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,212</span>
                </div>
                <span className="featuredsub">compared to last day</span>
            </div>
        </div>
    )
}
