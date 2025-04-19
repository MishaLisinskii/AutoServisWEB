// Get Elements==============
const popular = document.querySelector('#popular');
const latest = document.querySelector('#latest');
const favorites = document.querySelector('#favorites');
const popularBlog = document.querySelectorAll('.Popular');
const latestBlog = document.querySelectorAll('.Latest');
const noFavoritesText = document.querySelector('.blog article')
const slider = document.querySelector('.slider-reviews');
const buttonMoveLeftSlider = document.querySelector('#buttonLeft');
const buttonMoveRightSlider = document.querySelector('#buttonRight');
const questionBlock = document.querySelectorAll('.question');
const buttonPlayVideo = document.querySelector('#playVideo');
const video = document.querySelector('.videoFrame');
const closeButton = document.querySelector('.videoFrame > p');

// Create a New Element and use it==============
const newEelement = document.createElement('p');
newEelement.textContent = "You don't have any favorites";
newEelement.classList.add('newElementP');

// Varible for Slider
let translateValue = null;
let totalSlides = 4;
let selectSlide = 1;
// Varible for Chek-box Button
let totalChexBoxButton = 4;
let selectChexBoxButton = 1;
let countIdChexBox = 1;


// Create a New Function==============
const elementEach = (el, argument) =>{
    el.forEach((el)=>{
        el.style.display = `${argument}`;
    })
}

const classAdd = (el, className) =>{
    el.classList.add(`${className}`);
}
const classRemove = (el, className) => {
    el.classList.remove(`${className}`);
}

const moveSliderRight = ()=>{
    selectSlide = (selectSlide % totalSlides) + 1;
    translateValue = (selectSlide - 1) * -25 + '%';
}
const moveSliderLeft = ()=>{
    selectSlide = (selectSlide - 2 + totalSlides) % totalSlides + 1;
    translateValue = (selectSlide - 1) * -25 + '%';
}

const chexBoxMoveRight = ()=>{
    document.querySelector(`#r${selectChexBoxButton}`).checked = false;
    selectChexBoxButton = (selectChexBoxButton % totalChexBoxButton) + 1 
    document.querySelector(`#r${selectChexBoxButton}`).checked = true;
}
const chexBoxMoveLeft = ()=>{
    document.querySelector(`#r${selectChexBoxButton}`).checked = false;
    selectChexBoxButton = (selectChexBoxButton - 2 + totalChexBoxButton) % totalChexBoxButton + 1;
    document.querySelector(`#r${selectChexBoxButton}`).checked = true;
}

const options = (value1, value2, value3)=>{
    selectChexBoxButton = value1;
    selectSlide = value2;
    translateValue = value3;
}

const classListOptions = (elem, className, value)=>{
    if(!value){
        elem.classList.add(`${className}`);
    }
    if(value){
        elem.classList.remove(`${className}`);
    }
}

// Event Listener==============
// Select Blog Navigetion
popular.addEventListener('click',()=>{
    let popularClick = popular.dataset.clickedPopular === 'true';
    if(!popularClick){
        newEelement.remove();
        classAdd(popular, 'activeLi');
        classRemove(latest,'activeLi');
        classRemove(favorites, 'activeLi')
        elementEach(latestBlog, 'none');
        elementEach(popularBlog, 'inline-block');
        latest.dataset.clickedLatest = 'false';
        favorites.dataset.clickedFavorite = 'false';
        popular.dataset.clickedPopular = 'true';
    }
    if(popularClick){
        elementEach(latestBlog,'inline-block');
        classRemove(popular, 'activeLi');
        popular.dataset.clickedPopular = 'false';
    }
})
latest.addEventListener('click',()=>{
    let latestClick = latest.dataset.clickedLatest === 'true';
    if(!latestClick){
        newEelement.remove();
        elementEach(popularBlog,'none');
        classRemove(popular,'activeLi');
        classRemove(favorites, 'activeLi')
        classAdd(latest, 'activeLi')
        elementEach(latestBlog, 'inline-block')
        popular.dataset.clickedPopular = 'false';
        favorites.dataset.clickedFavorite = 'false';
        latest.dataset.clickedLatest = 'true';
    }
    if(latestClick){
        elementEach(popularBlog,'inline-block');
        classRemove(latest, 'activeLi');
        latest.dataset.clickedLatest = 'false';
    }
})
favorites.addEventListener('click',()=>{
    let favoritesClick = favorites.dataset.clickedFavorite === 'true';
    if(!favoritesClick){
        noFavoritesText.append(newEelement);
        elementEach(popularBlog, 'none');
        elementEach(latestBlog, 'none');
        classRemove(popular,'activeLi');
        classRemove(latest,'activeLi');
        classAdd(favorites, 'activeLi')
        popular.dataset.clickedPopular = 'false';
        latest.dataset.clickedLatest = 'false';
        favorites.dataset.clickedFavorite = 'true';
    }
    if(favoritesClick){
        newEelement.remove();
        elementEach(popularBlog, 'inline-block');
        elementEach(latestBlog, 'inline-block');
        classRemove(favorites, 'activeLi');
        favorites.dataset.clickedFavorite = 'false';
    }
})

// Button Next and prev Slider
buttonMoveRightSlider.addEventListener('click',()=>{
    moveSliderRight();
    chexBoxMoveRight();
    slider.style.transform = `translateX(${translateValue})`;
    slider.style.transition = 'all 1s ease';
})
buttonMoveLeftSlider.addEventListener('click', ()=>{
    moveSliderLeft();
    chexBoxMoveLeft();
    slider.style.transform = `translateX(${translateValue})`;
    slider.style.transition = 'all 1s ease';
})
// LabelButton for Slider
const radio1 = document.querySelector('#r1');
radio1.addEventListener('click', ()=>{
    options(1, 1, '0%');
    slider.style.transform = `translateX(${translateValue})`;
    slider.style.transition = 'all 1s ease';
})
const radio2 = document.querySelector('#r2');
radio2.addEventListener('click', ()=>{
    options(2,2,'-25%')
    slider.style.transform = `translateX(${translateValue})`;
    slider.style.transition = 'all 1s ease';
})
const radio3 = document.querySelector('#r3');
radio3.addEventListener('click', ()=>{
    options(3,3,'-50%');
    slider.style.transform = `translateX(${translateValue})`;
    slider.style.transition = 'all 1s ease';
})
const radio4 = document.querySelector('#r4');
radio4.addEventListener('click', ()=>{
    options(4,4,'-75%');
    slider.style.transform = `translateX(${translateValue})`;
    slider.style.transition = 'all 1s ease';
})
// Options for section AnswerAndQuestions
questionBlock.forEach((el)=>{
    el.addEventListener('click',()=>{
        const clickQuestion = el.dataset.clickQuestion === 'true';
        const questionBlockElement =  el;
        const pElement = questionBlockElement.querySelector('p');
        const firstImage = questionBlockElement.querySelector('button > img:first-child');
        const twoImage = questionBlockElement.querySelector('button > img:last-child');
        if(!clickQuestion){
            pElement.style.display = 'inline-block';
            classListOptions(firstImage, 'fVectorReverse',true);
            classListOptions(twoImage, 'tVectorReverse',true);
            requestAnimationFrame(()=>{
                classListOptions(firstImage, 'fVectorNormal',false);
                classListOptions(twoImage, 'tVectorNormal',false);
            })
            requestAnimationFrame(()=>{
                pElement.style.paddingTop = '2.5em';
            })
            el.dataset.clickQuestion = 'true';
        }
        if(clickQuestion){
            classListOptions(firstImage, 'fVectorNormal',true);
            classListOptions(twoImage, 'tVectorNormal',true);
            requestAnimationFrame(()=>{
                classListOptions(firstImage, 'fVectorReverse',false);
                classListOptions(twoImage, 'tVectorReverse',false);
            })
            pElement.style.paddingTop = '0';
            setTimeout(()=>{
                pElement.style.display = 'none';
            },1000)
            el.dataset.clickQuestion = 'false';
        }
    })
})

buttonPlayVideo.addEventListener('click',()=>{
    video.style.display = 'flex';
    requestAnimationFrame(()=>{
        video.style.transform = 'translate(0%)';
    })
})
closeButton.addEventListener('click',()=>{
    requestAnimationFrame(()=>{
        video.style.transform = 'translate(-125%)';
    })
    setTimeout(()=>{
        video.style.display = 'none';
    },1000)
})