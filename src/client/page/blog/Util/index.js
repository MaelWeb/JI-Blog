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
    return Moment(date).format('lll');
}

/**
 * 获取img标签的 srcSet
 *
 * @params {String} src 图片原始路径
 * @params {Number} size 基准宽度
 **/
export function getImgSrcSet(src, size) {
    if (!src) return '';
    return [
        `https:${src}?imageMogr2/auto-orient/thumbnail/${size * 2}x/strip/interlace/1/quality/80/ 750w`,
        `https:${src}?imageMogr2/auto-orient/thumbnail/${size * 3}x/strip/interlace/1/quality/80/ 1125w`,
        `https:${src}?imageMogr2/auto-orient/thumbnail/${size * 4}x/strip/interlace/1/quality/80/ 1680w`,
        `https:${src}?imageMogr2/auto-orient/thumbnail/${size * 5}x/strip/interlace/1/quality/80/ 2560w`
    ].join(',');
}