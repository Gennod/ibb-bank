import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header/Header'
import { Dashboard } from './components/pages/Dashboard/Dashboard'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/dashboard' replace />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
