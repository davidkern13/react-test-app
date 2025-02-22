export const isValidToSearch = (value: string): boolean => {
    return value?.length > 1;
}
export const isValidInput = (value: any): boolean => {
    return value?.toString()?.length;
}