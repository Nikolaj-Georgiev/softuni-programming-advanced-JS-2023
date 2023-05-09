function methods() {
    let count = 5;
    const parser = {
      increment() { count++; },
      decrement() { count--; },
      reset() { count = 0; },
      default() {console.log('HUI');}
    };

    parser['increment'] ? parser['increment']() : parser.default();

    /* това е същото, но с изнесено действието в проментлива
    let action = 'increment';
    parser[action] ? parser[action]() : parser.default();
    */
    console.log(count);

}

methods();