// form events are different from regular events
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = BMI;
    if (BMI < 18.6) {
      results.innerHTML = `You are under weight ${BMI}`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      results.innerHTML = `Normal range ${BMI}`;
    } else {
      results.innerHTML = `Overweight ${BMI}`;
    }
  }

  console.log(height, weight);
});
/*
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
*/
