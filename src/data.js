//Pega string do HTML e compara com o objeto type do data e retorna o que for igual
//Get HTML string and compare with data's type object and return what is the same
export const showFilterType = (data, userText) => {
  const typeInclude = (data.filter(data => data.type.includes(userText)))
  return (typeInclude);
};

//Get HTML string and compare with data's rarity object and return what is the same
export const showFilterRarity = (data, userText) => {
  const rarityInclude = (data.filter(data => data.rarity.includes(userText)))
  return (rarityInclude);
};