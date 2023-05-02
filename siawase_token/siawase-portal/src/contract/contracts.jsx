import token_contract from "./token_abi.json";
import { token_address } from "./config"
import { BigNumber, ethers } from "ethers";
import { parseUnits, shallowCopy } from 'ethers/lib/utils';
import { useEffect } from 'react';
const { ethereum } = window;



const token_abi = token_contract.abi;

// function Contracts_MetaMask(){
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const Token_Contract = new ethers.Contract(token_address, token_abi, signer);
const listener =null;
const transfer_filters = Token_Contract.filters["Transfer"];
class Contracts {
    
    async get_chain_id() {

        const chainId = await provider.getNetwork();

        return chainId["chainId"];

    }
    async get_account() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
    }
    async change_network() {
        const networkParam = {
            chainId: '0x13466',
            chainName: 'fujihalab chain',
            nativeCurrency: { name: 'Fuji', symbol: 'FUJI', decimals: 18 },
            rpcUrls: ['https://ik1-206-76848.vs.sakura.ne.jp'],
            blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
        };
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [networkParam],
        });
        window.location.reload();

    }

    async mint_nft() {
        const account = this.get_account();
        await Token_Contract.mint(account);
    }

    async get_owned_tokens(address) {
        return Token_Contract.getOwnedTokens(address);
    }
    async get_tokenURI(tokenId) {
        console.log(tokenId)
        return Token_Contract.tokenURI(tokenId);
    }
    async transfer(to, tokenId) {
        const account = await this.get_account();
        await Token_Contract.transferFrom(account, to, tokenId);
    }

    async event_transfer(pattern) {
        const account = await this.get_account();
        
        
        // リスナーの設定
        provider.once(transfer_filters(account), (from, to, tokenId, event) => {
          console.log("hit")
          console.log(account, from, to, tokenId, event);
          window.location.reload();
        });
        
       
    }

    async stop_event_transfer(){
        console.log(listener);
        const account = await this.get_account();
        // Token_Contract.off(transfer_filters(account), listener);
        //console.log("remove_wafafawflaknfpakwn");
        // let a=provider.off(transfer_filters(account), (from, to, tokenId, event) => {
        //     console.log("hit")
        //     console.log(account, from, to, tokenId, event);
        //     window.location.reload();
        //   });
        
        //   console.log(a);
        //   console.log(provider)
        console.log(provider.off(transfer_filters(account)));
        console.log(provider.listeners(transfer_filters(account)));

    }

    




}


export default Contracts;