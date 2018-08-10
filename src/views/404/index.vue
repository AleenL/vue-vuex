<!--created by allen on 2018/05/29-->

<template>
	<div class="flex-1 wrapper-home width-all" ref="wrapper" @mousemove="move">
		<div class="pt-100">
			<svg width="100%" height="100">
				<text text-anchor="middle" x="50%" y="50%" class="text text-1">
					404 NOTFIND
				</text>
				<text text-anchor="middle" x="50%" y="50%" class="text text-2">
					404 NOTFIND
				</text>
				<text text-anchor="middle" x="50%" y="50%" class="text text-3">
					404 NOTFIND
				</text>
				<text text-anchor="middle" x="50%" y="50%" class="text text-4">
					404 NOTFIND
				</text>
			</svg>
		</div>
		<div class="flex-center flex-co">
			<p class="font-16 font-900 color-40 mt-20 ">Oops!</p>
			<p class="font-16 font-900 color-40 mt-20 ">网页已经消失在外太空了</p>
			<p class="font-16 font-900 color-40 mb-20 pt-10">送你一只比卡丘吧</p>
			<a class="mb-20 mt-20 pl-10 pr-10 flex-center font-14 color-40 height-30 bor-40" href="/hello">返回首页</a>
		</div>
		<div class="code-wrapper">
			<pre id="code"></pre>
		</div>
		<div class="preview-wrapper flex"  >
			<div class="preview">
				<div class="wrapper">
					<div class="lowerLip-wrapper">
						<div class="lowerLip" :style="{'border-radius': '200px/2000px'}"></div>
					</div>
					<div class="nose"></div>
					<div class="eye left" :style="{'transform':`translateX(${5*percentX}px) translateY(${5*percentY}px)`}">
						<div class="child" ></div>
					</div>
					<div class="eye right" :style="{'transform':`translateX(${5*percentX}px) translateY(${5*percentY}px)`}">
						<div class="child" ></div>
					</div>
					<div class="face left"></div>
					<div class="face right"></div>
					<div class="upperLip left"></div>
					<div class="upperLip right"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: '404Page',
		data: () => ({
			percentX: 0,
			percentY: 0
		}),
		methods: {
			move(e) {
				let x = e.pageX - this.$refs.wrapper.offsetLeft
				let y = e.pageY - this.$refs.wrapper.offsetTop
				let centerX = this.$refs.wrapper.offsetWidth / 2
				let centerY = this.$refs.wrapper.offsetHeight / 2
				let deltaX = x - centerX
				let deltaY = y - centerY
				this.percentX = deltaX / centerX
				this.percentY = deltaY / centerY
				
			}
		}
	}
</script>

<style>
	.text {
		font-size: 64px;
		font-weight: bold;
		text-transform: uppercase;
		fill: none;
		stroke-width: 2px;
		stroke-dasharray: 90 310;
		animation: stroke 6s infinite linear;
	}
	
	.text-1 {
		stroke: #3498db;
		text-shadow: 0 0 5px #3498db;
		animation-delay: -1.5s;
	}
	
	.text-2 {
		stroke: #f39c12;
		text-shadow: 0 0 5px #f39c12;
		animation-delay: -3s;
	}
	
	.text-3 {
		stroke: #e74c3c;
		text-shadow: 0 0 5px #e74c3c;
		animation-delay: -4.5s;
	}
	
	.text-4 {
		stroke: #9b59b6;
		text-shadow: 0 0 5px #9b59b6;
		animation-delay: -6s;
	}
	
	@keyframes stroke {
		100% {
			stroke-dashoffset: -400;
		}
	}
	
	.wrapper-home {
		height: 100vh;
		background: #FEE433;
		
	}
	
	.preview-wrapper{
		perspective: 2000;
	}
	
	.wrapper {
		width: 100%;
		height: 165px;
		position: relative;
	}
	
	.preview {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.preview {
		background: #FEE433;
	}
	
	.nose {
		width: 0px;
		height: 0px;
		border-style: solid;
		border-width: 12px;
		border-color: black transparent transparent;
		border-radius: 11px;
		position: absolute;
		left: 50%;
		top: 28px;
		margin-left: -12px;
	}
	
	.eye {
		width: 49px;
		height: 49px;
		background: #2E2E2E;
		position: absolute;
		border-radius: 50%;
		border: 2px solid #000000;
	}
	
	.eye .child {
		width: 24px;
		height: 24px;
		background: white;
		position: absolute;
		border-radius: 50%;
		left: 6px;
		top: -1px;
		border: 2px solid #000;
	}
	
	.eye.left {
		right: 50%;
		margin-right: 90px;
	}
	
	.eye.right {
		left: 50%;
		margin-left: 90px;
	}
	
	.face {
		width: 68px;
		height: 68px;
		background: #FC0D1C;
		border: 2px solid black;
		border-radius: 50%;
		position: absolute;
		top: 85px;
	}
	
	.face.left {
		right: 50%;
		margin-right: 116px;
	}
	
	.face.right {
		left: 50%;
		margin-left: 116px;
	}
	
	.upperLip {
		height: 25px;
		width: 80px;
		border: 2px solid black;
		position: absolute;
		top: 50px;
		background: #FDE348;
	}
	
	.upperLip.left {
		right: 50%;
		border-bottom-left-radius: 40px 25px;
		border-top: none;
		border-right: none;
		transform: rotate(-20deg);
	}
	
	.upperLip.right {
		left: 50%;
		border-bottom-right-radius: 40px 25px;
		border-top: none;
		border-left: none;
		transform: rotate(20deg);
	}
	
	.lowerLip-wrapper {
		bottom: 0;
		position: absolute;
		left: 50%;
		margin-left: -150px;
		height: 110px;
		overflow: hidden;
		width: 300px;
	}
	
	.lowerLip {
		height: 3500px;
		width: 300px;
		background: #990513;
		
		border: 2px solid black;
		position: absolute;
		bottom: 0;
		overflow: hidden;
	}
	
	.lowerLip:after {
		content: '';
		position: absolute;
		bottom: -20px;
		width: 100px;
		height: 100px;
		background: #FC4A62;
		left: 50%;
		margin-left: -50px;
		border-radius: 50px;
	}
</style>