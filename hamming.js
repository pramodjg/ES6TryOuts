
class Hamming
{

 compute(ham_one,ham_two)
  {
    var array_str_one=[...ham_one];
    var array_str_two=[...ham_two];
    let n=0;
    if(ham_one.length==ham_two.length)
    {
    for(var key in array_str_one)
    {
      if(array_str_one[key]!=array_str_two[key])
      {
        n=n+1;
      }
    }
  }
  else {
    throw new Error('DNA strands must be of equal length.');
  }
    return n;
  }
}
export default Hamming;
