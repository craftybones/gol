const tick = (actualCurrGen,bounds) => {
  let rev = x => [x[1],x[0]];
  return actualCurrGen.map(rev);
}

module.exports = {
  nextGeneration:tick
}
