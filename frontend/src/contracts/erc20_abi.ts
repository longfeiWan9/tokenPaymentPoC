export const erc20Abi = [
    {
      name: 'approve',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [{ internalType: 'address', name: 'spender', type: 'address' },
               { internalType: 'uint256', name: 'value', type: 'uint256' }
      ],
      outputs: [{ internalType: 'bool', name: 'value', type: 'bool' }],
    },
    {
      name: 'balanceOf',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [{ internalType: 'address', name: 'spender', type: 'address' }],
      outputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
    }
  ] as const