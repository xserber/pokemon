import React, { useEffect } from "react"
import { withRouter, useLocation } from "react-router-dom"

type Props = {
  children?: React.ReactNode
}

const ScrollToTop = ({ children }: Props): React.ReactElement | null => {
  const location = useLocation()

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return <>{children}</>
}

export default withRouter(ScrollToTop)
