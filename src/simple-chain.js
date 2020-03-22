const chainMaker = {
  getLength() {
    this.count = 0;
    return count	  
    ;
  },
  addLink(value) {
    
    if(this.getLength != 0){
	  this.string = this.string + '~~(' + a + ')'
	}  
	if(this.getLength == 0){
	  this.string = '(' + a + ')'
	}  
	this.getLength++;
	 return this;
  },
  removeLink(position) {
    
	 return this;
  },
  reverseChain() {
   
    this.string = this.string.split('~~').reverse().join('~~');
	 return this;
  },
  finishChain() {
    
	 this.getLength = 0;
	 this.string = '';
	 return s;
   }
};

module.exports = chainMaker;
