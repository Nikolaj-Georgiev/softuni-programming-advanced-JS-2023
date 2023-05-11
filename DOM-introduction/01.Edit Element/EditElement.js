function editElement(element, match, replacer) {
    // TODO
    let text = element.textContent;
    text = text.split(match).join(replacer);
    return element.textContent = text;
}