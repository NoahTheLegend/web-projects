function buildSamplesGridFromPages(pages) {
    let elems = '';
    
    pages.forEach((page) => {
        const icon = page.preview;
        elems = elems + 
        `<div class="sample">
            <h2 class="sample__head">${page.name}</h2>
            <img src="${icon}" alt="error">
        </div>`
    });
    return elems;
}

module.exports = buildSamplesGridFromPages;