<!--created by allen on 2018/05/29-->

<template>
<div class="bg-ec">
	<div v-for="(item,index) in cardStyle">
		<div class="padding-20">
			<div class=" bg-ff height-40 pl-10 pr-10 space-between-center">
				<p class="font-14 font-500">{{item.style}}</p>
				<p class="font-14 font-500">{{item.animate}}</p>
			</div>
		</div>
		<Row class-name="mb-20 padding-20" v-if="!item.choose">
			<Col span="6" justify="center" v-for="(itm,ind) in cardContent">
			<div :class="[item.animateClass,'bg-ff', 'margin-auto', 'flex-start-center',item.cardClass]"  >
				<Icon :type="itm.icon" :class="['icon-style',itm.colorClass]"/>
				<div class="flex-1">
					<p class="card-name color-black ">{{itm.name}}</p>
					<p class="card-value color-black font-500">{{itm.value}}</p>
				</div>
			</div>
			</Col>
		</Row>
		<Row class-name="mb-20 padding-20" v-else-if="item.choose === 'moreChoose'">
			<Col span="6" justify="center" v-for="(itm,ind) in chooseMore">
			<div :class="[item.animateClass,'bg-ff','po-r', 'margin-auto', 'flex-start-center',item.cardClass, itm.checked ? 'active' : '']" @click="multihoose(ind)">
				<Icon :type="itm.icon" :class="['icon-style',itm.colorClass]"/>
				<Icon v-show="itm.checked" type="ios-checkmark-circle" class="font-15 color-red po-a right-5 top-5"/>
				<div class="flex-1">
					<p class="card-name color-black ">{{itm.name}}</p>
					<p class="card-value color-black font-500">{{itm.value}}</p>
				</div>
			</div>
			</Col>
		</Row>
		<Row class-name="mb-20 padding-20" v-else-if="item.choose === 'signChoose'">
			<Col span="6" justify="center" v-for="(itm,ind) in chooseMore">
			<div :class="[item.animateClass,'bg-ff','po-r', 'margin-auto', 'flex-start-center',item.cardClass, ind === chooseActive ? 'active' : '']" @click="signChoose(ind)">
				<Icon :type="itm.icon" :class="['icon-style',itm.colorClass]"/>
				<Icon v-show="ind === chooseActive" type="ios-checkmark-circle" class="font-15 color-red po-a right-5 top-5"/>
				<div class="flex-1">
					<p class="card-name color-black ">{{itm.name}}</p>
					<p class="card-value color-black font-500">{{itm.value}}</p>
				</div>
			</div>
			</Col>
		</Row>
	</div>
</div>
</template>

<script>
	export default {
		name: 'card',
		data(){
			return{
				chooseActive:0,
				
				chooseMore:[
					{icon:'ios-school',styleName:'school',name:'在校大学生',value:'3456',colorClass:'color-22',checked:false},
					{icon:'md-heart',styleName:'buyLower',name:'购买率',value:'76.6',colorClass:'color-red',checked:false},
					{icon:'ios-globe',styleName:'webView',name:'网站浏览量',value:'223456',colorClass:'color-active',checked:true},
					{icon:'logo-usd',styleName:'order',name:'总收入',value:'116783',colorClass:'color-63',checked:false},
				
				],
				
				cardStyle:[
					{style:'超大卡片',animate:'左下浮起',cardClass:'biggestCard',animateClass:'list-items'},
					{style:'大卡片',animate:'右下浮起',cardClass:'bigCard',animateClass:'list-items-right-bottom'},
					{style:'中卡片(多选)',animate:'右上浮起',cardClass:'middleCard',animateClass:'list-items-right-top',choose:'moreChoose'},
					{style:'小卡片(单选)',animate:'左上浮起',cardClass:'littleCard',animateClass:'list-items-left-top',choose:'signChoose'},
				],
				cardContent:[
					{icon:'ios-school',styleName:'school',name:'在校大学生',value:'3456',colorClass:'color-22'},
					{icon:'md-heart',styleName:'buyLower',name:'购买率',value:'76.6',colorClass:'color-red'},
					{icon:'ios-globe',styleName:'webView',name:'网站浏览量',value:'223456',colorClass:'color-active'},
					{icon:'logo-usd',styleName:'order',name:'总收入',value:'116783',colorClass:'color-63'},
					
				]
			}
		},
		methods:{
			multihoose(index){
				this.chooseMore[index].checked = !this.chooseMore[index].checked
			},
			signChoose(index){
				this.chooseActive = index
			}
		}
	}
</script>

<style lang="less">
	.biggestCard{
		width:200px;
		height:100px;
		.icon-style{
			font-size:34px;
			padding:0 15px 0 15px;
		}
		.card-name{
			font-size:16px;
		}
		.card-value{
			font-size:18px;
		}
	}
	.bigCard{
		width:180px;
		height:80px;
		.icon-style{
			font-size:34px;
			padding:0 15px 0 15px;
		}
		.card-name{
			font-size:16px;
		}
		.card-value{
			font-size:18px;
		}
	}
	.middleCard{
		width:150px;
		height:80px;
		.icon-style{
			font-size:34px;
			padding:0 10px 0 10px;
		}
		.card-name{
			font-size:14px;
		}
		.card-value{
			font-size:16px;
		}
	}
	.littleCard{
		width:150px;
		height:60px;
		.icon-style{
			font-size:30px;
			padding:0 10px 0 10px;
		}
		.card-name{
			font-size:14px;
		}
		.card-value{
			font-size:16px;
		}
	}
	.active{
		border:1px solid #f35a4a;
	}
	.list-items-right-bottom:hover{
		animation: slide-br 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@-webkit-keyframes slide-br {
		0% {
			-webkit-transform: translateY(0) translateX(0);
			transform: translateY(0) translateX(0);
		}
		100% {
			-webkit-transform: translateY(100px) translateX(-100px);
			transform: translateY(5px) translateX(5px);
			box-shadow: 3px 3px 15px #ccc;
		}
	}
	@keyframes slide-br {
		0% {
			-webkit-transform: translateY(0) translateX(0);
			transform: translateY(0) translateX(0);
		}
		100% {
			-webkit-transform: translateY(100px) translateX(-100px);
			transform: translateY(5px) translateX(5px);
			box-shadow: 3px 3px 15px #ccc;
		}
	}
	.list-items-right-top:hover{
			 animation: slide-tr 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		 }
	@-webkit-keyframes slide-tr {
		0% {
			-webkit-transform: translateY(0) translateX(0);
			transform: translateY(0) translateX(0);
		}
		100% {
			-webkit-transform: translateY(100px) translateX(-100px);
			transform: translateY(-5px) translateX(5px);
			box-shadow: -3px 3px 15px #ccc;
		}
	}
	@keyframes slide-tr {
		0% {
			-webkit-transform: translateY(0) translateX(0);
			transform: translateY(0) translateX(0);
		}
		100% {
			-webkit-transform: translateY(100px) translateX(-100px);
			transform: translateY(-5px) translateX(5px);
			box-shadow: -3px 3px 15px #ccc;
		}
	}
	.list-items-left-top:hover{
		animation: slide-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@-webkit-keyframes slide-tl {
		0% {
			-webkit-transform: translateY(0) translateX(0);
			transform: translateY(0) translateX(0);
		}
		100% {
			-webkit-transform: translateY(100px) translateX(-100px);
			transform: translateY(-5px) translateX(-5px);
			box-shadow: -3px -3px 15px #ccc;
		}
	}
	@keyframes slide-tl {
		0% {
			-webkit-transform: translateY(0) translateX(0);
			transform: translateY(0) translateX(0);
		}
		100% {
			-webkit-transform: translateY(100px) translateX(-100px);
			transform: translateY(-5px) translateX(-5px);
			box-shadow: -3px -3px 15px #ccc;
		}
	}
</style>