const btnConfirm = document.querySelector('.btnConfirm');
const button = document.querySelectorAll('button');
const form = document.querySelector('form');
const cardHolderName = document.querySelector('.cardholder');
const cardNumber = document.querySelector('.cardNumber');
const inputMonth = document.querySelector('.inputMonth');
const inputYear = document.querySelector('.inputYear');
const inputCVC = document.querySelector('.cvcInput');
const thankContainer = document.querySelector('.thankContainer');
const nameOnCard = document.querySelector('.nameOnCard');
const numberOnCard = document.querySelector('.numberOnCard');
const cvcOnCard = document.querySelector('.cvcOnCard');
const yearOnCard = document.querySelector('.yearOnCard');
const monthOnCard = document.querySelector('.monthOnCard');

btnConfirm.disabled = true;
document.addEventListener('input', e => {
  e.preventDefault();
  if (
    !inputCVC.value ||
    !cardNumber.value ||
    !inputMonth.value ||
    !inputYear.value ||
    !cardHolderName.value
  ) {
    console.log('lol');
    btnConfirm.disabled = true;
  } else {
    btnConfirm.disabled = false;
  }
});

button.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    if (btn.id === 'btnConfirm') {
      form.style.cssText = 'display:none';
      thankContainer.style.cssText = 'display:block';
      cardHolderName.value = '';
      cardNumber.value = '';
      inputCVC.value = '';
      inputMonth.value = '';
      inputYear.value = '';
    }

    if (btn.id === 'btnContinue') {
      form.style.cssText = 'display:block';
      thankContainer.style.cssText = 'display:none';
      numberOnCard.innerHTML = '';
      nameOnCard.innerHTML = '';
      yearOnCard.innerHTML = '';
      cvcOnCard.innerHTML = '';
      monthOnCard.innerHTML = '';
      btnConfirm.disabled = true;
    }
  });
});

cardHolderName.addEventListener('input', e => {
  nameOnCardFunc(e);
});
cardNumber.addEventListener('input', e => {
  numberOnCardFunc(e);
});
inputMonth.addEventListener('input', e => {
  monthOnCardFunc(e);
});
inputYear.addEventListener('input', e => {
  yearOnCardFunc(e);
});
inputCVC.addEventListener('input', e => {
  cvcOnCardFunc(e);
});
form.addEventListener('keyup', () => {});

nameOnCardFunc = e => {
  nameOnCard.textContent = e.target.value;
  if (!cardHolderName.value) {
    document.querySelector('.errorName').innerHTML = `Can't be blank`;
    cardHolderName.style.borderColor = 'hsl(0, 100%, 66%)';
    let error = document.querySelector('.errorName');
    error.innerHTML = `Can't be blank`;
    nameOnCard.innerHTML = '';
  } else {
    document.querySelector('.errorName').innerHTML = ``;
    cardHolderName.style.borderColor = 'hsl(249, 99%, 64%)';
  }
};
numberOnCardFunc = e => {
  let num = e.target.value;
  let error = document.querySelector('.errorNum');
  if (isNaN(num)) {
    cardNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    cardNumber.style.color = 'hsl(0, 100%, 66%)';
    numberOnCard.textContent = '';
    error.innerHTML = `Only number accepted`;
  } else if (!cardNumber.value) {
    numberOnCard.innerHTML = '';
    error.innerHTML = `Can't be blank`;
    cardNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    cardNumber.style.color = 'hsl(0, 100%, 66%)';
  } else {
    error.innerHTML = '';
    cardNumber.style.borderColor = 'hsl(249, 99%, 64%)';
    cardNumber.style.color = 'black';
    numberOnCard.textContent = num
      .replace(/[^\dA-Z]/g, ' ')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    error.innerHTML = '';
  }
};

cvcOnCardFunc = e => {
  let num = e.target.value;
  let error = document.querySelector('.errorCVC');
  if (isNaN(num)) {
    inputCVC.style.borderColor = 'hsl(0, 100%, 66%)';
    inputCVC.style.color = 'hsl(0, 100%, 66%)';
    cvcOnCard.textContent = '';
    error.innerHTML = `Only number accepted`;
  } else if (!inputCVC.value) {
    error.innerHTML = `Can't be blank`;
    cvcOnCard.innerHTML = '';
    inputCVC.style.borderColor = 'hsl(0, 100%, 66%)';
    inputCVC.style.color = 'hsl(0, 100%, 66%)';
  } else {
    inputCVC.style.borderColor = 'hsl(249, 99%, 64%)';
    inputCVC.style.color = 'black';
    cvcOnCard.textContent = num;
    error.innerHTML = '';
  }
};
monthOnCardFunc = e => {
  let num = e.target.value;
  let error = document.querySelector('.errorDate');
  if (isNaN(num)) {
    inputMonth.style.borderColor = 'hsl(0, 100%, 66%)';
    inputMonth.style.color = 'hsl(0, 100%, 66%)';
    monthOnCard.textContent = '';
    error.innerHTML = `Only number accepted`;
  } else if (num > 12) {
    error.innerHTML = `Only 12 month allowed`;
  } else if (!inputMonth.value) {
    monthOnCard.innerHTML = '';
    error.innerHTML = `Can't be blank`;
    inputMonth.style.borderColor = 'hsl(0, 100%, 66%)';
    inputMonth.style.color = 'hsl(0, 100%, 66%)';
  } else {
    inputMonth.style.borderColor = 'hsl(249, 99%, 64%)';
    inputMonth.style.color = 'black';
    monthOnCard.textContent = num;
    error.innerHTML = '';
  }
};
yearOnCardFunc = e => {
  let num = e.target.value;
  let error = document.querySelector('.errorDate');

  if (isNaN(num)) {
    inputYear.style.borderColor = 'hsl(0, 100%, 66%)';
    inputYear.style.color = 'hsl(0, 100%, 66%)';
    yearOnCard.textContent = '';
    error.innerHTML = `Only number accepted`;
  } else if (!inputYear.value) {
    yearOnCard.innerHTML = '';
    error.innerHTML = `Can't be blank`;
    inputYear.style.borderColor = 'hsl(0, 100%, 66%)';
    inputYear.style.color = 'hsl(0, 100%, 66%)';
  } else {
    inputYear.style.borderColor = 'hsl(249, 99%, 64%)';
    inputYear.style.color = 'black';
    yearOnCard.textContent = '/' + num;
    error.innerHTML = '';
  }
};
