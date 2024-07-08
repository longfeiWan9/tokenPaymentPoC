import { useState } from 'react';
import { type BaseError,useWaitForTransactionReceipt,useWriteContract,useReadContract,useAccount } from 'wagmi'
import paymentContract from "../contracts/PaymentContract.json"
import { parseEther } from 'viem'

const PAYMENT_CONTRACT_ADDRESS = "0x52E47557508Dea5bdE04E2e9a308b138ECEe0BBC"
const abi = paymentContract.abi;
 
export function Withdraw() {
    const [amount, setAmount] = useState('')
    const {address,isConnected } = useAccount()
    const { 
        data: hash, 
        writeContract 
      } = useWriteContract()

    const wagmiContractConfig = {
        address: PAYMENT_CONTRACT_ADDRESS,
        abi: abi,
    } as const

    const { 
        data:onwerAddress,
        isPending
      } = useReadContract({
          ...wagmiContractConfig,
          functionName: 'getOwner',
          args: [],
      })
    
    const { 
        data:paymentToken,
      } = useReadContract({
          ...wagmiContractConfig,
          functionName: 'getPaymentToken',
          args: [],
      })
    const { 
        data:balance,
        error,
      } = useReadContract({
          ...wagmiContractConfig,
          functionName: 'getContractBalance',
          args: [],
      }) 

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

    if (isPending) return <div>Loading...</div> 

    if (error)
        return (
          <div>
            Error: {error.message}
          </div>
    )

    if(isConnected && onwerAddress==address){
        return (
            <div>
                <h3 className="text-4xl font-bold mb-20">{"(ADMIN) Withdraw received wFIL"}</h3>
                <>
                    <div>Owner: {onwerAddress?.toString()}</div>
                    <div>Payment Token: {paymentToken?.toString()}</div> 
                    <div>Balance: {balance?.toString()} wFIL</div> 
                </>
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
}