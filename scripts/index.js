
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    let div = document.getElementsByClassName('phone-container')[0];
    let footer = document.getElementsByClassName('footer')[0];
    
    let darkMode = false;
    
        toggleDarkModeButton.addEventListener('click', () => {
            darkMode = !darkMode;
            if (darkMode) {
                div.style.backgroundColor = '#4F4F4F';
                footer.backgroundColor = '#4F4F4F';
            } else {
                div.style.backgroundColor = '#f0f0f0';
            }
        });


