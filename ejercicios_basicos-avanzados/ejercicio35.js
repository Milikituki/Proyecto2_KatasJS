const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
   const foundMutants = [];
   for (let index = 0; index < mutants.length; index++) {
    const element = mutants[index];
    if(element.power === power){
        foundMutants.push(element.name)
    }
    
   }
   if(foundMutants.length === 0){
    return "\nNo se ha encontrado ningún mutante con el poder especificado."
   }else{
    return "Mutantes con el poder especificado: "+foundMutants
   }
}

console.log(findMutantByPower(mutants, 'teleportation'));
