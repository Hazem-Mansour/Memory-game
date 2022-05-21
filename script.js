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
    
    // call function two times to dublicate images
    createImages();
    createImages();

          // Get all box [images] after they created
    const imagesBoxs =  document.querySelectorAll('.image-box'),
          // Get some sounds
          clickSound = new Audio('sounds/click.wav'),
          correctSound = new Audio('sounds/correct.wav'),
          inCorrectSound = new Audio('sounds/incorrect.wav');

    let selectStatus = false,
        firstImage,
        lastImage;

   imagesBoxs.forEach((box, index) => {
       // change boxs [images] order
        box.style.order = getOrder();

    box.addEventListener('click', (e) => {

        // When select status false
        if (!selectStatus) {

            // Stop correct sound
            stopSound(correctSound);
            // make sound on image boxs clicked
            clickSound.play();
            // get the first selected box [image]
            firstImage = box.querySelector('img');

            // selectedImageOne = box.querySelector('img');

            // make image unclickalbe until check images finish
            box.style.pointerEvents = 'none';
            // show image
            firstImage.classList.add('active');
            // change status
            selectStatus = true;

        } 
        // When select status true
        else if (selectStatus) {
            // make all boxs [images] unclickable for 0.5s
            imagesBoxs.forEach((el) => {
                el.style.pointerEvents = 'none';
            })
            // get the last selected box [image]
            lastImage = box.querySelector('img');
            // show image
            lastImage.classList.add('active');
            // change status
            selectStatus = false;

            setTimeout(() => {
                if (firstImage.src == lastImage.src) {

                // Make correct sound
                correctSound.play();
                // add correct class
                firstImage.parentElement.classList.add('correct');
                lastImage.parentElement.classList.add('correct');

                // reomve active class if boxs [images] not matched
                firstImage.classList.remove('active');
                lastImage.classList.remove('active');
                
                // make all box [image] clickable 
                makeImagesClickable()
                } else {
                // Make in-correct sound
                inCorrectSound.play();
                // reomve active class if boxs [images] not matched
                firstImage.classList.remove('active');
                lastImage.classList.remove('active');
                // make all box [image] clickable  
                makeImagesClickable();
            }
            }, 500)
        }
    })

    });


    function createImages() {
        for (let i = 0; i < images.length; i++) {
            const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');
            const theImage = document.createElement('img');
            theImage.src = images[i].name;
            imageBox.appendChild(theImage)
            imagesWrapper.appendChild(imageBox);
        }
    }

    function getOrder() {
        const randomNumber = Math.floor(Math.random() * 40)
        return randomNumber;
    }

    function makeImagesClickable() {
        imagesBoxs.forEach((el) => {
            if (!el.classList.contains('correct')) {
                el.style.pointerEvents = 'auto';
            }
        })
    }
    
    function stopSound(sound) {
        sound.pause();
        sound.currentTime = 0;
    }