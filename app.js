var checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        this.classList.toggle('checked');
    });
});

function addLocationProducttoggleDropdown() {
    var dropdownToggle = document.querySelector('.addLocationProduct-toggle');
    dropdownToggle.classList.toggle('open');
}

var dropdownOptions = document.querySelectorAll('.addLocationProduct-option');

dropdownOptions.forEach(function (option) {
    option.addEventListener('click', function () {
        var selectedOptionText = option.textContent;
        var dropdownToggle = document.querySelector('.addLocationProduct-toggle');
        dropdownToggle.textContent = selectedOptionText;
        dropdownToggle.classList.remove('open');
        dropdownToggle.insertAdjacentHTML('beforeend', '<span class="addLocationProduct-arrow"></span>');
    });
});