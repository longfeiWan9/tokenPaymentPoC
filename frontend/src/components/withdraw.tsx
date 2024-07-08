import { useState } from 'react';
import { useWaitForTransactionReceipt,useWriteContract,useReadContract } from 'wagmi'
import paymentContract from "../contracts/PaymentContract.json"
import { parseEther } from 'viem'

const PAYMENT_CONTRACT_ADDRESS = "0x52E47557508Dea5bdE04E2e9a308b138ECEe0BBC"
const abi = paymentContract.abi;
 
export function Withdraw() {
    const [amount, setAmount] = useState('')

    const { 
        data: hash, 
        isPending,
        writeContract 
      } = useWriteContract()

    // const wagmigotchiContract = {
    //     address: PAYMENT_CONTRACT_ADDRESS,
    //     abi: abi,
    // } as const

    // const { 
    //     data:balance,
    //     error
    //   } = useReadContract({
    //     ...wagmigotchiContract,
    //     functionName: 'balanceOf',
    //     args: [PAYMENT_CONTRACT_ADDRESS],
    // })
    
    const handleWithdraw = async () =>{
        writeContract({
            address: PAYMENT_CONTRACT_ADDRESS,
            abi:abi,
            functionName: 'withdraw',
            args: [parseEther(amount)]
        });  
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({hash,
    })

    return (
        <div>
            <h3 className="text-4xl font-bold mb-20">{"Withdraw received wFIL payment"}</h3>
            {/* <div>wFIL Balance: {balance?.toString()}</div> */}
            <input
                type="text"
                placeholder="0.05"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            /> wFIL
            <div style={{paddingTop: 12}}>
                <button onClick={handleWithdraw} disabled={isPending}>Withdraw</button>
            </div> 
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed &&  <div>Payment is confirmed...</div>}
            {hash && <div>Transaction Hash: {hash}</div>}
        </div>
        

        
    )
}