import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Products from './routes/Products'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
			</Routes>
		</Router>
	</React.StrictMode>
)
