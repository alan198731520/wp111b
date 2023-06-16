function mmul(a,b) 
{
  const result=[];
  if(a[0].length !==b.length)
  {
    throw new Error("矩陣大小不能相乘");
  }

  for(let i=0; i < a.length;i++) 
  {
    result[i]=[];
    for (let j=0; j < b[0].length;j++)
    {
      let sum = 0;
      for (let k=0; k < b.length;k++) 
      {
        sum +=a[i][k]*b[k][j];
      }
      result[i][j]=sum;
    }
  }

  return result;
}

const a=[[1,2],[1,2]];
const b=[[1,2],[1,2]];
console.log(mmul(a, b));