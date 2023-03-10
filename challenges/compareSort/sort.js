const { movies } = require("./movies");


function sortYear(movies) {
    return movies.sort((a, b) => b.year - a.year);
}


function sortTitle(movies) {
    return movies.sort((a, b) => {
        // Remove leading articles from title
        const regex = /^(a |an |the )/i;
        const titleA = a.title.replace(regex, "");
        const titleB = b.title.replace(regex, "");
        // Compare titles alphabetically
        return titleA.localeCompare(titleB);
    });
}
module.exports = { sortYear, sortTitle };