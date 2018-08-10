<!--created by allen on 2018/05/29-->

<template>
	<div class="popur-page width-all bg-ec">
		<div class="pl-20 pr-20 pt-20">
			<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
				<p class="font-14 font-500">带有背景色的警告框(小型)</p>
			</div>
			<Row class-name="mb-20 padding-20">
				<Col span="6" justify="center" v-for="(item,index) in messageList" :keys="index">
				<div class="width-all flex-center">
					<Button :type="item.type" @click="littleShow(item.type)">{{item.name}}</Button>
				</div>
				</Col>
			</Row>
		</div>
		<div class="pl-20 pr-20">
			<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
				<p class="font-14 font-500">全局性提示(小型)</p>
			</div>
			<Row class-name="mb-20 padding-20">
				<Col span="6" justify="center" v-for="(item,index) in messageList" :keys="index">
				<div class="width-all flex-center">
					<Button :type="item.type" @click="globeMessage(item.type)">{{item.name}}</Button>
				</div>
				</Col>
			</Row>
		</div>
		<div class="pl-20 pr-20">
			<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
				<p class="font-14 font-500">可手动关闭的全局性提示(小型)</p>
			</div>
			<Row class-name="mb-20 padding-20">
				<Col span="6" justify="center" v-for="(item,index) in messageList" :keys="index">
				<div class="width-all flex-center">
					<Button :type="item.type" @click="globeMessageClose(item.type)">{{item.name}}</Button>
				</div>
				</Col>
			</Row>
		</div>
		<div class="pl-20 pr-20 pb-10">
			<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
				<p class="font-14 font-500">右侧人进入的带有内容的通知</p>
			</div>
			<Row class-name="mb-20 padding-20">
				<Col span="6" justify="center" v-for="(item,index) in messageList" :keys="index">
				<div class="width-all flex-center">
					<Button :type="item.type" @click="middleMessage(item.type)">{{item.name}}</Button>
				</div>
				</Col>
			</Row>
		</div>
		<div class="pl-20 pr-20 pb-10">
			<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
				<p class="font-14 font-500">右侧人进入的只有标题的通知</p>
			</div>
			<Row class-name="mb-20 padding-20">
				<Col span="6" justify="center" v-for="(item,index) in messageList" :keys="index">
				<div class="width-all flex-center">
					<Button :type="item.type" @click="middleTitle(item.type)">{{item.name}}</Button>
				</div>
				</Col>
			</Row>
		</div>
		<div class="pl-20 pr-20 pb-10">
			<div class=" bg-ff height-40 pl-10 pr-10 flex-start-center">
				<p class="font-14 font-500">必须手动关闭的通知</p>
			</div>
			<Row class-name="mb-20 padding-20">
				<Col span="6" justify="center" v-for="(item,index) in messageList" :keys="index">
				<div class="width-all flex-center">
					<Button :type="item.type" @click="middleTitleClose(item.type)">{{item.name}}</Button>
				</div>
				</Col>
			</Row>
		</div>
		<div class="width-200">
			<div :class="['trs-1', 'po-f', 'top-20', littlePopur && infoShow ? 'right-10' : 'right-200']">
				<Alert >这是一个通知框！</Alert>
			</div>
			<div :class="['trs-1','po-f', 'top-20', littlePopur && successShow ? 'right-10' : 'right-200']">
				<Alert type="success">这是一个成功框！</Alert>
			</div>
			<div :class="['trs-1','po-f', 'top-20', littlePopur && warningShow ? 'right-10' : 'right-200']">
				<Alert type="warning">这是一个警告框！</Alert>
			</div>
			<div :class="['trs-1','po-f', 'top-20', littlePopur && errorShow ? 'right-10' : 'right-200']">
				<Alert type="error">这是一个失败框！</Alert>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'popur',
		data:()=>({
			timeFlag:null,
			littlePopur:false,
			successShow:false,
			infoShow:false,
			warningShow:false,
			errorShow:false,
			messageList:[
				{name:'通知',type:'info',show:false},
				{name:'成功',type:'success',show:false},
				{name:'警告',type:'warning',show:false},
				{name:'失败',type:'error',show:false},
			]
		}),
		methods:{
			littleShow(name){
				this.littlePopur = true
				clearTimeout(this.timeFlag)
				switch(name){
					case 'info':
						this.infoShow = true
						this.errorShow = false
						this.warningShow = false
						this.successShow = false
						this.timeFlag = setTimeout(()=>{
							this.infoShow = false
						},2000)
						break;
					case 'success':
						this.infoShow = false
						this.errorShow = false
						this.warningShow = false
						this.successShow = true
						this.timeFlag = setTimeout(()=>{
							this.successShow = false
						},2000)
						break;
					case 'error':
						this.infoShow = false
						this.errorShow = true
						this.warningShow = false
						this.successShow = false
						this.timeFlag = setTimeout(()=>{
							this.errorShow = false
						},2000)
						break;
					case 'warning':
						this.infoShow = false
						this.errorShow = false
						this.warningShow = true
						this.successShow = false
						this.timeFlag = setTimeout(()=>{
							this.warningShow = false
						},2000)
						break;
				}
			},
			globeMessage(name){
				switch(name){
					case 'info':
						this.$Message.info('这是一个通知全局提示');
						break;
					case 'success':
						this.$Message.success('这是一个成功全局提示');
						break;
					case 'error':
						this.$Message.error('这是一个异常全局提示');
						break;
					case 'warning':
						this.$Message.warning('这是一个警告全局提示');
						break;
				}
			},
			globeMessageClose(name){
				switch(name){
					case 'info':
						this.$Message.info({
							content: '这是一个通知全局提示',
							duration: 10,
							closable: true
						});
						break;
					case 'success':
						this.$Message.success({
							content: '这是一个成功全局提示',
							duration: 10,
							closable: true
						});
						break;
					case 'error':
						this.$Message.error({
							content: '这是一个异常全局提示',
							duration: 10,
							closable: true
						});
						break;
					case 'warning':
						this.$Message.warning({
							content: '这是一个警告全局提示',
							duration: 10,
							closable: true
						});
						break;
				}
			},
			middleMessage(name){
				switch(name){
					case 'info':
						this.$Notice.info({
							title: '这是一个带有描述的通知栏',
							desc: '这是通知的内容！'
						});
						break;
					case 'success':
						this.$Notice.success({
							title: '这是一个带有描述的成功栏',
							desc: '恭喜你，已经提交了内容，稍后有工作人员会通知您！'
						});
						break;
					case 'error':
						this.$Notice.error({
							title: '这是一个带有描述的异常栏',
							desc: '程序员并不想管你，只是给你扔了一个异常，让你好好思考思考！'
						});
						break;
					case 'warning':
						this.$Notice.warning({
							title: '这是一个带有描述的警告栏',
							desc: '警告！你已经进入了WAWAWA的领地！请您迅速离开！'
						});
						break;
				}
			},
			middleTitle(name){
				switch(name){
					case 'info':
						this.$Notice.info({
							title: '这是一个带有描述的通知栏'
						});
						break;
					case 'success':
						this.$Notice.success({
							title: '这是一个带有描述的成功栏'
						});
						break;
					case 'error':
						this.$Notice.error({
							title: '这是一个带有描述的异常栏'
						});
						break;
					case 'warning':
						this.$Notice.warning({
							title: '这是一个带有描述的警告栏'
						});
						break;
				}
			},
			middleTitleClose(name){
				switch(name){
					case 'info':
						this.$Notice.info({
							title: '这是一个带有描述的通知栏',
							desc: '这是通知的内容！',
							duration: 0
						});
						break;
					case 'success':
						this.$Notice.success({
							title: '这是一个带有描述的成功栏',
							desc: '恭喜你，已经提交了内容，稍后有工作人员会通知您！',
							duration: 0
						});
						break;
					case 'error':
						this.$Notice.error({
							title: '这是一个带有描述的异常栏',
							desc: '程序员并不想管你，只是给你扔了一个异常，让你好好思考思考！',
							duration: 0
						});
						break;
					case 'warning':
						this.$Notice.warning({
							title: '这是一个带有描述的警告栏',
							desc: '警告！你已经进入了WAWAWA的领地！请您迅速离开！',
							duration: 0
						});
						break;
				}
			}
		}
	}
</script>

<style>

</style>