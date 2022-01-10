module.exports = {

    calcPosTecnic: function () {
        console.log('Let\`s go!');
        for (var i = 0; i < ancientTexts.length; i++) {
            if (
                ancientTexts[i].technique.replace(/□/g, '').length > 9 &&
                ancientTexts[i].technique.replace(/□/g, '').length < 12 &&
                ancientTexts[i].technique.replace(/□/g, '').indexOf(' ') >= 0
            ) {
                techLearned[i] = ancientTexts[i].technique.replace(/□/g, '');
            }
            else {
                var filtered = techLearned.filter(function (x) {
                    return x !== undefined;
                });
            }
        }
        techLearned = filtered;
        console.log(filtered);
    }
}
