class words
{

  count(word_to_count)
  {
    let this.map_literal=new Map();
    word_to_count=word_to_count.toLowerCase();
    let word_array=word_to_count.split(' ');
    let unique = [...new Set(word_array)];
    for(let value of unique)
    {
      let value_count=0;
      this.map_literal.add(value,0);
      for(let value_to_check of word_array)
      {
        if(value===value_to_check)
        {
          value_count=value_count+1;
        }
      }
      this.map_literal.set(value,value_count);
      return strMapToObj(this.map_literal);
    }

  }
  function strMapToObj(strMap) {
       let obj = Object.create(null);
       for (let [k,v] of strMap) {
           // We don’t escape the key '__proto__'
           // which can cause problems on older engines
           obj[k] = v;
       }
       return obj;
   }
}
