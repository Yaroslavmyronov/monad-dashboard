export const formatEthWithSubShort = (wei: string | undefined) => {
  const eth = Number(wei) / 1e18;
  const ethStr = eth.toFixed(18);

  const [integerPart, decimalPart = ''] = ethStr.split('.');
  const decimalWithoutLeadingZeros = decimalPart.replace(/^0+/, '');
  const first4Digits = decimalWithoutLeadingZeros.slice(0, 4);

  return {
    integerPart,
    first4Digits,
  };
};
