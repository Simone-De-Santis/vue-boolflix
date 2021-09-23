module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `     
                        @import "src/assets/scss/custom";                                     
                        @import "~bootstrap/scss/bootstrap";
                           `
            }
        }
    }
}