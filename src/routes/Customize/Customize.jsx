function CustomizeSection() {
	return (
		<section id='CustomizeSection'>
			<script
				async
				src='https://docs.opencv.org/master/opencv.js'
				onLoad='onOpenCvReady();'
				onError="console.error('Error loading opencv.js');"
			></script>
			<input type='file' id='fileInput' aria-label='File chooser' />
			<div id='canvasContainer'>
				<canvas
					id='canvasOutput'
					tabindex='0'
					aria-label='Image processing result'
				></canvas>
			</div>
			<div id='buttonGroup'>
				<button onClick='zoom(.1)' aria-label='Zoom in'>
					Zoom in
				</button>
				<button onClick='zoom(-.1)' aria-label='Zoom out'>
					Zoom out
				</button>
				<button
					onClick="updateEdgeColor('red')"
					aria-label='Change edge color to red'
				>
					Red Edges
				</button>
				<button
					onClick="updateEdgeColor('green')"
					aria-label='Change edge color to green'
				>
					Green Edges
				</button>
				<button
					onClick="updateEdgeColor('blue')"
					aria-label='Change edge color to blue'
				>
					Blue Edges
				</button>
				<button
					onClick="updateEdgeColor('black')"
					aria-label='Change edge color to black'
				>
					Black Edges
				</button>
				<button
					onClick="updateEdgeColor('white')"
					aria-label='Change edge color to white'
				>
					white Edges
				</button>
			</div>
		</section>
	)
}

export default CustomizeSection

