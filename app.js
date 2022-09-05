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

button.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    if (
      cardHolderName.value &&
      cardNumber.value &&
      inputCVC.value &&
      inputMonth.value &&
      inputYear.value
    ) {
      btnConfirm.style.visible = 'none';
    }

    if (btn.id === 'btnConfirm') {
      form.style.cssText = 'display:none';
      thankContainer.style.cssText = 'display:block';
    }

    if (btn.id === 'btnContinue') {
      form.style.cssText = 'display:block';
      thankContainer.style.cssText = 'display:none';
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
  } else {
    document.querySelector('.errorName').innerHTML = ``;
    cardHolderName.style.borderColor = 'hsl(249, 99%, 64%)';
  }
};
numberOnCardFunc = e => {
  let num = e.target.value;
  if (isNaN(num)) {
    cardNumber.style.borderColor = 'hsl(0, 100%, 66%)';
    cardNumber.style.color = 'hsl(0, 100%, 66%)';
    numberOnCard.textContent = '';
  } else {
    cardNumber.style.borderColor = 'hsl(249, 99%, 64%)';
    cardNumber.style.color = 'black';
    numberOnCard.textContent = num;
  }
};

cvcOnCardFunc = e => {
  let num = e.target.value;

  if (isNaN(num)) {
    inputCVC.style.borderColor = 'hsl(0, 100%, 66%)';
    inputCVC.style.color = 'hsl(0, 100%, 66%)';
    cvcOnCard.textContent = '';
  } else {
    inputCVC.style.borderColor = 'hsl(249, 99%, 64%)';
    inputCVC.style.color = 'black';
    cvcOnCard.textContent = num;
  }
};
monthOnCardFunc = e => {
  let num = e.target.value;

  if (isNaN(num)) {
    inputMonth.style.borderColor = 'hsl(0, 100%, 66%)';
    inputMonth.style.color = 'hsl(0, 100%, 66%)';
    monthOnCard.textContent = '';
  } else {
    inputMonth.style.borderColor = 'hsl(249, 99%, 64%)';
    inputMonth.style.color = 'black';
    monthOnCard.textContent = num;
  }
};
yearOnCardFunc = e => {
  let num = e.target.value;

  if (isNaN(num)) {
    inputYear.style.borderColor = 'hsl(0, 100%, 66%)';
    inputYear.style.color = 'hsl(0, 100%, 66%)';
    yearOnCard.textContent = '';
  } else {
    inputYear.style.borderColor = 'hsl(249, 99%, 64%)';
    inputYear.style.color = 'black';
    yearOnCard.textContent = '/' + num;
  }
};
