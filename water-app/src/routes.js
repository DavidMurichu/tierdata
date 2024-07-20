import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Charts = React.lazy(() => import('./views/charts/Charts'))
const TopUp = React.lazy(() => import('./views/pages/TopUp/index'))
const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/topup', name: 'topup', element: TopUp },

]

export default routes
