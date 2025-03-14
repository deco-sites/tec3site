const opacityToHex = (opacity: number) => {
    const intValue = Math.round(opacity * 255);
    return intValue.toString(16).padStart(2, '0').toUpperCase();
}

export function hexWithOpacity(hex: string, opacity: number) {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 8) {
        cleanHex = cleanHex.slice(0, 6);
    }
    const newHex = `#${cleanHex}${opacityToHex(opacity / 100)}`;
    console.log(newHex);
    return newHex;
}