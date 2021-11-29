function findMinAndRemove(array){
    let num=array[0];
    let minIndex=0
    if(array.length <=1){
        return array[0]
    }
    else{
        for(let i=0; i<array.length; i++){
            if (array[i]<num){
                num=array[i]
                minIndex=i
            }

        }
        array.splice(minIndex,1)
        return num
    }
}

function selectionSort(array,newArray=[]){
    if(array.length<=1){
        newArray.push(findMinAndRemove(array))
        return newArray;
    }else{
        newArray.push(findMinAndRemove(array))
        return selectionSort(array,newArray)
    }
}
