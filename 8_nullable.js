function fn(params) {
  //old syntax
  //let output = (params !== null && params !== undefined) ? 'not null' : 'null';

  //new syntax
  //shows the first defined value  
  let output = params ?? 'null';

  console.log(output);
}

fn();