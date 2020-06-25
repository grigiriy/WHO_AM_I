let searchForm = document.getElementById('searchForm'),
    subscriptionForm = document.getElementById('subsForm');

if (searchForm.length) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let searchInput = searchForm.querySelector('input[name="q"]');

        searchInput.classList.remove('error');

        if (searchInput.value.length === 0) {
            searchInput.classList.add('error');

            return false;
        }

        searchForm.submit();
    });
}
if (subscriptionForm.length) {
    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let subscriptionInput = subscriptionForm.querySelector('input[name="subs_email"]');

        subscriptionInput.classList.remove('error');

        if (subscriptionInput.value.length === 0 || !validateEmail(subscriptionInput.value)) {
            subscriptionInput.classList.add('error');

            return false;
        }

        subscriptionForm.submit();
    });
}