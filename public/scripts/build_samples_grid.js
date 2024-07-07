function buildSamplesGridFromPages(pages) {
    let elems = '';
    
    pages.forEach((page) => {
        elems = elems + 
        `<div class="sample">
            <h2 class="sample__head">${page.name}</h2>
            <img src="${page.preview}" alt="error">
        </div>`
        console.log(page.preview);
    });
    return elems;
}

module.exports = buildSamplesGridFromPages;