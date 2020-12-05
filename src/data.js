//Pega string do HTML e compara com o objeto type do data e retorna o que for igual
export const showFilterType = (data, userText) => {
  const typeInclude = (data.filter (data => data.type.includes(userText)))
  return (typeInclude);
};

export const showFilterRarity = (data, userText) => {
  const rarityInclude = (data.filter (data => data.rarity.includes (userText)))
  return (rarityInclude);
};
//