class Transcriptor
{

 toRna(DNA_strand)
 {
   let map_dna_rna=new Map();
   map_dna_rna.set('G','C');
   map_dna_rna.set('C','G');
   map_dna_rna.set('T','A');
   map_dna_rna.set('A','U');
   let RNA_strand='';
   for(let ch of DNA_strand)
   {
     RNA_strand+=map_dna_rna.get(ch);
   }
   return RNA_strand;

 }
}
export default Transcriptor;
