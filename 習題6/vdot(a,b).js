function vdot(a,b) 
{
    let result = 0;
    if(a.length !== b.length) 
    {
    throw new Error("向量長度不同");
    }

    for(let i=0; i < a.length; i++) 
    {
    result += a[i]*b[i];
    }

    return result;
}

const a=[1, 2, 3];
const b=[1, 2, 3];
console.log(vdot(a, b));