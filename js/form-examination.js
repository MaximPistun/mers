
const footerForm = document.forms.footer;
const footerFormName = footerForm.name;
const footerFormPhone = footerForm.phone;
const footerFormText = footerForm.text;
const footerFormBtn = footerForm.btn;

const errorTextMain = document.querySelector(".error-text_main")
const errorTextFooter = document.querySelector(".error-text_footer");

const blockLock = document.querySelector('.button-lock__field');
const blockLockTwo = document.querySelector('.button-lock__field_two')

footerFormName.addEventListener("input", function(event) {
    let inputName =  footerFormName.value[0].toUpperCase() + footerFormName.value.slice(1)
    footerFormName.value = inputName;
})

footerFormPhone.addEventListener('keydown', function(event) {
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		(event.keyCode == 65 && event.ctrlKey === true) ||
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		return;
	} else {
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
    
});

footerFormPhone.addEventListener("focus", function(){
    footerFormPhone.value = "+7";
})

footerFormPhone.addEventListener("input", function(){
    if( footerFormPhone.value.length == 12){
        blockLock.classList.remove("button-lock__field_lock")
        footerFormPhone.previousElementSibling.innerHTML = ''
    }else{
        blockLock.classList.add("button-lock__field_lock")
    };
})
blockLock.addEventListener("click", function(){
    if( footerFormPhone.value.length != 12){
        footerFormPhone.previousElementSibling.innerHTML = 'Номер телефона <span class="examinatio">*</span>'
    };
})













