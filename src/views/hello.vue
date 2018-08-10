<!--created by allen on 2018/05/29-->

<template>
	<div class="width-all padding-20">
		<Row class-name="mb-20">
			<Col span="6" justify="center">
			<div class="list-items width-150 height-60 bor-40 margin-auto bor-rad-5 flex-start-center">
				<Icon type="ios-school" class="font-30 pr-10 pl-10 "/>
				<div class="flex-1 pl-10 bor-l height-60 pt-10">
					<p class="font-12 color-black ">在校大学生</p>
					<p class="font-16 color-black font-500">3456</p>
				</div>
			</div>
			</Col>
			<Col span="6" justify="center">
			<div class="list-items width-150 height-60 bor-40 margin-auto bor-rad-5 flex-start-center">
				<Icon type="md-cart" class="font-30 pr-10 pl-10 "/>
				<div class="flex-1 pl-10 bor-l height-60 pt-10">
					<p class="font-12 color-black ">购买率</p>
					<p class="font-16 color-black font-500">76.6%</p>
				</div>
			</div>
			</Col>
			<Col span="6" justify="center">
			<div class="list-items width-150 height-60 bor-40 margin-auto bor-rad-5 flex-start-center">
				<Icon type="ios-globe" class="font-30 pr-10 pl-10 "/>
				<div class="flex-1 pl-10 bor-l height-60 pt-10">
					<p class="font-12 color-black ">网站浏览量</p>
					<p class="font-16 color-black font-500">223456</p>
				</div>
			</div>
			</Col>
			<Col span="6" justify="center">
			<div class="list-items width-150 height-60 bor-40 margin-auto bor-rad-5 flex-start-center">
				<Icon type="logo-usd" class="font-30 pr-10 pl-10 "/>
				<div class="flex-1 pl-10 bor-l height-60 pt-10">
					<p class="font-12 color-black ">总收入</p>
					<p class="font-16 color-black font-500">￥113456</p>
				</div>
			</div>
			</Col>
		</Row>
		<Row :gutter="16">
			<Col span="18" >
				<div class="echarts-header height-40 bg-40 bor-rad-5 space-between-center pl-10 pr-10">
					<Icon type="md-trending-up" class="color-f3 font-30"/>
					<p class="color-f3 font-14">购物趋势</p>
				</div>
				<div class=" width-all height-240 pl-10 pr-10">
					<div id="myChart" class="bor-40 width-all height-240 "></div>
				</div>
			</Col>
			<Col span="6" >
				<div class="echarts-header height-40 bg-40 bor-rad-5 flex-start-center pl-10">
					<p class="color-f3 font-14 ">数据统计</p>
				</div>
				<div class=" width-all height-240 pl-10 pr-10">
					<div class="bor-40 width-all height-240">
						<ul>
							<li class="list-item flex-start-center height-60 bor-bot-dash">
								<p class="width-80 te-rig mr-10 font-18 color-black font-500">{{dataList.incomeList.order}}</p>
								<p class="font-14 color-black">次下单量</p>
							</li>
							<li class="list-item flex-start-center height-60 bor-bot-dash">
								<p class="width-80 te-rig  mr-10 font-18 color-black font-500">{{dataList.incomeList.refundTimes}}</p>
								<p class="font-14 color-black">次退款</p>
							</li>
							<li class="list-item flex-start-center height-60 bor-bot-dash">
								<p class="width-80 te-rig mr-10 font-18 color-black font-500">{{dataList.incomeList.income}}</p>
								<p class="font-14 color-black">元总收入</p>
							</li>
							<li class="list-item flex-start-center height-60 bor-bot-dash">
								<p class="width-80 te-rig mr-10 font-18 color-black font-500">{{dataList.incomeList.refundMoney}}</p>
								<p class="font-14 color-black">元退款</p>
							</li>
							<li class="list-item flex-start-center height-60">
								<p class="width-80 te-rig mr-10 font-18 color-black font-500">{{dataList.incomeList.member}}</p>
								<p class="font-14 color-black">位新会员</p>
							</li>
						</ul>
					</div>
				</div>
			</Col>
		</Row>
		<wex-member></wex-member>
	</div>
</template>

<script>
	import dataList from './data'
	import Member from './memberList/index'
	
	let timeList = [], valueList = []
	dataList.timeList.forEach(value => {
		timeList.push(value.time)
		valueList.push(value.value)
	})
	
	let echarts = require('echarts/lib/echarts')
	require('echarts/lib/chart/bar')
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	export default {
		name: 'hello',
		components:{
			'wex-member': Member
		},
		data() {
			return {
				dataList:dataList,
				msg: 'Welcome to Your Vue.js App',
				myChart:null
			}
		},
		mounted() {
			this.drawLine();
			this.init()
		},
		methods: {
			init () {
				const self = this
				setTimeout(() => {
					window.onresize = function () {
						if(self.myChart){
							self.myChart.resize()
						}
					}
				}, 20)
			},
			handleClick (tab, event) {
				console.log()
			},
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				this.myChart = echarts.init(document.getElementById('myChart'))
				// 绘制图表
				this.myChart.setOption({
					title: { text: '各时段销售状况' },
					tooltip: {},
					xAxis: {
						data: timeList
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: valueList
					}]
				});
			}
		}
	}

</script>

<style>
	.list-item{
		height:48px;
	}
	.list-items:hover{
		animation: slide-bl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@-webkit-keyframes slide-bl {
		0% {
			-webkit-transform: translateY(0) translateX(0);
			transform: translateY(0) translateX(0);
		}
		100% {
			-webkit-transform: translateY(100px) translateX(-100px);
			transform: translateY(5px) translateX(-5px);
			box-shadow: 3px 3px 15px #ccc;
		}
	}
	@keyframes slide-bl {
		0% {
			-webkit-transform: translateY(0) translateX(0);
			transform: translateY(0) translateX(0);
		}
		100% {
			-webkit-transform: translateY(100px) translateX(-100px);
			transform: translateY(5px) translateX(-5px);
			box-shadow: 3px 3px 15px #ccc;
		}
	}
</style>