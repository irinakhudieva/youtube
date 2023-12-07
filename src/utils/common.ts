export const formatCompactNum = (num: number) => {
    const formatter = Intl.NumberFormat('ru', {
        notation: 'compact'
    });
    return formatter.format(num);
}