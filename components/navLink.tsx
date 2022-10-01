import React from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Link, { LinkProps } from 'next/link'

type NavLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: string;
}

const NavLink = ({
  children,
  activeClassName = 'active',
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter()
  const child = React.Children.only(children) as React.ReactElement
  const childClassName = child.props.className || ''
  const isActive = asPath === props.href || ''
  const className = cx(childClassName, { [activeClassName]: isActive })

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

export default NavLink
