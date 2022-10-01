import { useWeb3 } from 'hooks/Web3Client'
import React from 'react'
import Tooltip from 'components/tooltip'

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null
}

const DisconnectButton: React.FC<DisconnectProps> = ({ disconnect }) => {
  const { address } = useWeb3()

  return disconnect ? (
    <>
      <button className='secondaryBtn' type='button' disabled>
        <span className='secondaryBtnText addressText'>{address}</span>
      </button>
      <button className='secondaryBtn' type='button' onClick={disconnect}>
        <span className='secondaryBtnText'>Disconnect</span>
      </button>
    </>
  ) : (
    <button className='secondaryBtn' type='button'>
      <span className='secondaryBtnText'>Loading...</span>
    </button>
  )
}

export default DisconnectButton
