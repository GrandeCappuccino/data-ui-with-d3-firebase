const form = document.querySelector('form');
const name = document.querySelector('#name');
const parent = document.querySelector('#parent');
const department = document.querySelector('#department');
const formFeedback = document.querySelector('#form-feedback');




//Add documents to the database
form.addEventListener('submit', e => {
    e.preventDefault();

    db.collection('employees').add({
        name: name.value,
        parent: parent.value,
        department: department.value,
    });

    form.reset();
    formFeedback.innerHTML = 'successfully added new employee';

    setTimeout(function(){
        formFeedback.innerHTML = '';
    },2000);
});

