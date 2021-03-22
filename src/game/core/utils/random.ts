export const randomInteger = (min: number, max: number) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

export const random = (min: number, max: number) => {
    return min + Math.random() * (max - min);
};
