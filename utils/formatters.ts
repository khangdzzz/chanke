export const formatDate = (isoDateString: string) => {
    const date = new Date(isoDateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
}


export const isNumber = (evt: { keyCode: number; preventDefault: () => void }) => {
    const charCode = evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault()
    } else {
        console.log(123)
        return true
    }
}


export const maskNumber = (numberString: string) => {
    const maskedPart = '*'.repeat(numberString.length - 3);
    const visiblePart = numberString.slice(-3);
    return maskedPart + visiblePart;
}
