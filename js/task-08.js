let form = document.querySelector('.login-form');

let user = {};



function submitionFunc(e) {
    e.preventDefault();
    const {
        elements: {
            email,
            password
        }
    } = e.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    } else {
        user.email = email.value;
        user.password = password.value;
        console.log(user);
        e.currentTarget.reset()
    }
}



form.addEventListener('submit', submitionFunc)