export function os(ua) {
    var isWindowsPhone = /(?:Windows Phone)/.test(ua);

    const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;

    var isAndroid = /(?:Android)/.test(ua);

    let isFireFox = /(?:Firefox)/.test(ua);

    const isChrome = /(?:Chrome|CriOS)/.test(ua);

    var isTablet =    /(?:iPad|PlayBook)/.test(ua)
    || (isAndroid && !/(?:Mobile)/.test(ua))
    || (isFireFox && /(?:Tablet)/.test(ua));

    let isPhone = /(?:iPhone)/.test(ua) && !isTablet;

    let isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet,
        isPhone: isPhone,
        isAndroid,
        isPc: isPc
    };
}
