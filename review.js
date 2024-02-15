
const textArea = document.getElementById('text-area');
const submitBtn = document.getElementById('submitBtn');
const review = document.getElementById('review');


submitBtn.addEventListener('click', function (e) {
    const text = textArea.value;
    const li = document.createElement('li')
    li.innerText = text

    const a = document.createElement('a');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt');

    a.appendChild(icon);
    li.appendChild(a);

    review.appendChild(li);
    textArea.value = "";
})





