function showComplaintOptions(brand) {
    const complaintTypeDiv = document.getElementById('complaint-type');
    complaintTypeDiv.style.display = 'block';

    // Highlight selected brand button
    const brandButtons = document.querySelectorAll('.brand-btn');
    brandButtons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="showComplaintOptions('${brand}')"]`).classList.add('active');
}

function highlightButton(button) {
    const typeButtons = document.querySelectorAll('.type-btn');
    typeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
