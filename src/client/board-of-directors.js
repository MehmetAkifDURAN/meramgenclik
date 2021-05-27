function showPersonInfo() {
    var showPerson = document.getElementById("person");
    showPerson.className = showPerson.className.replace(" none", "");
    showPerson.className += " person-info-box";
}
function fadePersonInfo(){
    var fadePerson = document.getElementById("person");
    fadePerson.className = fadePerson.className.replace(" person-info-box", "");
    fadePerson.className += " none";
}