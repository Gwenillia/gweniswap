import React from 'react'

interface ConnectProps {
  connect: (() => Promise<void>) | null
}

const ConnectButton: React.FC<ConnectProps> = ({ connect }) => {
  return connect ? (
    <button className='secondaryBtn' type='button' onClick={connect}>
      <span className='secondaryBtnText'>Connect to Wallet</span>
    </button>
  ) : (
    <button className='secondaryBtn' type='button'>
      <span className='secondaryBtnText'>Loading...</span>
    </button>
  )
}

export default ConnectButton
