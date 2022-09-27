var column;

document.getElementById('menu-grid-column').addEventListener('change', function() {
    column = this.value;
});

document.getElementById('button-search').onclick = function Search() {
    clear();
    if(!column) {
        alert("Выберите столбец");
        return 0;
    }
    let blocks = document.querySelectorAll('.' + column);
    let search = document.getElementById('search').value;

    if(search.length == 0) {
        alert("Ничего не введено");
        return 0;
    }

    let count = findMatch(blocks, search);

    var output = document.getElementById('count');

    if(count == 0) {
        output.value = "Ничего не найдено";
    }
    else {
        output.value = 'Cовпадений: ' + count;
    }
}