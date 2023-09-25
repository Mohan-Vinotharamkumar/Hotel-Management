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

function callImageBackground()
{
    document.getElementById('btnRight').addEventListener('click',()=>
    {
        const image1 = document.getElementById('imageSlider1');
        document.getElementById('imageSlider1').style.display='none';
        document.getElementById('imageSlider2').style.display='block';
    })
    document.getElementById('btnLeft').addEventListener('click',()=>
    {
        document.getElementById('imageSlider2').style.display='none';
        document.getElementById('imageSlider1').style.display='block';
    })
}

function callBreakfast()
{
    document.getElementById('breakfastBtn').style.backgroundColor='orangered';
    document.getElementById('lunchBtn').style.backgroundColor='#222222'
    document.getElementById('dinnerBtn').style.backgroundColor='#222222';

    document.getElementById('MenuSection1').style.display='block';
    document.getElementById('MenuSection2').style.display='none';
    document.getElementById('MenuSection3').style.display='none';

}   
function callLunch()
{
    document.getElementById('lunchBtn').style.backgroundColor='orangered';

    document.getElementById('breakfastBtn').style.backgroundColor='#222222';
    document.getElementById('dinnerBtn').style.backgroundColor='#222222';

    document.getElementById('MenuSection1').style.display='none';
    document.getElementById('MenuSection2').style.display='block';
    document.getElementById('MenuSection3').style.display='none';


}
function callDinner()
{
    document.getElementById('dinnerBtn').style.backgroundColor='orangered';

    document.getElementById('breakfastBtn').style.backgroundColor='#222222';
    document.getElementById('lunchBtn').style.backgroundColor='#222222';

    document.getElementById('MenuSection1').style.display='none';
    document.getElementById('MenuSection2').style.display='none';
    document.getElementById('MenuSection3').style.display='block';
}

function callComment1()
{
    document.getElementById('customer1').style.display='block';
    document.getElementById('customer2').style.display='none';
    document.getElementById('customer3').style.display='none';
    document.getElementById('customer4').style.display='none';
    document.getElementById('customer5').style.display='none';

}
function callComment2()
{
    document.getElementById('customer1').style.display='none';
    document.getElementById('customer2').style.display='block';
    document.getElementById('customer3').style.display='none';
    document.getElementById('customer4').style.display='none';
    document.getElementById('customer5').style.display='none';
}
function callComment3()
{
    document.getElementById('customer1').style.display='none';
    document.getElementById('customer2').style.display='none';
    document.getElementById('customer3').style.display='block';
    document.getElementById('customer4').style.display='none';
    document.getElementById('customer5').style.display='none';
}
function callComment4()
{
    document.getElementById('customer1').style.display='none';
    document.getElementById('customer2').style.display='none';
    document.getElementById('customer3').style.display='none';
    document.getElementById('customer4').style.display='block';
    document.getElementById('customer5').style.display='none';
}
function callComment5()
{
    document.getElementById('customer1').style.display='none';
    document.getElementById('customer2').style.display='none';
    document.getElementById('customer3').style.display='none';
    document.getElementById('customer4').style.display='none';
    document.getElementById('customer5').style.display='block';
}