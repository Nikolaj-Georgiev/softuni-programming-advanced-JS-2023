function print() {
    console.log(`${this.name} is printing a page`);
}
function scan() {
    console.log(`${this.name} is scanning a document`);
}
const printer = {
    name: 'ACME Printer',
    print
};
const scanner = {
    name: 'Initech Scanner',
    scan
};
const copier = {
    name: 'ComTron Copier',
    print,
    scan
};

copier.print();
copier.scan();
printer.print();