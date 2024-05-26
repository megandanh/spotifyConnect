document.querySelector("#showLogin").addEventListener("click", function(){
    document.querySelector(".loginPopup").classList.add("active");
});
document.querySelector(".loginPopup .close").addEventListener("click", function(){
    document.querySelector(".loginPopup").classList.remove("active");
})
