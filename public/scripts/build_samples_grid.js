function buildSamplesGridFromPages(pages) {
    let elems = '';
    
    pages.forEach((page) => {
        const icon = page.preview;
        elems = elems + 
        `<div class="sample">
            <h2 class="sample__head">${page.name}</h2>
            <div class="sample__body sample__body-background"></div>
            <style>
                .sample__body-background {
                    position: relative;
                    background: url(${icon});
                    background-position: center;
                }
            </style>
        </div>`
    });
    return elems;
}

module.exports = buildSamplesGridFromPages;