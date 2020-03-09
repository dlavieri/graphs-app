// recieve .csv data, convert it to array of coordinates [{x: x, y: y}...]
// csv: cells are separared by tabs (\t), rows are separated by newlines (\n)

function csvToData(csv) {
    let data = [];
    let form = csv.split('\n').map(row => row.split('\t')).sort((a,b) => a[0] - b[0]);
    for (let coord of form) {
        let obj = {};
        obj.x = +coord[0];
        obj.y = +coord[1];
        data.push(obj);
    }

    return data;
}