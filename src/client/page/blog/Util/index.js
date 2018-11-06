import Moment from 'dayjs';

export function getTimeString(date) {
    let now = new Date();

    const nowDate = now.getDate();

    const createTime = new Date(date);

    const createDate = createTime.getDate();

    let diff = now.getTime() - date;
    // 1分钟内
    if (diff < 1000 * 60) {
        return '刚刚';
    }
    if (diff < 1000 * 60 * 60) {
    // 1小时内
        return `${Math.ceil(diff / (1000 * 60))}分钟前`;
    }
    if (diff < 1000 * 60 * 60 * 24 && nowDate == createDate) {
    // 当天内
        return `今天 ${Moment(date).format('HH:mm')}`;
    }
    if (now.getYear() == createTime.getYear()) {
        return Moment(date).format('MM-DD HH:mm');
    }
  return Moment(date).format("lll");
}
