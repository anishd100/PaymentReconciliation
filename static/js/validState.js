  window.onload = function () {
        document.getElementById('name').focus();
    };

    function validateName() {
        const input = document.getElementById('name');
        const errorMessage = document.getElementById('error-message-name');
        const submitBtn = document.getElementById('submit-btn');
        let value = input.value.replace(/[^a-zA-Z\s]/g, '');
        input.value = value;

        if (value === '') {
            errorMessage.textContent = 'State Name cannot be empty and must contain only letters.';
            submitBtn.style.display = 'block';
        } else {
            errorMessage.textContent = '';
            checkStateExists(value, submitBtn, errorMessage);
        }
    }

    function checkStateExists(stateName, submitBtn, errorMessage) {
        fetch("{{ url_for('check_state') }}", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: "state_Name=" + encodeURIComponent(stateName)
        })
        .then(response => response.json())
        .then(data => {
            if (data.exists) {
                errorMessage.textContent = 'State already exists!';
                submitBtn.style.display = 'none';
            } else {
                errorMessage.textContent = '';
                submitBtn.style.display = 'block';
            }
        })
        .catch(error => console.error('Error:', error));
    }

    function showSuccessAlert(event) {
        const input = document.getElementById('name');
        const errorMessage = document.getElementById('error-message-name');
        const successPopup = document.getElementById('successPopup');

        if (input.value.trim() === '' || errorMessage.textContent !== '') {
            return false;
        }

        successPopup.style.display = 'block';
        setTimeout(() => {
            successPopup.style.display = 'none';
        }, 3000);

        return true;
    }