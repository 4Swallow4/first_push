console.log('Hello, world')
// alert("你好，内联样式弹窗")
function addNewRow() {//新增表格函数
    let table = document.getElementById('table');

    let length = table.rows.length;

    //插入行节点，length获取插入位置(索引从0开始)
    let newRow = table.insertRow(length);
    console.log('newRow');

    let newName = newRow.insertCell(0);
    let newSex = newRow.insertCell(1);
    let newAction = newRow.insertCell(2);
    newName.innerHTML = 'glassbeam';
}
