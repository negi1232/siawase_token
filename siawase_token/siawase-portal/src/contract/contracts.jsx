import token_contract from "./token_abi.json";
import {token_address } from "./config"
import { BigNumber, ethers } from "ethers";
import { parseUnits, shallowCopy } from 'ethers/lib/utils';
import { useEffect } from 'react';

const { ethereum } = window;



const token_abi = token_contract.abi;

// function Contracts_MetaMask(){
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const Token_Contract = new ethers.Contract(token_address, token_abi, signer);
class Contracts {
    async get_chain_id() {

        const chainId = await provider.getNetwork();

        return chainId["chainId"];

    }
}

export default Contracts;