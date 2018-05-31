import Moment from 'moment';
Moment.locale('zh-cn');


export function getTimeString(date) {
    let now = new Date(),
        nowDate = now.getDate(),
        createTime = new Date(date),
        createDate = createTime.getDate(),
        diff = now.getTime() - date;
    // 1分钟内
    if (diff < 1000 * 60) {
        return '刚刚';
    } else if (diff < 1000 * 60 * 60) {
        // 1小时内
        return `${Math.ceil(diff / (1000 * 60))}分钟前`;
    } else if ((diff < 1000 * 60 * 60 * 24) && (nowDate == createDate)) {
        // 当天内
        return `今天 ${Moment(date).format('HH:mm')}`;
    } else if (now.getYear() == createTime.getYear()) {
        return Moment(date).format('MM-DD HH:mm');
    } else {
        return Moment(date).format('lll');
    }
}