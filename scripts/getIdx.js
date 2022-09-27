function getListIdx(str, substr) {
    let listIdx = [];
    let lastIndex = -1;

    while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
      listIdx.push(lastIndex);
    }

    return listIdx;
}