
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import PopupDiv from "./popup";


function Nft_card(props) {

    const [meta_data, set_meta_data] = useState(null);
    const get_variable = async () => {//同期処理を行う関数を定義
        //set_owned_tokens(await props.cont.get_owned_tokens(address));
        //JSON.parse(atob(encodedString.split(',')[1]));
        let uri = await props.cont.get_tokenURI(props.token_id.toString());
        console.log(uri)

        set_meta_data(JSON.parse(atob(uri.split(',')[1])));
    }

    const set_active_token = () => {
        props.setShowFlag(true);
        props.setTarget_tokenId(props.token_id.toString());
      };

    useEffect(() => {
        get_variable();
    }, []);

    if (meta_data != null) {
        return (
            <>
                <PopupDiv  set_active_token={set_active_token}>
                    <img src={meta_data["image"]} style={{ "max-width": "100%", "max-height": "100%" }} />
                </PopupDiv>

            </>
        )
    }
    else {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        )
    }

}

export default Nft_card;