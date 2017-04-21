const product = require('./multiplicatron.js');

class ViewManager{
	connectEventHandlers(){
		document.getElementById("calculate").addEventListener("click",this.calculateProduct.bind(this));
		document.getElementById("factor").addEventListener("click",this.addInput.bind(this));
	}

	addInput(event){
		event.preventDefault();
		var br = document.createElement('br');
		var newDiv = document.createElement('div');
    	newDiv.innerHTML = "<input type='text' id='input-num' autocomplete='off'>"; 
    	var factors = document.getElementById('factors');
    	factors.appendChild(br);
    	factors.appendChild(newDiv);
	}

	calculateProduct(event){
		event.preventDefault();
		var factors = document.getElementById("factors");
	    var c = factors.getElementsByTagName("div");
	    var i; var args = [];
	    for (i = 0; i < c.length; i++) {
	    	if(document.getElementsByTagName("input")[i].value){
       			args.push(document.getElementsByTagName("input")[i].value);
       		}
    	}
    	const ans = product(args);
		this.renderProduct(ans);
	}
	renderProduct(ans){
		document.querySelector('.product').textContent = ans;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();