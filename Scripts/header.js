function fetchHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerContainer').innerHTML = data;
            const headerElement = document.querySelector('.header');
            // Perform further operations with the headerElement if required
        })
        .catch(error => {
            console.error('Error fetching header:', error);
        });
}

document.addEventListener('DOMContentLoaded', fetchHeader);

