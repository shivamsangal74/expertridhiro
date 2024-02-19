import { useState, useEffect } from 'react';
import axios from 'axios';
import { url, profileId } from '../Confing.js';
import { useSelector, useDispatch } from 'react-redux';
import '../css/amc.css'
export default function Amc() {



    return (
        <>
        <h1 style={{"textAlign":"center","marginTop":"30px"}}>
        RO AMC Services
        </h1>
        <p style={{"textAlign":"center","marginTop":"30px","marginBottom":"30px"}}>
        Our RO Water Purifiers Repair AMC Service covers different sections and designed to purify the water. These are best to be used for residential, commercial or industrial sectors and help customers get the maximum benefits. We apply our experience and expertise to suggest the best service and support. Our team works dedicatedly to repair and maintain the purifiers using the right tools and technology.
        </p>

        <div className='container'>
     
            <div className="row">
                <div className="col-md-3">
                    <div className="card">

                        <div className="card-body">
                            <div className="pricingTable">
                                <div className="pricingTable-header">
                                    <h3 className='title'>AMC Plan-1</h3>
                                    <div className="price-value">
                                        <i className="fas fa-rupee-sign"></i> 990
                                        <span className="month">Per Year</span>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <h6 className="card-text">Three periodical services for one year.</h6>
                                    <h6 className="card-text">No Visit Charge</h6>
                                    <h6 className="card-text">No Service Charge</h6>
                                    <h6 className="card-text">All spares are chargeable</h6>

                                    <h6 className="card-text">Any additional visit during AMC period by intimation.</h6>
                                    <h6 className="card-text">Filters, Electrical Parts &amp; Membrane not included.</h6>
                                </ul>
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">

                        <div className="card-body">
                            <div className="pricingTable green">
                                <div className="pricingTable-header">  
                                    <h3 className='title'>AMC Plan-2</h3>
                                    <div className="price-value">
                                        <i className="fas fa-rupee-sign"></i> 1850
                                        <span className="month">Per Year</span>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <h6 className="card-text">Replacement of Sediment Spun/ inline, Carbon inline.</h6>
                                    <h6 className="card-text">Three periodical services.</h6>
                                    <h6 className="card-text">No Visit Charge.</h6>
                                    <h6 className="card-text">No Service Charge</h6>
                                    <h6 className="card-text">All spares are chargeable</h6>

                                    <h6 className="card-text">Any additional visit during AMC period by intimation.</h6>
                                    <h6 className="card-text">Electrical parts & membrane not included.</h6>
                                </ul>
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">

                        <div className="card-body">
                            <div className="pricingTable blue">
                                <div className="pricingTable-header">
                                    <h3 className='title'>AMC Plan-3</h3>
                                    <div className="price-value">
                                        <i className="fas fa-rupee-sign"></i> 3500
                                        <span className="month">Per Year</span>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <h6 className="card-text">Replacement of Sediment Spun/ inline, Carbon inline.</h6>
                                    <h6 className="card-text">Replacement of Membrane.</h6>
                                    <h6 className="card-text">Three periodical services.</h6>
                                    <h6 className="card-text">No Visit Charge, No Service Charge.</h6>
                                    <h6 className="card-text">Any additional visit during AMC period by intimation.</h6>
                                    <h6 className="card-text">Electrical parts included.</h6>
                                </ul>
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">

                        <div className="card-body">
                            <div className="pricingTable skyblue">
                                <div className="pricingTable-header">
                                    <h3 className='title'>AMC Plan-4</h3>
                                    <div className="price-value">
                                        <i className="fas fa-rupee-sign"></i> 4500
                                        <span className="month">Per Year</span>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <h6 className="card-text">Replacement of Sediment Spun/ inline, Carbon inline, Post carbon.</h6>
                                    <h6 className="card-text">Replacement of Membrane.</h6>
                                    <h6 className="card-text">Three periodical services.</h6>
                                    <h6 className="card-text">Electrical parts included.</h6>
                                    <h6 className="card-text">We repair/replace all faulty electrical parts.</h6>
                                </ul>
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





        </div>
        </>
    )

}
