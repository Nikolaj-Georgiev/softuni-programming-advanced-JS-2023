function attachEventsListeners() {
   const metrics = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254
   }

   document.getElementById('convert').addEventListener('click', () => {
    const input = document.querySelector('input#inputDistance').value;
    const inputUnits = document.querySelector('#inputUnits').value;
    const outputUnits = document.querySelector('#outputUnits').value;
    const outputDistance = document.querySelector('#outputDistance');
    let calculator = input * metrics[inputUnits];
    outputDistance.value = calculator / metrics[outputUnits];
   });
}