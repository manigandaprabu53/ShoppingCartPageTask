export const findIndex = (arr, id)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i].id === Number(id))
            return i;
    }
    return -1
}