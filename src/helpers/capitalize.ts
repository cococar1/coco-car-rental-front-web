export const  capitalizeFirstLetter = (character:string)=> {
  if (!character) return "";
  return character.charAt(0).toUpperCase() + character.slice(1);
}
