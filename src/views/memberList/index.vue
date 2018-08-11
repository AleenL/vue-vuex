<!--created by allen on 2018/05/29-->

<template>
	<div class="width-all mt-20">
		<Modal v-model="modal2" width="360">
			<p slot="header" style="text-align:center" class="color-40">
				<Icon type="ios-information-circle" class="color-40 font-18"></Icon>
				<span>删除会员</span>
			</p>
			<div style="text-align:center">
				<p>删除这位会员之后，将不会出现在这个清单中了？</p>
				<p>你确认删除这位会员吗？</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long :loading="true" @click="del">确认</Button>
			</div>
		</Modal>
		<div class="member-header height-40 bg-40 width-all bor-rad-5 space-between-center pl-10 pr-10">
			<div class="width-100 flex-start-center">
				<Icon type="md-person" class="font-30 color-f3 mr-10"/>
				<p class="font-14 color-f3">会员管理</p>
			</div>
			<div class="flex-start-center bor-rad-2 over-hidden">
				<input v-model="searchText" type="text" class="width-150 member-research height-25 ">
				<div class="bg-f3 height-25 flex-center width-40" @click="findItem">
					<Icon type="ios-search" class="font-24 "/>
				</div>
			</div>
			
		</div>
		<div class=" width-all pl-10 pr-10">
			<div class="bor-40 width-all padding-20">
				<ul>
					<li class="space-between-center pl-10 pr-10 height-40 bg-cc">
						<p class="width10 te-cen">序号</p>
						<p class="width10 te-cen">姓名</p>
						<p class="width15 te-cen">会员编号</p>
						<p class="width15 te-cen">会员电话</p>
						<p class="width15 te-cen">加入时间</p>
						<p class="width15 te-cen">余额</p>
						<p class="width10 te-cen">操作</p>
					</li>
					<li v-for="(memberItem,index) in memberList[pageIndex]" keys="index" :class="[index%2==1 ? 'bg-cc' : 'bg-f3']" >
						<div class="space-between-center pl-10 pr-10 height-40">
							<p class="width10 te-cen">{{memberItem.index}}</p>
							<div class="width10 te-cen">
								<input class="width-all" v-model="memberName" v-if="canEdit&&chooseIndex==index" :placeholder="memberItem.name"/>
								<p v-else >{{memberItem.name}}</p>
							</div>
							<p class="width15 te-cen">{{memberItem.number}}</p>
							<div class="width15 te-cen">
								<input class="width-all" v-model="memberIphone" v-if="canEdit&&chooseIndex==index" :placeholder="memberItem.phone"/>
								<p v-else>{{memberItem.phone}}</p>
							</div>
							<p class="width15 te-cen">{{memberItem.time}}</p>
							<div class="width15 te-cen">
								<input class="width-all"  v-model="memberRechange" v-if="canEdit&&chooseIndex==index" :placeholder="parseInt(memberItem.rechange).toFixed(2)"/>
								<p v-else>{{parseInt(memberItem.rechange).toFixed(2)}}</p>
							</div>
							<div class="width10  space-around-center">
								<p class="color-active point" @click="edit(index)">{{canEdit&&chooseIndex==index?'保存':'编辑'}}</p>
								<p class="color-black">|</p>
								<p class="color-active point" @click="deleteItem(index)">删除</p>
							</div>
						</div>
					</li>
				</ul>
				<div class="mt-20 space-between-center">
					<div class="width-180">
						<Row :gutter="8">
							<Col span="8" >
								<p @click="chooseStyle(1)" :class="['height-30','point','bor-rad-5','flex-center',showStyle==1 ?'bor-active color-active' : 'bor-f3 color-cc']">按序号</p>
							</Col>
							<Col span="8">
								<p @click="chooseStyle(2)" :class="['height-30','point','bor-rad-5','flex-center',showStyle==2 ?'bor-active color-active' : 'bor-f3 color-cc']">按时间</p>
							</Col>
							<Col span="8">
								<p @click="chooseStyle(3)" :class="['height-30','point','bor-rad-5','flex-center',showStyle==3 ?'bor-active color-active' : 'bor-f3 color-cc']">按余额</p>
							</Col>
						</Row>
					</div>
					<Page :total="oldmemberList.length" size="small" show-sizer @on-change="pageChoose" @on-page-size-change="pageIndexChoose"/>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	import dataList from './member'
	export default {
		name:'member',
		watch:{
			pageIndex:function(){
			
			},
			oldmemberList:function(val){
				this.memberList = this.sliceArray(val,this.showIndex)
			}
		},
		data:()=>({
			modal2:false,
			searchText:null,
			memberList:dataList,
			oldmemberList:dataList,
			pageIndex:0,
			pageList:dataList.length,
			showStyle:1,
			canEdit:false,
			chooseIndex:null,
			showIndex:10,
			memberName:'',
			memberIphone:'',
			memberRechange:'',
			delIndex:0
		}),
		created(){
			this.memberList = this.sliceArray(this.oldmemberList,10)
		},
		methods:{
			findItem(){
				this.oldmemberList = dataList
				if(!this.searchText) return false;
				let that = this;
				function checkText(val){
					return val.name.indexOf(that.searchText)>-1 || val.phone.indexOf(that.searchText)>-1 || val.time.indexOf(that.searchText)>-1 || val.number.indexOf(that.searchText)>-1 || val.rechange.indexOf(that.searchText)>-1
				}
				this.oldmemberList = this.oldmemberList.filter(checkText)
				this.pageIndex = 0
			},
			edit(index){
				this.chooseIndex = index
				if(this.canEdit){
					if(this.memberName){
						this.oldmemberList[index+this.pageIndex*10].name = this.memberName
					}
					if(this.memberIphone){
						this.oldmemberList[index+this.pageIndex*10].phone = this.memberIphone
					}
					if(this.memberRechange){
						this.oldmemberList[index+this.pageIndex*10].rechange = this.memberRechange
					}
					this.canEdit = false
				}else{
					this.memberName = null
					this.memberIphone = null
					this.memberRechange = null
					this.canEdit = true
				}
			},
			chooseStyle(index){
				this.showStyle = index
				switch(index){
					case 1:
						function compare(val1,val2){
							return val1.index - val2.index
						}
						this.oldmemberList = this.oldmemberList.sort(compare)
						break;
					case 3:
					function compare(val1,val2){
						return val1.rechange - val2.rechange
					}
						this.oldmemberList = this.oldmemberList.sort(compare)
						break;
					case 2:
					function compare(val1,val2){
						return Date.parse(new Date(val1.time)) - Date.parse(new Date(val2.time));
					}
						this.oldmemberList = this.oldmemberList.sort(compare)
						break;
				}
			},
			sliceArray(array, size){
				console.log(22)
				var result = [];
				for (var x = 0; x < Math.ceil(array.length / size); x++) {
					var start = x * size;
					var end = start + size;
					result.push(array.slice(start, end));
				}
				return result;
			},
			pageChoose(e){
				this.pageIndex = (e-1)
			},
			pageIndexChoose(e){
				this.showIndex = e
				this.memberList = this.sliceArray(this.oldmemberList,e)
			},
			deleteItem(index){
				this.modal2 = true
				this.delIndex = index
//				this.oldmemberList.splice(index+10*this.pageIndex,1)
//				console.log(this.oldmemberList.length)
			},
			del(){
				this.modal2 = false
				this.oldmemberList.splice(this.delIndex + 10 * this.pageIndex, 1)
			}
		}
	}
</script>

<style>
.member-research{
	outline: none;
	border:none;
	background: rgba(255,255,255,0.5);
	text-indent: 10px;
	color: #f1f1f1;
}
</style>