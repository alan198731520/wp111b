function truthTable(n, all = '') 
{
  if (n === 0) 
  {
    console.log(all);
  } 
  else 
  {
    truthTable(n - 1, all + '0');
    truthTable(n - 1, all + '1');
  }
}