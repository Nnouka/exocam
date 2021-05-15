const MILIS_IN_DAY = 86400000;
const SECS_IN_DAY = 86400;
const SECS_IN_HOUR = 3600;
const MINS_IN_DAY = 1440;
function formatDateString(dateStr) {
    if (dateStr === null) return '';
    dateStr = dateStr.trim();
    if (!dateStr.includes('T')) {
        const spl = dateStr.split(' ');
        dateStr = spl.join('T');
    }
    return dateStr;
}
export function humanDisplay(dateStr) {
    try {
        const that = new Date(formatDateString(dateStr));
        return that.toLocaleString();
    } catch (e) {
        return dateStr;
    }
}
export function humanDiffs(dateStr) {
    if (dateStr === null) return '';
    try {
        dateStr = formatDateString(dateStr);
        let that = new Date(dateStr);
        let moment = new Date();
        let diffYear = that.getFullYear() - moment.getFullYear();
        if (diffYear !== 0) {
            return getHumanDisplay(diffYear, 'year');
        }
        let diffMonth = that.getMonth() - moment.getMonth();
        if (diffMonth !== 0) {
            return getHumanDisplay(diffMonth, 'month');
        }
        let diffTime = that.getTime() - moment.getTime();
        let diffDay = diffTime / MILIS_IN_DAY;
        if (Math.ceil(diffDay) !== 0) {
            const weeks =  Math.round(Math.abs(diffDay / 7));
            if (weeks >= 1) {
                return `${weeks} week${weeks > 1 ? 's' : ''} ${ diffDay > 0 ? 'from now' : 'ago'}`;
            }
            return getHumanDisplay(Math.round(diffDay), 'day');
        }
        let diffHour = diffDay * 24;
        if (Math.ceil(diffHour) !== 0) {
            return getHumanDisplay(Math.round(diffHour), 'hour');
        }
        let diffMin = diffDay * MINS_IN_DAY;
        if (Math.ceil(diffMin) !== 0) {
            return getHumanDisplay(Math.round(diffMin), 'minute');
        }
        let diffSec = diffDay * SECS_IN_DAY;
        if (Math.ceil(diffSec) !== 0) {
            return getHumanDisplay(Math.round(diffSec), 'second');
        }
        return 'just now';
    } catch (e) {
        return '';
    }
}

function getHumanDisplay(diff, period) {
    return `${Math.abs(diff)} ${period}${Math.abs(diff) > 1 ? 's' : ''} ${ diff > 0 ? 'from now' : 'ago'}`;
}