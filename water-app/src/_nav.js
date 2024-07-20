import React from 'react'
import CIcon from '@coreui/icons-react'
import {
 
  cilChartPie,
 
  cilSpeedometer,
 
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
     
    },
  },
 
  {
    component: CNavItem,
    name: 'Top Up',
    to: '/topup',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  
 
 
]

export default _nav
