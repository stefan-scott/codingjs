
/** takes url parameter and transforms into object **/
function deParam(urlStr) {
  const subbie = urlStr.substring(1);
  const x = subbie.split('&').map(s => s.split('='));
  return x.reduce((accum, arr) => { accum[arr[0]] = arr[1]; return accum; }, {});
}

/** Return row for html table **/
function formatResults(funcName, inputStr, idealOutput, output) {
  const ok = _.isEqual(output, idealOutput);
  return `<tr>
         <td>${funcName}${inputStr} → ${idealOutput}</td>
         <td>${output}</td>
         <td>${ok ? '✔' : '✖'}</td>
         <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>
     </tr>`;
}

function tableHeader() {
  return `<tr>
         <th>Test → Expected</th>
         <th>Yours</th>
         <th colspan="2">Result</th>
     </tr>`;
}

 /**
  * it converts nodingbat input (as stored) to js
  *     e.g. inputParser('(1,2)')=>[1,2]
  **/
function inputParser(inputStr) {
  // return eval(`[${inputStr.slice(1, -1)}]`) // another way of doing it
  const x = inputStr.slice(1, -1);
  let y = '['+x+']';
  let z;
  try {
    eval("z ="+y);
  } catch (e) {
    z = e.toString();
  }
  return z;
}

/** creates default input to start function **/
// function defaultInput(inputStr) {
//   z = inputParser(inputStr)
//   let inps = z.map((item, i) => 'input'+(i+1));
//   return inps;
// }
// exercise.inputs[0]  this is the input to function when called

function defaultInput(exName){
  let sol = solutions[exName].toString();
  let x = sol.match(/function ?(\(.+\))/)[1];
  let y = x.slice(1,-1);
  let z = y.split(",");
  return z.map((item, i) => item);
}
