export const SELECT_DAY = {
  month: Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}월`,
  })),
  day: Array.from({ length: 31 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}일`,
  })),
  year: Array.from({ length: 100 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return {
      value: year,
      label: `${year}년`,
    };
  }),
};
