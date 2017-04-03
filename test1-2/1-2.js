var sentenceScanner = (function() {

	// private, makes array from sentence

    function getArray(str) {

        let arr = str.match(/\b(\w+)\b/g);
        return arr;
    };

    // public, returns object where key - this is a word, and value - count of its duplicates 

    function countDuplicates(str) {

        let countedObj = getArray(str).reduce((counted, word) =>

            Object.assign(counted, {
                [word.toLowerCase()]: (counted[word.toLowerCase()] || 0) + 1
            }), {})

        return countedObj;

    };

    return {

        countDuplicates: countDuplicates
    }

})();



// simple functiom that reverts word

function reverting(str) {

    return str.split('').sort(() => 1).join('');
};
