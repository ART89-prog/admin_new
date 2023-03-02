// Make sure to place this snippet in the footer or at least after
// the HTML input we're targeting.
$(document).ready(function() {
    var phoneInputID = "#phone";
    var input = document.querySelector(phoneInputID);
    var iti = window.intlTelInput(input, {
        // allowDropdown: false,
         autoHideDialCode: false,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        formatOnDisplay: true,
        // geoIpLookup: function(callback) {
        //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        //     var countryCode = (resp && resp.country) ? resp.country : "";
        //     callback(countryCode);
        //   });
        // },
        hiddenInput: "full_number",
        // initialCountry: "auto",
        localizedCountries: { 'ru': 'Россия' },
         nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        placeholderNumberType: "MOBILE",
        preferredCountries: ['ru'],
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
    /*$(phoneInputID).on("countrychange", function(event) {
        var selectedCountryData = iti.getSelectedCountryData();
        let s = intlTelInputUtils.numberType;
        newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberType.MOBILE),          
            iti.setNumber("");

        let number_mask = libphonenumber.parsePhoneNumber(newPlaceholder, selectedCountryData.iso2.toUpperCase());  
        mask = newPlaceholder.replace(/[1-9]/g, "0");       
        $(this).mask(number_mask.format('NATIONAL', {nationalPrefix: false}).replace(/[1-9]/g, "0"));
    });
    
    iti.promise.then(function() {
        $(phoneInputID).trigger("countrychange");
    });*/
});