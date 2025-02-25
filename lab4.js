// Alert Me 
document.getElementById('alertForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Hi ${name}!`);
});

// Color change
let isBlue = true;
document.getElementById('changeColorBtn').addEventListener('click', function () {
    if (isBlue) {
        document.body.style.backgroundColor = 'green';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
    isBlue = !isBlue;
});


document.getElementById('textTesterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const text = document.getElementById('textTester').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(text)) {
        alert('Text contains special characters!');
    } else {
        alert('Text is valid!');
    }
});

// Add Text 
document.getElementById('addTextBtn').addEventListener('click', function () {
    const title = document.getElementById('page-title');
    title.textContent += ' Add Text';
});
