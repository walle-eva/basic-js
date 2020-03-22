const chainMaker = {
  getLength() {
    throw 'Not implemented';
    0;
  },
  addLink(value) {
    throw 'Not implemented';
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
    throw 'Not implemented';
	 return this;
  },
  reverseChain() {
    throw 'Not implemented';
    this.string = this.string.split('~~').reverse().join('~~');
	 return this;
  },
  finishChain() {
    throw 'Not implemented';
	 this.getLength = 0;
	 this.string = '';
	 return s;
   }
};

module.exports = chainMaker;
