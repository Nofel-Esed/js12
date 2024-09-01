function filtermethod(arr,ChekFn){
    let newArr = [] ;
    for(let i=0; i<arr.length;i++){
        if(ChekFn(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let arr = Filter([1,2,3,4,5,6,7,8,9,10],function(num){
return num > 2 ;

})
console.log(arr);  



function everymethod(arr,ChekFn){
    let iscorrect = true;
    for(let i=0; i<arr.length; i++){
        if(!ChekFn(arr[i])){
        iscorrect=false;
        break;
        }
    }
    return iscorrect;
}
let arrr = Every([1,2,3,4,5,6,7,8,9,10],function(num){
return num > 0 ;

})
console.log(arrr);  





function somemethod(arr,ChekFn){
    let iscorrect = false;
    for(let i=0; i<arr.length; i++){
        if(!ChekFn(arr[i])){
        iscorrect=true;
        break;
        }
    }
    return iscorrect;
}
let arrrr = Some([1,2,3,4,5,6,7,8,9,10],function(num){
return num > 4 ;

})