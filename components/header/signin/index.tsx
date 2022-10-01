import { useWeb3 } from 'hooks/Web3Client'
import React from 'react'
import ConnectButton from './connectButton'
import DisconnectButton from './disconnectButton'

const Signin: React.FC = () => {
  const { web3Provider, connect, disconnect } = useWeb3()

  return web3Provider ? (
    <DisconnectButton disconnect={disconnect} />
  ) : (
    <ConnectButton connect={connect} />
  )
}

export default Signin
