
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nft_card from './components/nft_card';
import Transfer_Modal from './components/transfer_modal';


function Owned_tokens_page(props) {
    const { address } = useParams();
    const [owned_tokens, set_owned_tokens] = useState(null);
    const [target_tokenId, setTarget_tokenId] = useState(null);
    const [showFlag, setShowFlag] = useState(false);

    const get_variable = async () => {//同期処理を行う関数を定義
        
        set_owned_tokens(await props.cont.get_owned_tokens(address));
    }

    useEffect(() => {
      
        get_variable();
    }, []);

    if (owned_tokens != null) {
        return (
            <div className='container '>
                
                <h1>{address.slice(0, 20)}...の幸せトークン</h1>


                <div className='row'>
                    {owned_tokens.map((token, index) => {
                        return (
                            <>

                                <div className='col-3' key={index} style={{ "overflow": "hidden", "padding": 0 }}>

                                    <Nft_card cont={props.cont} token_id={token["_hex"]} setShowFlag={setShowFlag} setTarget_tokenId={setTarget_tokenId}/>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
                <Transfer_Modal cont={props.cont} showFlag={showFlag} setShowFlag={setShowFlag} tokenId={target_tokenId}/>

            </div>
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

export default Owned_tokens_page;