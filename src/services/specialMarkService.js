const startMark = '@@@';
const stopMark = '@@@';

const SpecialMarkService = {
  createSpecialMark: (display, name, value) => {
    return startMark + display + '|' + name + '|' + value + stopMark;
  },
  changeSpecialMarksOnHtml: text => {
    let result = '';
    let tempText = text;
    while (tempText.length > 0) {
      const startIdx = tempText.indexOf(startMark);
      if (startIdx > -1) {
        const otherText = tempText.substring(startIdx + startMark.length, tempText.length);
        const stopIdx = otherText.indexOf(stopMark);

        if (stopIdx > -1) {
          const mark = tempText.substring(startIdx + startMark.length, startIdx + startMark.length + stopIdx);

          const markArr = mark.split('|');
          result += tempText.substring(0, startIdx);
          result +=
            '<span>&nbsp;<span><span style="font-weight:bold;color:blue;" data-' +
            markArr[1] +
            '="' +
            markArr[2] +
            '" >' +
            markArr[0] +
            '</span><span>&nbsp;<span>';
          tempText = tempText.substring(startIdx + startMark.length + stopIdx + stopMark.length, tempText.length);
          continue;
        }
      }

      result += tempText;
      tempText = '';
    }

    return result;
  },
};

Object.freeze(SpecialMarkService);

export default SpecialMarkService;
