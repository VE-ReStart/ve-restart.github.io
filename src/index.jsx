import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Product from './routes/Products'
import Customize from './routes/Customize'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Product />} />
				<Route path='/customize' element={<Customize />} />
			</Routes>
		</Router>
	</React.StrictMode>
)

