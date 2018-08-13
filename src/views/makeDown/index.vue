<!--created by allen on 2018/05/29-->

<template>
	<div class="makedown-page">
		<mavon-editor @save="save" v-model="value" class="height-all" style="height:90vh"></mavon-editor>
	</div>
</template>

<script>
	export default{
		name:'makeDown',
		data:()=>({
			value:''
		}),
		methods:{
			save(){
				alert(this.value)
			}
		}
	}
</script>

<style>
.makedown-page{
	height:90vh;
	
}
</style>