const images = [
    {
        "name": "pics/Bat-icon.png",
        "id": "1",
    },
    {
        "name": "pics/Bear-icon.png",
        "id": "2",
    },
    {
        "name": "pics/Bee-icon.png",
        "id": "3",
    },
    {
        "name": "pics/Bull-icon.png",
        "id": "4",
    },
    {
        "name": "pics/Cat-icon.png",
        "id": "5",
    },
    {
        "name": "pics/Chicken-icon.png",
        "id": "6",
    },
    {
        "name": "pics/Cow-icon.png",
        "id": "7",
    },
    {
        "name": "pics/Crab-icon.png",
        "id": "8",
    },
    {
        "name": "pics/Crocodile-icon.png",
        "id": "9",
    },
    {
        "name": "pics/Deer-icon.png",
        "id": "10",
    },
    {
        "name": "pics/Dolphin-icon.png",
        "id": "11",
    },
    {
        "name": "pics/Eagle-icon.png",
        "id": "12",
    },
    {
        "name": "pics/Elephant-icon.png",
        "id": "13",
    },
    {
        "name": "pics/Giraffe-icon.png",
        "id": "14",
    },
    {
        "name": "pics/Lion-icon.png",
        "id": "15",
    },
    {
        "name": "pics/Rat-icon.png",
        "id": "16",
    },
    {
        "name": "pics/Snail-icon.png",
        "id": "17",
    },
    {
        "name": "pics/Snake-icon.png",
        "id": "18",
    },
    {
        "name": "pics/Turtle-icon.png",
        "id": "19",
    },
    {
        "name": "pics/Whale-icon.png",
        "id": "20",
    },
], 
   imagesWrapper = document.querySelector('.images-wrapper');


    function createImages() {
        for (let i = 0; i < images.length; i++) {
            const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');
            const theImage = document.createElement('img');
            theImage.src = images[i].name;
            imageBox.appendChild(theImage)
            imagesWrapper.appendChild(imageBox);
        }
        for (let i = 0; i < images.length; i++) {
            const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');
            const theImage = document.createElement('img');
            theImage.src = images[i].name;
            imageBox.appendChild(theImage)
            imagesWrapper.appendChild(imageBox);
        }
    }
    createImages();


    // set images position
    const imagesBoxs =  document.querySelectorAll('.image-box');

    let selectStart = false;

    let selectedImageOne,
            selectedImageTwo,
            selectedImageSrcOne,
            selectedImageSrcTwo;

   imagesBoxs.forEach((box, index) => {
        box.style.order = `order: ${getOrder()};`

    box.addEventListener('click', () => {
        
        const clickSound = new Audio('sounds/click.wav');
        clickSound.play();

        if (!selectStart) {
            selectStart = true;
            
            selectedImageSrcOne = box.querySelector('img').src;

            selectedImageOne = box.querySelector('img');

            // make images unclickalbe until check images finish
            box.style.pointerEvents = 'none';

            selectedImageOne.classList.add('active');

        } else if (selectStart) {
            selectStart = false;
            // make images unclickalbe until check images finish
            imagesBoxs.forEach((el) => {
                el.style.pointerEvents = 'none';
            })

            selectedImageTwo = box.querySelector('img');

            selectedImageTwo.classList.add('active');

            selectedImageSrcTwo = box.querySelector('img').src;

            setTimeout(() => {
                if (selectedImageSrcOne == selectedImageSrcTwo) {

                  // if selected images matched, correct class
                  // will be added to make them visable
                  selectedImageOne.classList.add("correct");
                  selectedImageTwo.classList.add("correct");

                  // remove active class [temprary class] &
                  // set pointer-events to default
                  removeClasses();
                } else {

                  // remove active class [temprary class] &
                  // set pointer-events to default
                  removeClasses();
                }
            }, 500)
        }
    })

    });



    function getOrder() {
        // get ranom number to set images boxes order using order property
        const randomNumber = Math.floor(Math.random() * 40)
        return randomNumber;
    }

    function removeClasses() {
        imagesBoxs.forEach((el) => {
            // remove active class [temprary class] &
            // set pointer-events to default
            el.querySelector('img').classList.remove('active');
            el.style.pointerEvents = 'auto';
        })
    }

