<!--created by allen on 2018/05/29-->

<template>

	<div class="flex-start-center flex-co bg-40" >
		<div v-for="(item,index) in leftSideData" :keys="index" class="width-all height-50 flex-center point" @click="chooseIndex(index)" v-if="item.children.length>0">
			<Icon :class="['font-24',activeName.substr(0,1) === item.name ? 'chooseActive' : 'color-c6 targetItem']" :type="item.type"/>
			<div v-if="showIndex === index && item.children.length>0 && showBox" :class="['bg-40' ,'z-5' ,'po-a', 'left-80', 'width-120']" :style="{'top':(index+2)*50+25 + 'px'}">
				<router-link :to="itm.target" v-for="(itm,ind) in item.children" :keys="ind" :class="['color-c6','font-14','height-40','flex-center','targetItem','point']" @click.native.stop="chooseSecond(ind+1)">{{itm.title}}</router-link>
			</div>
		</div>
		<router-link :to="item.target"  :keys="index" class="width-all height-50 flex-center point" @click.native="chooseIndex(index)" v-else>
			<Icon :class="['font-24',activeName.substr(0,1) === item.name ? 'chooseActive' : 'color-c6 targetItem']" :type="item.type"/>
		</router-link>
	</div>
</template>

<script>
	import leftSideData from '../config'
	
	export default {
		name:'leftSide',
		watch:{
			activeName:function(val){
				console.log(val)
			}
		},
		props: {
			activeName: {
				type: [String,Number],
				default:'0'
			},
		},
		watch:{
			showBox:function(val){
				console.log(val)
			}
		},
		data(){
			return{
				leftSideData:leftSideData,
				message: '1',
				leftActive: false,
				mainIndex: 0,
				showIndex:1,
				secondIndex:0,
				thirdIndex:0,
				showBox:false
			}
		},
		created() {
		
		},
		methods: {
			showSide(){
				this.leftActive = !this.leftActive
			},
			chooseIndex(index){
				this.showIndex = index
				this.showBox= true
				this.mainIndex = index
				let chooseIndex =`${this.mainIndex}`
				this.$emit('changeTarget',chooseIndex)
			},
			showChildren(){
			
			},
			chooseSecond(index){
				this.showBox= false
				this.secondIndex = index
				let chooseIndex =`${parseInt(this.mainIndex)}-${parseInt(this.secondIndex)}`
				this.$emit('changeTarget',chooseIndex)
				
			}
		}
	}
</script>


<style scoped>
	@import '../../styles/common.css';
	
	.wraper {
		padding: 0;
		margin: 0;
	}
	
	header{
		box-shadow: 2px 2px 10px #c1c1c1;
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
	.targetItem:hover{
		color:#fcfcfc
	}
	
	.name2{
		top:175px;
		z-index:9
	}
	.name3{
		top:225px;
		z-index:9
	}
	.name5{
		top:325px;
		z-index:9
	}
	
	.chooseActive{
		color:#4A90E2;
	}
</style>
