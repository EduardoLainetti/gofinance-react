const formatDate = (value: Date): string => {
  const date = new Date(value);
  return new Intl.DateTimeFormat('pt-BR').format(date);
};
export default formatDate;
