<template>
	<div class="flex-start-header width-all" >
		<BackTop :height="100"></BackTop>
		<div :class="['left-side-box', 'over-hidden', leftActive ? 'width-75' : 'width-200']" :style="[windowHeight]">
			<div class="width-all flex-center flex-co height-100">
				<p class="font-22 font-900 color-40 width-40 height-40 bg-ff flex-center">東</p>
			</div>
			<Menu v-if="!leftActive" @on-select="open" :open-names="[activeName.substr(0,1)]"  :accordion="true" :active-name="activeName" width="200px" theme="dark">
				<MenuItem v-if="item.children.length===0" v-for="(item,index) in config" :keys="index" :name="item.name" :to="item.target" >
					<Icon class='font-24 mr-10' :type="item.type"/>
					{{item.title}}
				</MenuItem>
				<Submenu v-else-if="item.children.length>0"  :keys="index" :name="item.name" :to="item.target">
					<template slot="title">
						<Icon class='font-24 mr-10' :type="item.type"/>
						{{item.title}}
					</template>
					<MenuItem v-for="(itm,ind) in item.children" :keys="ind" :name="itm.name"  :to="itm.target" >{{itm.title}}</MenuItem>
				</Submenu>
			</Menu>
			<wxc-left-side v-else=""  :activeName="activeName" @changeTarget="changeTarget"></wxc-left-side>
		</div>
		<div class="wrap-content flex-1 flex-center flex-co width-all" ref="window">
			<header class="bg-ff space-between-center pl-20 pr-20 width-all">
				<div class="line-70 color-40 space-between-center">
					<Icon type="md-menu" :class="['color-40', 'font-30', 'mr-20', leftActive ? 'clickActive' : 'clickOut' ]" @click="showSide"/>
					<p class="color-40 font-15">{{title}}</p>
				</div>
				<div class="space-between-center width-350">
					<div class="space-between-center width-100">
						<Badge dot>
							<Icon type="ios-alarm" size="26" class="padding-5 bg-40 bor-rad-5 flex-center color-f3"/>
						</Badge>
						<Badge :count="1">
							<Icon type="ios-chatbubbles" size="26" class="padding-5 bg-40 bor-rad-5 flex-center color-f3"/>
						</Badge>
					</div>
					<div class="avatar-box width-200 height-50 bor-rad-5 flex-start-center">
						<Avatar style="color: #f3f3f3;background-color: #40475b;font-weight:900" class="ml-10 mr-10">東</Avatar>
						<div>
							<p class="font-500">HI!黄浩東</p>
							<p class="font-500">2018年 8月 21日 晴 23˚C</p>
						</div>
					</div>
				</div>
			</header>
			<div class="right-side-box flex-1 width-all" >
				
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import LeftSide from './leftSideBox/index'
	import config from './config'
	
	export default {
		components:{
			'wxc-left-side':LeftSide,
		},
		watch:{
			activeName:function(val,oldVal){
				if(val !== oldVal){
					if(val.length === 1){
						this.title = this.config[this.activeName].title
					}else{
						this.title = this.config[this.activeName.substr(0,1)].children[this.activeName.substr(2,1)-1].title
					}
				}
			},
			$route(){
				this.showHeight()
			}
		},
		name: 'HelloWorld',
		props: {
			msg: String
		},
		data: () => ({
			config:config,
			message: '1',
			leftActive: false,
			activeName:'0',
			title:'首页',
			windowHeight:{height:'100vh'}
		}),
		mounted(){
			this.showHeight()
		},
		methods: {
			showHeight(){
				this.windowHeight = {height:this.$refs.window.offsetHeight+'px'}
			},
			showSide(){
				this.leftActive = !this.leftActive
			},
			changeTarget(event){
				this.activeName = event
			},
			open(e){
				this.activeName = `${e}`
			}
		}
	}
</script>


<style scoped>
	@import '../styles/common.css';
	
	.wraper {
		padding: 0;
		margin: 0;
	}
	
	header{
		box-shadow: 2px 2px 10px #c1c1c1;
		height:10vh;
		min-height:70px;
	}
	
	.clickActive{
		transform: rotate(90deg);
		transition: all 0.3s;
	}
	.clickOut{
		transform: rotate(0);
		transition: all 0.3s;
	}
	
	.left-side-box {
		min-height:100vh;
		background: rgb(49,54,73);
		transition: width 0.3s;
		
	}
	.right-side-box{
		min-width: 600px;
		overflow: hidden;
	}
	.avatar-box{
		box-shadow: inset 0 -1px 10px rgba( 255, 255, 250, 0.6),
		inset 0 -2px 10px rgba( 0, 0, 0, 0.1);
	}
</style>
