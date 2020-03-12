//= require_tree .

console.log('log me log')
document.querySelector("#menu").addEventListener('click', function (e) {
    document.querySelector("#menu-grid-1").innerHTML = ''


    const showClippy = document.createElement('div')
    showClippy.classList.add("show-clippy")
    showClippy.innerHTML = "<div><p>It looks like you're trying to click a link. Would you like help?</p><img src=\"images/clippy.gif\"></div>"
    document.querySelector("#menu-grid-1").appendChild(showClippy)
})
