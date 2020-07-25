function showNav()
{
    document.getElementById("content").classList.toggle("show-nav");
    document.getElementById("menu").classList.toggle("change");
}

function showModal()
{
    document.getElementById("modal").style.display="block";
    document.body.style.overflow="hidden";
}
function closeModal()
{
    document.getElementById("modal").style.display="none";
    document.body.style.overflow="auto";
}
function mvalidate()
{
    var numbers = /^[0-9]+$/;
    var contact=document.getElementById("contactNumber");
    if(contact.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Please enter valid number');
        contact.focus();
        return false;
    }
} 