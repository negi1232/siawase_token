import React, { useEffect } from "react";
import "./transfer_Modal.css"
import Wait_Modal from "../../../contract/wait_Modal";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
const Transfer_Modal = (props) => {
    console.log(props.showFlag);
    const [target_address, setTarget_address] = useState("");
    const [wait_show, setWait_show] = useState(false);
    const active_waitModal = () => {
    
        setWait_show(true);
        props.setShowFlag(false);
        props.cont.event_transfer();
    }
    useEffect(() => {
        return () => {
            props.cont.stop_event_transfer();
        }

    }, []);
    return (

        <>
            {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
                <div id="overlay" >
                    <div id="transfer" style={{"color":"#000000"}}>
                        <Form>
                            <Form.Group className="mb-3" controlId="form_titile" style={{ textAlign: "left" }}>
                                <Form.Label>送り先のアドレス</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" value={target_address} onChange={(event) => setTarget_address(event.target.value)} />
                                <div style={{ textAlign: "right" ,margin:"10px" }}>
                                <Button variant="primary" onClick={() => {props.cont.transfer(target_address,props.tokenId) && active_waitModal()} } >
                                    送信を確定
                                </Button>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            ) : (
                <></>// showFlagがfalseの場合はModalは表示しない
            )}
            <Wait_Modal showFlag={wait_show} content={"送信中です。しばらくお待ちください。"} />
        </>
    );
};

export default Transfer_Modal;
