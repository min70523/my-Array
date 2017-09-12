//my Array
function myArray(){
	for(let i=0;i<arguments.length;i++){
		this[i]=arguments[i];
	}
	this.length=arguments.length;

	//数组的最后面添加若干元素
	this.push=function(){            
		for(let i=0;i<arguments.length;i++){
			this[this.length]=arguments[i];
			this.length++;
		}
	}
	//元素首次出现的位置，找到，返回下标。未找到，返回-1
	this.indexOf=function(value){    
		for(let i=0;i<this.length;i++){
			if(this[i]==value){
				return i;
			}
		}
		return -1;
	}
	//元素最后一次出现的位置，找到，返回下标。未找到，返回-1
	this.lastindexOf=function(value){  
		for(let i=this.length-1;i<this.length;i--){
			if(this[i]==value){
				return i;
			}
		}
		return -1;
	}
	//数组反转
	this.reverse=function(){            
		let newarr=[];
		for(let i=this.length-1;i>=0;i--){
			newarr[newarr.length]=this[i];
		}
		return newarr;
	}
	//查找数组中的某个元素，存在true，不存在false
	this.includes=function(value){      
		for(let i=0;i<this.length;i++){
			if(this[i]==value){
				return true;
			}
		}
		return false;
	}
	//数组转化为字符串，中间用符号连接
	this.join=function(str){         
		let newarr='';
		for(let i=0;i<this.length;i++){
			if(i<this.length-1){
				newarr+=this[i]+str;
			}else{
				newarr+=this[i];
			}			
		}
		return newarr;
	}
	//查找数组中的元素是否符合条件，有一个符合，true  都不符合，false
	this.some=function(fn){       
		for(let i=0;i<this.length;i++){
			if(fn(this[i])){
				return true;
			}
		}
		return false;
	}
	//查找数组中的元素是否符合条件，全部符合，true  有一个不符合，false
	this.every=function(fn){
		for(let i=0;i<this.length;i++){
			if(!fn(this[i])){
				return false;
			}
		}
		return true;
	}
	//任意数组元素的任意关系
	this.map=function(fn){
		let newarr=[];	
		for(let i=0;i<this.length;i++){
			if(typeof this[i]=='number'){
				newarr[newarr.length]=fn(this[i]);
			}
		}
		return newarr;
	}
	//数组元素的过滤
	this.filter=function(fn){
		let newarr=[];
		for(let i=0;i<this.length;i++){
			if(fn(this[i])){
				newarr[newarr.length]=this[i];
			}
		}
		return newarr; 
	}
	//数组元素的排序
	this.sort=function(value){
		if(value=='>'){
			this.sortUp();
		}else if(value=='<'){
			this.sortDown();
		}
	}
	//降序
	this.sortUp=function(){
		for(let i=0;i<this.length;i++){
			for(let j=i+1;j<this.length;j++){
					if(this[i]<this[j]){
						let a=this[i];
						this[i]=this[j];
						this[j]=a;	
				   }
				}								
		}
	}
	//升序
	this.sortDown=function(){
		for(let i=0;i<this.length;i++){
			for(let j=i+1;j<this.length;j++){
					if(this[i]>this[j]){
						let a=this[i];
						this[i]=this[j];
						this[j]=a;	
				   }
				}								
		}
	}
	//数组拷贝
	this.copy=function(){
		let newarr=[];
		for(let i=0;i<this.length;i++){
			if(typeof arr[i]=='object'){
					newarr[i]=copy(arr[i]);
				}else{
					newarr[i]=this[i];
				}
		}
		return newarr;
	}
}