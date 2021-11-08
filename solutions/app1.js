const removeDuplicatesFromArray = array => {
    return array.filter((item, index) => array.indexOf(item) === index);
}



export default removeDuplicatesFromArray;