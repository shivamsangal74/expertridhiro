import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { url, profileId } from '../Confing.js';
import { useParams } from "react-router-dom";
import '../css/serial.css'
import logo from '../rologo.jpeg';
export default function Serial() {

    const params = useParams()
    const [Serial, setSerial] = useState([]);
    const [loding, setLoding] = useState(false);
    const serialno = params.id;
    // const { data, loading, error } = useFetch(`${url}checkserialno` ,{method:'post',data:{profileId: profileId, serialno}});


    useEffect(async () => {
        setLoding(true)
        let response = await axios.post(`${url}checkserialno`, { profileId: profileId, serialno });
        if (response.data.Data.length == 0) {
            setSerial('');
            setLoding(false)
        }
        else {
            if (response.data.Data[0].name) {
                setSerial(response.data.Data[0].name);
                setLoding(false)
            }
        }
    }, []);


    return (


        <>
            {
                loding &&
                <h1 className='center'>Loading....</h1>
            }
            {
                Serial.length != 0 &&
                <div className='container'>
                    <img src={logo} className="img-responsive logo" alt="Livpure Logo"></img>
                    <div className='card_new'>
                        <h1>Spare Genuinity check</h1>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label className='label' >Serial Number :</label>
                                <input type="text" className="form-control hasValue" id="serial_number" placeholder="Serial Number" value={serialno} readOnly />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label className='label' >Name :</label>
                                <input type="text" className="form-control hasValue" id="serial_number" placeholder="Serial Number" value={Serial} readOnly />
                            </div>
                        </div>
                        <div className="valid" >
                            <div className="msg-alignment">
                                <div className="circle-icon-tick"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                                <div className="msg-text">This serial number is genuine</div>
                            </div>
                        </div>

                    </div>
                </div>
            }{
                Serial == '' && !loding &&
                <div className='container'>

                    <div className="not_valid" >
                        <div className="msg-alignment">
                            <div className="circle-icon"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
                            <p></p>
                            <div className="msg-text">This product is not genuine, please call us on +91 7017914909</div>
                        </div>
                    </div>
                </div>
            }

        </>

    )
}
