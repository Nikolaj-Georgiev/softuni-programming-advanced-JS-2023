function canPrint(device) {
    device.print = () => {
        console.log(`${device.name} is printing a page.`);
    }
}
const printer = { name: 'ACME Printer' };
canPrint(printer);
printer.print();
// ACME Printer is printing a page

const copier = { name: 'ComTron Copier' };
canPrint(copier);
const petrunaFn = copier.print;
copier.print();
petrunaFn();// this prints the name of object copier, because the function is locked with this context;