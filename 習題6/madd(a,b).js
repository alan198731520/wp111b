function madd(a,b)
{
    const result=[];
    if(a.length !== b.length || a[0].length !==b[0].length) 
    {
    throw new Error("矩陣大小不同");
    }

    for(let i=0; i < a.length; i++) 
    {
    result[i] = [];
    for(let j=0; j < a[0].length;j++) 
    {
        result[i][j] = a[i][j]+b[i][j];
    }
    }

    return result;
}

const a=[[1,2],[1,2]];
const b=[[1,2],[1,2]];
console.log(madd(a, b));