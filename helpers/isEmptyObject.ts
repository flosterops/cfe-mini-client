function isEmptyObject(value: any) {
    const keys = Object.keys(value);
    return !keys.length;
}

export { isEmptyObject };
