import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/ignite-timer" element={<DefaultLayout />}>
        <Route path="/ignite-timer" element={<Home />} />
        <Route path="/ignite-timer/history" element={<History />} />
      </Route>
    </Routes>
  )
}
