module.exports = {
    normalizeGender: function(gender) {
        var g = gender.toLowerCase();
        if (g.len === 0) {
            throw new Error('this is an error that I am throwing');
        }
        if (/[mf]/.test(g[0])) {
            return g[0];
        }
        throw new Error('this is another error');
    }
}