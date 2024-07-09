import { useState,useEffect } from 'react'
import { useWaitForTransactionReceipt,useWriteContract, useAccount} from 'wagmi'
import paymentContract from "../contracts/PaymentContract.json"
import { erc20Abi } from '../contracts/erc20_abi'
import { parseEther } from 'viem'

const PAYMENT_CONTRACT_ADDRESS = "0x52E47557508Dea5bdE04E2e9a308b138ECEe0BBC";
const WFIL_CONTRACT_ADDRESS = "0xaC26a4Ab9cF2A8c5DBaB6fb4351ec0F4b07356c4"
const abi = paymentContract.abi;
 
export function PayToken() {
    const [amount, setAmount] = useState('')
    const [isApproveConfirmed, setIsApproveConfirmed] = useState(false)
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false)
    const [isPaymentSent, setIsPaymentSent] = useState(false)
    const { isConnected } = useAccount()
    const { 
        data: hash, 
        isPending,
        writeContract 
      } = useWriteContract()
    
    const { isLoading: isConfirming, isSuccess: isConfirmed } =
      useWaitForTransactionReceipt({hash})
    
    const handlePayment = async () =>{
        writeContract({
            address: WFIL_CONTRACT_ADDRESS,
            abi:erc20Abi,
            functionName: 'approve',
            args: [PAYMENT_CONTRACT_ADDRESS,parseEther(amount)]
        })
    }

    useEffect(() => {
        if(isConfirmed){
            if(!isApproveConfirmed){
                setIsApproveConfirmed(isConfirmed);

                if(!isPaymentSent){
                    writeContract({
                        address: PAYMENT_CONTRACT_ADDRESS,
                        abi,
                        functionName: 'pay',
                        args: [parseInt(amount, 18)],
                    })
                    setIsPaymentSent(true);
                }
            }
            else if(!isPaymentConfirmed){
                setIsPaymentConfirmed(isConfirmed)
            }
        }

    }, [isConfirming, isConfirmed]);

    if(isConnected){
        return (
            <div>
                <h3 className="text-4xl font-bold mb-20">{"Pay the service with wFIL token"}</h3>
                <input
                    type="text"
                    placeholder="0.05"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                /> wFIL
                <div style={{paddingTop: 12}}>
                    <button onClick={handlePayment} disabled={isPending}>Pay</button>
                </div>
                {hash && <div>Transaction Hash: {hash}</div>}
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isApproveConfirmed &&  <div>Approve is confirmed...</div>}
                {isPaymentConfirmed &&  <div>Payment is received...</div>}
            </div>
        )
    }
    
}