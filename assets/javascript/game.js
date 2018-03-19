
var wins = 0;
var losses = 0;
var playerScore = 0;
var computerNumber;
var imageOne;
var imageTwo;
var imageThree;
var imageFour;
var overwatch = $("#overwatch");
var playerImage = [];
var numberOptions = [];


function resetNumberImages() {
    playerImage = [
        "assets/images/76-256.png",
        "assets/images/Ana-256.png",
        "assets/images/Bastion-256.png",
        "assets/images/D.VA-256.png",
        "assets/images/Genji-256.png",
        "assets/images/hanzo-256.png",
        "assets/images/Junkrat-256.png",
        "assets/images/Lucio-256.png",
        "assets/images/MCcree-256.png",
        "assets/images/Mei-256.png",
        "assets/images/Merci-256.png",
        "assets/images/Phara-256.png",
        "assets/images/Reaper-256.png",
        "assets/images/Rein-256.png",
        "assets/images/Rod-256.png",
        "assets/images/Simetra-256.png",
        "assets/images/Torb-256.png",
        "assets/images/Tracer-256.png",
        "assets/images/Winston-256.png",
        "assets/images/Zaria-256.png",
        "assets/images/Zen-256.png",
    ];
    numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
};

function gameUpdate() {
    resetNumberImages();
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    imageOne = randomImage();
    imageTwo = randomImage();
    imageThree = randomImage();
    imageFour = randomImage();
    playerScore = 0;

    randomComputerNumber(19,120);
    $("#playerscore").text(playerScore);

    imageOneContent = `<img src=${imageOne} class=imageclick imagevalue=${randomImageNumber()}>`
    imageTwoContent = `<img src=${imageTwo} class=imageclick imagevalue=${randomImageNumber()}>`
    imageThreeContent = `<img src=${imageThree} class=imageclick imagevalue=${randomImageNumber()}>`
    imageFourContent = `<img src=${imageFour} class=imageclick imagevalue=${randomImageNumber()}>`

    $("#imageone").html(imageOneContent);
    $("#imagetwo").html(imageTwoContent);
    $("#imagethree").html(imageThreeContent);
    $("#imagefour").html(imageFourContent);
};

function randomComputerNumber(min,max) {
    computerNumber = Math.floor(Math.random() * 102) + 19;
    $("#compnumber").text("Match This Number : " + computerNumber);
};

function randomImage() {
    var arrayLength = playerImage.length;
    var x = Math.floor(arrayLength * Math.random());
    var ret = playerImage[x];

    playerImage.splice(x, 1);
    return ret;
};

function randomImageNumber() {
    var imageNumber = numberOptions.length;
    var x = Math.floor(imageNumber * Math.random());
    var ret = numberOptions[x];

    numberOptions.splice(x, 1);
    return ret;
};

function checkWinLoss(currentScore, targetScore) {
    if (currentScore === targetScore) {
        wins++;
        gameUpdate();
    } else if (currentScore > targetScore) {
        losses++;
        gameUpdate();
    }
};

document.onload = gameUpdate();

overwatch.on("click", ".imageclick", function() {
    var overwatchValue = ($(this).attr("imagevalue"));
    overwatchValue = parseInt(overwatchValue);
    playerScore += overwatchValue;
    $("#playerscore").text(playerScore);
    checkWinLoss(playerScore, computerNumber);
});
