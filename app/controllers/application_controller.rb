class ApplicationController < ActionController::API
  include ActionController::Serialization

  # Needs to be cleaned up with country_names task
  def countries
    @countries = ["Costa Rica", "Eritrea", "Guinea Bissau", "Cambodia", "Turkey", "Chad", "Cyprus", "Samoa", "Cayman Islands", "Slovenia", "Kiribati", "Kuwait", "Jamaica", "Antigua and Barbuda", "Cameroon", "Saudi Arabia", "Cape Verde", "Macedonia", "Bosnia and Herzegovina", "Netherlands", "Gambia", "Nigeria", "Zaire", "Lebanon", "Western Sahara", "Cook Islands", "Bouvet Island", "Tokelau", "Australia", "Bahamas", "Uganda", "Turks and Caicos Islands", "Argentina", "Slovakia", "Belize", "Burkina Faso", "Vatican City State (Holy See)", "Cuba", "Liechtenstein", "Azerbaijan", "Netherlands Antilles", "Brazil", "Mongolia", "Marshall Islands", "Senegal", "East Timor", "Hungary", "San Marino", "Burundi", "Mozambique", "Uzbekistan", "Solomon Islands", "Mexico", "Taiwan", "Sri Lanka", "Palau", "Estonia", "Peru", "Bhutan", "Anguilla", "Isle of Man", "Algeria", "South Sudan", "Central African Republic", "Kyrgyzstan", "Malaysia", "Spain", "Serbia", "South Korea", "Niger", "Jordan", "Belarus", "Zimbabwe", "Djibouti", "Ireland", "Haiti", "Midway Islands", "Malawi", "Iceland", "Nauru", "Dominica", "Congo", "Puerto Rico", "Trinidad and Tobago", "Austria", "Panama", "South Africa", "Monaco", "Somalia", "Heard And Mcdonald Islands", "Poland", "Antarctica", "Kazakstan", "Honduras", "Laos", "Mauritania", "Albania", "Comoros", "Tunisia", "Croatia", "Luxembourg", "Italy", "Sweden", "Unknown", "Niue", "Cocos (Keeling) Islands", "Malta", "India", "Paraguay", "Morocco", "Qatar", "Philippines", "Pitcairn", "Neutral Zone", "Saint Vincent and the Grenadines", "Guadeloupe", "Sudan", "United Arab Emirates", "Tanzania", "Norway", "Bulgaria", "Namibia", "Fiji", "Guatemala", "Svalbard and Jan Mayen Islands", "Libya", "Germany", "Singapore", "Madagascar", "Christmas Island[Australia]", "France", "Iraq", "Colombia", "Japan", "American Samoa", "Faeroe Islands", "Reunion", "Sao Tome and Principe", "Ecuador", "Nepal", "Falkland Islands (Malvinas)", "Viet Nam", "Grenada", "Russia", "Syria", "Denmark", "Kampuchea Democratic", "Bangladesh", "Lithuania", "Yugoslavia", "Swaziland", "Barbados", "Guinea", "Togo", "Dominican Republic", "Egypt", "Zambia", "Maldives", "Suriname", "Sierra Leone", "Bermuda", "United States", "Georgia", "Equatorial Guinea", "Benin", "Angola", "Seychelles", "Nicaragua", "Oman", "Turkmenistan", "Afghanistan", "Czech Republic", "Ghana", "Gibraltar", "Ivory Coast", "Gabon", "Holy See (Vatican)", "Israel", "Chile", "New Zealand", "El Salvador", "Botswana", "French Southern Territories", "Macau", "Finland", "United States Minor Outlying I", "Papua New Guinea", "Johnston Island", "Saint Pierre Et Miquelon", "Thailand", "Latvia", "Serbia and Montenegro", "Venezuela", "Saint Helena", "Burma", "Vanuatu", "Bahrain", "British Indian Ocean Territory", "Micronesia", "Uruguay", "Aruba", "Iran", "Czechoslovakia", "Lesotho", "Ukraine", "Tonga", "British Virgin Islands", "Hong Kong", "French Guiana", "Portugal", "Norfolk Island", "Romania", "Liberia", "Canada", "Palestine", "China", "Moldova", "Tajikistan", "United States Virgin Islands", "Kenya", "Mauritius", "Wake Island", "New Caledonia", "United Kingdom", "Brunei Darussalam", "Saint Kitts and Nevis", "Pakistan", "Armenia", "Greece", "Yemen", "Guam", "Myanmar", "Andorra", "Montserrat", "Greenland", "Switzerland", "Northern Mariana Islands", "Indonesia", "Tuvalu", "Belgium", "Bolivia", "Rwanda", "Mali", "French Polynesia", "Lao", "Guyana", "Korea  Dem.People&#39;s Rep. Of", "Ethiopia", "Korea  Republic Of", "Cote d&#39;Ivoire", "GuineaBissau"]
  end
end
