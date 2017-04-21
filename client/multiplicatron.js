const product = function(args){
	if(args.length>=2){
		var ans = 1;
		for(var j=0;j<args.length;j++){
			ans = ans * parseInt(args[j]);
		}
	}else{
		ans = NaN;
	}
	return ans;
};
module.exports = product;