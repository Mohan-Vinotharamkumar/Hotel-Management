function callNav()
{
    const navBar = document.getElementById('nav')
    navBar.style.cssText='height:25rem'; 
    document.getElementById('hambugger').style.display='none';
    document.getElementById('cross').style.display='block';
    document.getElementById('ul').style.cssText='display:flex;flex-direction:column;'

}

function removeNav()
{
    const navBar = document.getElementById('nav')
    navBar.style.cssText='height:4rem'; 
    document.getElementById('cross').style.display='none';
    document.getElementById('hambugger').style.display='block';
    document.getElementById('ul').style.display='none'
}