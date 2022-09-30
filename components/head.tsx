import React from 'react'
import NextHead from 'next/head'

type Props = {
  title: string
  description: string
}

const Head: React.FC<Props> = ({ title, description }) => (
  <NextHead>
    <title>{title}</title>
    <meta name='description' content={description} />
    <link rel="icon" href='/favicon.ico' />
  </NextHead>
)

export default Head
