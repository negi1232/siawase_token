
import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';



function Mint_page(prpos) {

    return(
        <div>
            <h1>幸せトークン</h1>
            <Button variant="primary" onClick={() =>prpos.cont.mint_nft()} style={{ marginTop: '20px' }}>
                            クイズを作成
                        </Button>
        </div>
    )
}

export default Mint_page;