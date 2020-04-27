function swap(array, left, right){
    const temp = array[right];
    array[right] = array[left];
    array[left] = temp;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)],
        start = left,
        end = right;
    while (start <= end) {
        while (array[start] > pivot) {
            start++;
        }
        while (array[end] < pivot) {
            end--;
        }
        if (start <= end) {
            swap(array, start, end);
            start++;
            end--;
        }
    }
    return start;
}

function quickSort(array, left, right) {
    let pivot = partition(array, left, right);
        if (left < pivot - 1) {
            quickSort(array, left, pivot - 1);
        }
        if (pivot < right) {
            quickSort(array, pivot, right);
        }
    return array;
}

const array = [0, -1000, 0, -1, 4, 45334, -2, 0,-843.2, 89, 42, 23, 18, 45333, 0, 89, 42, 23, 18, 45335, 432.1023, 1023];
const array2 = [-100, 0, 100, 0];

console.log(array);
let sortedArray = quickSort(array, 0, array.length - 1);
console.table(sortedArray);

console.log(array2);
let sortedArray2 = quickSort(array2, 0, array2.length - 1);
console.table(sortedArray2);
