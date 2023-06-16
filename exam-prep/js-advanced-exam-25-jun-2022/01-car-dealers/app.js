window.addEventListener("load", solve);

function solve() {

  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const originalCost = document.getElementById('original-cost');
  const sellingPrice = document.getElementById('selling-price');
  const publishBtn = document.getElementById('publish');
  const tBody = document.getElementById('table-body');
  const ulCarList = document.getElementById('cars-list');
  const strongProfit = document.getElementById('profit');
  let totalProfit = 0;
  const inputArr = [make, model, year, fuel, originalCost, sellingPrice];
  publishBtn.addEventListener('click', onPublish);

  function onPublish(e) {
    e.preventDefault();

    if (!make.value || !model.value || !year.value || !fuel.value || !originalCost.value || ! sellingPrice.value) {
      return;
    }
    if (Number(sellingPrice.value) < Number(originalCost.value)) {
      return;
    }
    const inputValueArr = [];
    inputArr.forEach(el => inputValueArr.push(el.value));
    let [makeValue, modelValue, yearValue, fuelValue, originalCostValue, sellingPriceValue] = inputValueArr;    
    const tr = createElements('tr', '', 'row');
    inputValueArr.forEach(value => tr.appendChild(createElements('td', value)));
    const editBtn = createElements('button', 'Edit', 'action-btn edit');
    const sellBtn = createElements('button', 'Sell', 'action-btn sell');
    editBtn.addEventListener('click', onEdit);
    sellBtn.addEventListener('click', onSell);
    const td = createElements('td');
    td.appendChild(editBtn);
    td.appendChild(sellBtn);
    tr.appendChild(td);
    tBody.appendChild(tr);

    inputArr.forEach(el => el.value = '');

    function onEdit(){
      tr.remove();
      inputArr.forEach((el, i) => el.value = inputValueArr[i]);
    }
    function onSell(){
      tr.remove();
      const liCar = createElements('li', '', 'each-list');
      const carSpan = createElements('span', `${makeValue} ${modelValue}`);
      liCar.appendChild(carSpan);
      const yearSpan = createElements('span', yearValue);
      liCar.appendChild(yearSpan);
      const profitSpan = createElements('span', `${Number(sellingPriceValue) - Number(originalCostValue)}`);
      liCar.appendChild(profitSpan);
      ulCarList.appendChild(liCar);
      totalProfit += Number(sellingPriceValue) - Number(originalCostValue);
      strongProfit.textContent = totalProfit.toFixed(2);
    }
  }

  function createElements(type, content, className, id) {
    const element = document.createElement(type);
    content ? element.textContent = content : '';
    className ? (className.includes(' ') ? className.split(' ').forEach(c => element.classList.add(c)): element.classList.add(className)) : '';
    id ? element.id = id : '';
    return element;
  }
}
