class Validation{
	constructor(){
		this.errors=[];
		this.rules = {
			required:(word,alias)=>{
				if(word==""){
					this.errors.push(alias + " is required");
				}
			},
			maxLength:(word,alias,length)=>{
				if(word[length+1]){
					this.errors.push(alias+" can not have more than "+length+" characters");
				}
			},
			minLength:(word,alias,length)=>{
				if(typeof word[length]=="undefined"){
					this.errors.push(alias+" can not be have less than "+length+" characters.");
				}
			},
			matches:(word,alias,match,alias2)=>{
				if(word!=match){
					this.errors.push(alias+" should match "+alias2);
				}
			},
			validEmail:(word,alias)=>{
				let atPos=word.indexOf("@");
				let comPos=word.indexOf(".com");
				if (atPos+1>comPos){
					this.errors.push(word+" is not a valid "+alias);
				}
			}
		}
	}
	initialize(arr,request){
		delete request.session.validation;
		delete request.session.formData;
		for(let i=0;i<arr.length;i++){
			const value=arr[i][0];
			const alias=arr[i][1];
			const rulesArr=arr[i][2].split("||");
			this.validate(value,alias,rulesArr);
		}
		if(this.errors.length>0){
			request.session.validation=this.errors;
			request.session.formData=request.body;
			this.errors=[];
		}
	}
	validate(value,alias,rules,i=0){
		if(i==rules.length){
			return
		}else{
			const[type,arg,alias2]=rules[i].split("=");
			this.rules[type](value,alias,arg,alias2);
			this.validate(value,alias,rules,i+1);
		}
	}
}
module.exports = new Validation;