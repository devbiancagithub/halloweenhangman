results = []; // array for storing results
/*file inputs*//* w   ww   .   de   m   o2  s   . c    o  m*/
inputs = [document.getElementById('file1'), document.getElementById('file2')];
function readFile() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].files && inputs[i].files[0]) {
      var FR = new FileReader();
      FR.onload = function (event) {
        results[i] = event.target.result; //array where I would like to store results
        console.log(results[i]);
      };
      FR.readAsDataURL(inputs[0].files[0]);
    }
  }
}
//here I would like to write down all results
var btn = document.getElementById('saveBtn');
btn.onclick = function() {
  readFile();
}
