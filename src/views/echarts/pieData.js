/*
this is my stupid code 
and only me can understand
I can hear rain knocking the window
The Moon hide in this city 
Wish you have a sweet dream

created by Allen in 2018/05/29
*/
const options = {
	pie1:{
		title : {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		},
		series : [
			{
				name: '访问来源',
				type: 'pie',
				radius : '55%',
				center: ['50%', '60%'],
				data:[
					{value:335, name:'直接访问'},
					{value:310, name:'邮件营销'},
					{value:234, name:'联盟广告'},
					{value:135, name:'视频广告'},
					{value:1548, name:'搜索引擎'}
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	},
	pie2:{
			title: {
			text: '销售状态',
			left: 'center',
			top: 20,
			textStyle: {
				color: '#403027'
			}
		},
		
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		
		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series : [
			{
				name:'购买人群',
				type:'pie',
				radius : '55%',
				center: ['50%', '50%'],
				data:[
					{value:335, name:'在校生(男)'},
					{value:310, name:'大学生(女)'},
					{value:274, name:'社会人员(男)'},
					{value:235, name:'社会人员(女)'},
					{value:400, name:'国企人员'}
				].sort(function (a, b) { return a.value - b.value; }),
				roseType: 'radius',
				label: {
					normal: {
						textStyle: {
							color: '#000'
						}
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							color: '#000'
						},
						smooth: 0.2,
						length: 10,
						length2: 20
					}
				},
				animationType: 'scale',
				animationEasing: 'elasticOut',
				animationDelay: function (idx) {
					return Math.random() * 200;
				}
			}
		]
	}
}

export default options