import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/layout/Header/Header'
import { Overview } from './components/pages/Overview/Overview'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header />
		<Overview />
	</StrictMode>
)
