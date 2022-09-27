function findMatch(blocks, search) {
    let count = 0;
    blocks.forEach(element => {
        if(element.innerHTML.toLowerCase().includes(search.toLowerCase())) {
            let indexes = getListIdx(element.innerHTML.toLowerCase(), search.toLowerCase());
            for(var i = indexes.length - 1 ; i >= 0; i--) {
                count++;
                element.innerHTML = element.innerHTML.substring(0, indexes[i]) + '<span style="color:red;">' 
                + element.innerHTML.substring(indexes[i], indexes[i] + search.length) + '</span>' + 
                element.innerHTML.substring(indexes[i] + search.length, element.innerHTML.length);
            }
        }
    });

    return count;
}