const phoneInput = document.getElementById('input');
const saveBtn = document.getElementById('button-save');

saveBtn.addEventListener('click', () => {
  const phoneRegex = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
  const phone = phoneInput.value;
  if (phoneRegex.test(phone)) {
    phoneInput.classList.add('correct');
    saveBtn.classList.add('correct');
    document.location.href = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
  } else {
    phoneInput.classList.add('incorrect');
    phoneInput.value = 'Неправильний номер телефону';
  }
});