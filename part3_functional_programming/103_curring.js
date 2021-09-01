const add = x => y => x + y;
const add10 = add(10);

console.log(add10(20));
console.log(add(10)(20));

    function sumNumtoNum(start,end){
        var sum;
        for(var i=start; i<=end; i++){
            sum += i;
        }
    }
    function sumNumtoNum(start,end,s){
        var sum;
        for(var i=start; i<=end; i++){
            if(end % s == 0){
             sum += i;
            }
        }
        return sum;
    }
    console.log(sumNumtoNum(1,100));
    console.log(sumNumtoNum(1,100,2));
