
export const init_addClassMethod = () => {
    HTMLElement.prototype.addClass = function(classname) {
        this.className += ` ${classname}`;
        return this;
    };
}