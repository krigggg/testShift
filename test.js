document.getElementById('button-search').onclick = function Search() {
    $('div span').replaceWith(function(){
        return $(this).text();
   });
   
    let count = 0;
    let blocks = document.querySelectorAll('.grid-item');
    let search = document.getElementById('search').value;

    if(search.length == 0) {
        alert("Ничего не введено");
        return 0;
    }

    blocks.forEach(element => {
        if(element.innerHTML.toLowerCase().includes(search.toLowerCase())) {
            let indexes = getListIdx(element.innerHTML.toLowerCase(), search.toLowerCase());
            for(var i = indexes.length - 1 ; i >= 0; i--) {
                count++;
                element.innerHTML = element.innerHTML.substring(0, indexes[i]) + '<span style="background-color:red;">' 
                + element.innerHTML.substring(indexes[i], indexes[i] + search.length) + '</span>' + 
                element.innerHTML.substring(indexes[i] + search.length, element.innerHTML.length);
            }
        }
    });

    var output = document.getElementById('count');

    if(count == 0) {
        output.value = "Ничего не найдено";
    }
    else {
        output.value = count;
    }
}

function getListIdx(str, substr) {
    let listIdx = [];
    let lastIndex = -1;

    while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
      listIdx.push(lastIndex);
    }

    return listIdx;
  }