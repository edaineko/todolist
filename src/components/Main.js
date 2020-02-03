window.addEventListener('load', () => {
    const resultList = document.querySelector('.js-result-list');
    const createBtn = document.querySelector('.js-add-btn');
    const valueBtn = document.querySelector('.js-value-todo');
    const isError = document.querySelector('.js-error-mess');
    const removeBtn = document.createElement('button');

    function addRemoveBtn() {
        const resultItem = document.querySelector('.result-item');
        removeBtn.className = 'js-remove-result-item';
        removeBtn.className = 'remove-btn';
        resultItem.append(removeBtn);
    }

    createBtn.addEventListener('click', () => {
        const resultItem = document.createElement('li');
        if (valueBtn.value === '') {
            isError.classList.add('_active');
        } else {
            isError.classList.remove('_active');
            resultItem.className = 'result-item';
            resultItem.innerHTML = valueBtn.value;
            resultList.append(resultItem);
            addRemoveBtn();
            valueBtn.value = '';
        }
    });
    removeBtn.addEventListener('click', () => {
        const findResultItem = document.querySelector('.result-item');
        findResultItem.remove();
    });
});