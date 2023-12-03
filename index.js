let images = document.querySelectorAll("img");
for (var i = 0; i < images.length; i++)
{
    images[i].setAttribute("tabindex", "0");
}
const displayCaption = document.querySelector('#explanation');
const imageCaption = document.querySelector('figcaption');
const allImages = document.querySelectorAll('figure');
const allImgs = document.querySelectorAll('img');

for (var i = 0; i < allImgs.length; i++) {
    allImgs[i].tabIndex = -1;
}

for (var i = 0; i < allImages.length; i++)
{
    allImages[i].addEventListener('mouseover', function()
    {
        console.log("function 1 loaded!");
        displayCaption.textContent = this.querySelector('figcaption').textContent;
    });
    allImages[i].addEventListener('mouseout', function()
    {
        console.log("function 2 loaded!");
        displayCaption.textContent = 'Hi, welcome to my page! Learn some facts about me by hovering over each image below!'
    });
    allImages[i].addEventListener('focus', function()
    {
        console.log("function 3 loaded!");
        displayCaption.textContent = this.querySelector('figcaption').textContent;
    });
    allImages[i].addEventListener('blur', function()
    {
        console.log("function 4 loaded!");
        displayCaption.textContent = 'Hi, welcome to my page! Learn some facts about me by hovering over each image below!'
    });
};