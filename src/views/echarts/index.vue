<!--created by allen on 2018/05/29-->

<template>
<div class="echart-page width-all bg-ec">
	<div class="padding-20">
		<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
			<p class="font-14 font-500">K线图</p>
		</div>
		<div class=" width-all mt-20 height-400 pl-10 pr-10">
			<div id="myChart" class=" width-all height-400 "></div>
		</div>
	</div>
	<div class="padding-20">
		<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
			<p class="font-14 font-500">饼图</p>
		</div>
		<div class=" width-all mt-20 height-300 pl-10 pr-10">
			<Row>
				<Col span="12" >
				<div class=" width-all height-300 pl-10 pr-10">
					<div id="myChartPie1" class=" width-all height-300 "></div>
				</div>
				</Col>
				<Col span="12" >
				<div class=" width-all height-300 pl-10 pr-10">
					<div id="myChartPie2" class=" width-all height-300 "></div>
				</div>
				</Col>
			</Row>
		</div>
	</div>
	<div class="padding-20">
		<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
			<p class="font-14 font-500">折线图</p>
		</div>
		<div class=" width-all mt-20 height-400 pl-10 pr-10">
			<div id="myChartline" class=" width-all height-400 "></div>
		</div>
	</div>
</div>
</template>

<script>
	import Koption from './Kdata'
	import pieData from './pieData'
	import lineData from './lineData'
	
	let echarts = require('echarts/lib/echarts')
	require('echarts/lib/chart/bar')
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	require('echarts/lib/chart/candlestick')
	require('echarts/lib/chart/line')
	require('echarts/lib/chart/pie')
	
export default{
	name:'echarts',
	data:()=>({
		Kdata:Koption,
		myChart:null,
		lineData:lineData,
		pieChart1:null,
		pieChart2:null,
		myChartline:null,
		pieData:pieData
	}),
	mounted() {
		this.drawLine();
		this.drawPie()
		this.drawLineData()
		this.init()
	},
	methods: {
		init () {
			const self = this
			setTimeout(() => {
				window.onresize = function () {
					if(self.myChart){
						self.myChart.resize()
						self.pieChart1.resize()
						self.pieChart2.resize()
						self.myChartline.resize()
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
			this.myChart.setOption(this.Kdata);
		},
		drawPie(){
			this.pieChart1 = echarts.init(document.getElementById('myChartPie1'))
			this.pieChart2 = echarts.init(document.getElementById('myChartPie2'))
			this.pieChart1.setOption(this.pieData.pie1)
			this.pieChart2.setOption(this.pieData.pie2)
		},
		drawLineData(){
			// 基于准备好的dom，初始化echarts实例
			this.myChartline = echarts.init(document.getElementById('myChartline'))
			// 绘制图表
			this.myChartline.setOption(this.lineData);
		}
	}
}
</script>

<style>

</style>