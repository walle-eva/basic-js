module.exports = class DepthCalculator {
    calculateDepth(arr, depth) {
        if(!depth){
            depth = 1;
        }

        let recurs = depth;
        arr.forEach(x => {
            if(Array.isArray(x)){
                let a = this.calculateDepth(x,depth+1);
                if(a> recurs){
                    recurs = a;
                }
            }
        });
        return recurs;
    }
};
