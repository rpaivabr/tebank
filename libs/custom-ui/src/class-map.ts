interface ClassKeys {
    [key: string]: boolean;
}

export const map = (classes: string): ClassKeys => {
    const obj = {} as ClassKeys;
    classes.split(' ').forEach(c => obj[c] = true)

    return obj;
};