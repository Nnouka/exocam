export function numberFormat({data, decimals = 0, decimal = '.', thousandth = ','}) {
    let it = Number(data);
    let sign = '';
    if (typeof it !== "number") {
        return data;
    }
    if (it < 0) {
        sign = '-';
        it = Math.abs(it);
    }
    let arr = [];
    let digits = Math.floor(it);
    let dec = String(it - digits);
    if (dec.length > 2) {
        dec = dec.substr(1);
        if (dec.length > decimals) {
            dec = dec.substr(0, decimals);
        }
    }
    if (digits < 1000) {
        return `${sign}${digits}${decimals > 0 ? decimal + padZeros(dec, decimals) : ''}`
    }
    let qObj = getThousands(digits);
    arr.push(padZeros(qObj.r, 3));
    while (true) {
        qObj = getThousands(qObj.q);
        if (qObj.q <= 0) {
            arr.push(""+qObj.r);
            break;
        }
        arr.push(padZeros(qObj.r, 3));
    }
    return `${sign}${arr.reverse().join(thousandth)}${decimals > 0 ? decimal + padZeros(dec, decimals) : ''}`;
}

function getThousands(digits) {
    const q = Math.floor(digits / 1000);
    const r = digits - 1000 * q;
    return {q, r};
}

function padZeros(what, zeros, back = true) {
    let result = '';
    what = '' + what;
    if (what.length >= zeros) {
        return result + what;
    }
    for (let i = 0; i < (zeros - what.length); i++) {
        result += '0';
    }
    return back ? `${what}${result}` : `${result}${what}`;
}