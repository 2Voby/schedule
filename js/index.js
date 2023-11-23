function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}

isWebp();

let data = {
  easy: [
    {
      task: ["2+2*2"],
      image: "img/2+2.png",
      answers: [10, 6, 8, "немає правильної відповіді"],
      rightAnswer: 6,
    },
    {
      task: ["Кавун це:"],
      image: "img/kavun.png",
      answers: ["Овоч ", "Фрукт ", "Ягода", "Банан"],
      rightAnswer: "Ягода",
    },
    {
      task: ["Яка фігура має бути наступною:"],
      image: "img/next-figura.png",
      answers: ["А", "Б", "В", "Г"],
      rightAnswer: "Б",
    },
    {
      task: ["Як називають пса який розміновує міни?"],
      image: "img/pes.png",
      answers: ["пес Патрон", "пес Бімба", "пес Нюхач", "Немає такого пса"],
      rightAnswer: "пес Патрон",
    },
    {
      task: [
        "В кімнаті по кутам сидять коти. Кожен з котів бачить чотирьох котів. Скільки котів в кімнаті?",
      ],
      image: "img/kot.png",
      answers: [20, 4, 5, 7],
      rightAnswer: 5,
    },
    {
      task: ["Як звати найвідомішого поета України?"],
      image: "img/poet.png",
      answers: ["Т.Шевченко", "Л.Українка", "Г.Сковорода", "М.Коцюбинський"],
      rightAnswer: "Т.Шевченко",
    },
    {
      task: ["Яка остання буква алфавіта?"],
      image: "img/bukva.png",
      answers: ["Я", "А", "Ч", "Ц"],
      rightAnswer: "Я",
    },
    {
      task: ["Що змушує яблуко падати на землю?"],
      image: "img/jabloko.jpg",
      answers: [
        "Сила падіння",
        "Сила летіння",
        "Сила тяжіння",
        "Бажання впасти",
      ],
      rightAnswer: "Сила тяжіння",
    },
    {
      task: ["Як звати діючого президента України?"],
      image: "img/president.png",
      answers: [
        "Петро Порошенко",
        "Володимир Великий",
        "Степан Бендера",
        "Володимир Зеленський",
      ],
      rightAnswer: "Володимир Зеленський",
    },
    {
      task: ["Яка столиця України?"],
      image: "img/kyiv.jpg",
      answers: ["Житомир", "Київ", "Харків", "Львів"],
      rightAnswer: "Київ",
    },
    {
      task: ["Який найдовший музичний інструмент в світі?"],
      image: "img/naidovshiy-instrument.png",
      answers: ["Сопілка", "Трембіта", "Гітара", "Рояль"],
      rightAnswer: "Трембіта",
    },
    {
      task: [
        "Якщо опівночі йде дощ, чи можна очікувати, що через 72 години буде сонячна погода?",
      ],
      image: "img/rain.jpg",
      answers: ["Так", "Ні", "Банан ", "50/50"],
      rightAnswer: "Ні",
    },
    {
      task: [
        "У вас є відро об’ємом 5 літрів та відро об’ємом 7 літрів.Скільки у вас відер?",
      ],
      image: "img/vidro.png",
      answers: ["12", "5", "2", "7"],
      rightAnswer: "2",
    },
    {
      task: ["Хто написав пісню “Їде маршрутка”?"],
      image: "img/marshrutka.png",
      answers: ["Калуш", "Ольга Полякова", "Дзідзьо", "Скрябін"],
      rightAnswer: "Скрябін",
    },
    {
      task: ["Якої форми планета Земля?"],
      image: "img/zemlya.jpg",
      answers: ["Паралелепіпед", "Кругла", "Проска", "Тетрадер"],
      rightAnswer: "Кругла",
    },
  ],
  medium: [
    { task: ["2+2*2"], answers: [2, 10, 8, 6], rightAnswer: "6" },
    { task: ["2+4*2"], answers: [2, 10, 8, 6], rightAnswer: "10" },
    { task: ["2+2*9"], answers: [2, 20, 8, 6], rightAnswer: "20" },
    { task: ["2+7*2"], answers: [2, 10, 16, 6], rightAnswer: "16" },
    { task: ["2+6*2"], answers: [14, 10, 8, 6], rightAnswer: "14" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
  ],
  hard: [
    { task: ["2+2*2"], answers: [2, 10, 8, 6], rightAnswer: "6" },
    { task: ["2+4*2"], answers: [2, 10, 8, 6], rightAnswer: "10" },
    { task: ["2+2*9"], answers: [2, 20, 8, 6], rightAnswer: "20" },
    { task: ["2+7*2"], answers: [2, 10, 16, 6], rightAnswer: "16" },
    { task: ["2+6*2"], answers: [14, 10, 8, 6], rightAnswer: "14" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
    { task: ["2+1*2"], answers: [2, 10, 8, 4], rightAnswer: "4" },
  ],
};

let personProgress = 1;
let keysNumber = 0;
let complexityLvl;
gamePageNavigation();
const firstRoot = document.querySelector(".map__root");
firstRoot.style.backgroundColor = "white";
// game navigation
function gamePageNavigation() {
  let header = document.querySelector(".game-header");
  let headerTime = header.querySelector(".game-header__time");
  let headerText = header
    .querySelector(".game-header__logo")
    .querySelector("p").innerHTML;
  let gameBody = document.querySelector(".game-body");
  let firsScreen = document.querySelector(".main-screen");
  let gameLevel = document.querySelector(".game-level");
  let pages = document.querySelectorAll(".page");
  let startGameButton = document.querySelector(".main-screen__start-button");
  let gameMap = document.querySelector(".game-map");
  let openMapButton = document.querySelector(".interface__map");
  let closeMapButton = document.querySelector(".close-map-button");

  // NEW
  let settingsScreen = document.querySelector(".settings");
  let settingsButton = document.querySelector(".help-buttons__button-settings");
  // TURBO NEW
  let quitButtons = document.querySelectorAll(".settings__quit-settings");

  // TURBO NEW
  let aboutScreen = document.querySelector(".about");
  let aboutButton = document.querySelector(".help-buttons__button-questions");

  deleteAllPages();
  // create main page
  gameBody.appendChild(firsScreen);
  location.hash = "#mainscreen";

  // choose page when fors open the game
  if (location.hash == "#mainscreen") {
    deleteAllPages();
    gameBody.appendChild(firsScreen);
    closeMap();
    chooseComplexity();
  } else if (location.hash == "#game") {
    deleteAllPages();
    gameBody.appendChild(gameLevel);
    openMap();
  }

  // show choosed by hach name page
  window.addEventListener("hashchange", function (e) {
    if (location.hash == "#mainscreen") {
      closeMap();
      deleteAllPages();
      gameBody.appendChild(firsScreen);
      chooseComplexity();
    } else if (location.hash == "#game") {
      openMap();
      deleteAllPages();
      gameBody.appendChild(gameLevel);
    } else if (location.hash == "#settings") {
      // NEW
      closeMap();
      deleteAllPages();
      gameBody.appendChild(settingsScreen);
    } else if (location.hash == "#about") {
      // TURBO NEW
      closeMap();
      deleteAllPages();
      gameBody.appendChild(aboutScreen);
    }
  });

  startGameButton.addEventListener("click", startGame);

  // open/scose map in game
  openMapButton.addEventListener("click", openMap);
  closeMapButton.addEventListener("click", closeMap);

  settingsButton.addEventListener("click", goToSettings);
  // TURBO NEW
  quitButtons.forEach((button) => {
    button.addEventListener("click", returnToMenu);
  });

  // TURBO NEW
  aboutButton.addEventListener("click", goToAbout);

  // functions=================================
  function chooseComplexity() {
    let complexityButtons = document.querySelectorAll(".hard-block__button");
    complexityButtons.forEach((button) => {
      button.addEventListener("click", function () {
        clearAllChoosedComplexity();
        // add class to curr complexity lvl
        if (!button.classList.contains("active")) {
          button.classList.add("active");
        }
      });
    });

    function clearAllChoosedComplexity() {
      complexityButtons.forEach((item) => {
        item.classList.remove("active");
      });
    }
  }
  function getSettings() {
    let hardSettingsItems = document.querySelectorAll(".hard-block__button");
    let complexity;
    hardSettingsItems.forEach((item) => {
      if (item.classList.contains("active")) {
        complexity = item.getAttribute("complexity");
      }
    });
    return complexity;
  }
  function openMap() {
    unlockCurrent();
    if (gameMap.classList.contains("game-map-hidden")) {
      gameMap.classList.remove("game-map-hidden");
    }
  }
  function closeMap() {
    if (!gameMap.classList.contains("game-map-hidden")) {
      gameMap.classList.add("game-map-hidden");
    }
  }
  // NEW
  function goToSettings() {
    location.hash = "#settings";
  }
  function goToAbout() {
    location.hash = "#about";
  }
  function returnToMenu() {
    location.hash = "#mainscreen";
  }
  function unlockCurrent() {
    let element = document.querySelectorAll(".question");
    element.forEach((item) => {
      let ItemLvl = item.getAttribute("lvl");
      ItemLvl = +ItemLvl;
      if (ItemLvl == personProgress) {
        if (item.classList.contains("locked")) {
          item.classList.remove("locked");
        }
      }
    });
  }
  function startGame() {
    // open page
    location.hash = "#game";
    complexityLvl = getSettings();

    let levelsData = data.easy;
    if (complexityLvl == "easy") {
      levelsData = data.easy;
    } else if (complexityLvl == "medium") {
      levelsData = data.medium;
    } else if (complexityLvl == "hard") {
      levelsData = data.hard;
    }
    setQuestions();
    // openLevelContent();
    lockLvl();
    chooseLevel();
    // functions

    function chooseLevel() {
      let element = document.querySelectorAll(".question");
      element.forEach((item) => {
        item.addEventListener("click", function () {
          if (item.getAttribute("lvl") > personProgress) {
            console.log("pass all past levels");
          } else if (item.getAttribute("lvl") == personProgress) {
            openLevelContent(item);
          } else if (item.getAttribute("lvl") < personProgress) {
            console.log("you have already passed this level");
          }
        });
      });
    }

    function openLevelContent(levelItem) {
      // create level when click the level button
      closeMap();
      let gameLevelTitle = gameLevel.querySelector(".game-level__title");
      let gameLevelImg = gameLevel
        .querySelector(".game-level__image")
        .querySelector("img");
      let gameLevelQuestionsOptions = gameLevel.querySelectorAll(
        ".game-level__answer-option"
      );
      let answersBody = document.querySelector(".game-level__answers-block");
      // reset all items
      gameLevelQuestionsOptions.forEach((item) => {
        item.remove();
      });
      gameLevelTitle.innerHTML = "";
      gameLevelImg.setAttribute("src", "");
      // create elements with answers
      let levelCount = levelItem.getAttribute("numinarr");
      levelCount = +levelCount; // strting to int
      let correctAnswer = levelsData[levelCount].rightAnswer;

      levelsData[levelCount].answers.forEach((item) => {
        let answerOption = document.createElement("div");
        answerOption.classList.add("game-level__answer-option");
        answerOption.innerHTML = item;
        answersBody.appendChild(answerOption);
      });
      gameLevelTitle.innerHTML = levelsData[levelCount].task;
      let gameLevelImgSrc = levelsData[levelCount].image;
      gameLevelImg.setAttribute("src", gameLevelImgSrc);
      chooseAnswer(levelCount, correctAnswer, gameLevel, levelItem);
      levelCount = 0;
      correctAnswer = "";
    }

    function setQuestions() {
      let mapItems = document.querySelectorAll(".game-map__item");
      let usedItems = [];
      let questionItems = document.querySelectorAll(".question");
      questionItems.forEach((questItem) => {
        setNumber(questItem, usedItems, questionItems.length);
      });
    }
    function setNumber(element, arrOfUsedItems, numOfItems) {
      let randomNumber = Math.round(Math.random() * 14);
      if (
        !arrOfUsedItems.includes(randomNumber) &&
        element.numinarr !== randomNumber
      ) {
        arrOfUsedItems.push(randomNumber);

        element.setAttribute("numInArr", randomNumber);
      } else setNumber(element, arrOfUsedItems, 14);
    }
  }

  function deleteAllPages() {
    pages.forEach((page) => {
      page.remove();
    });
  }
  function chooseAnswer(num, correctAnswer, gameLevel, elementOnMap) {
    let gameLevelQuestionsOptions = gameLevel.querySelectorAll(
      ".game-level__answer-option"
    );
    let tryCounter = 0;
    gameLevelQuestionsOptions.forEach((item, i) => {
      item.addEventListener("click", checkAnswer);
      function checkAnswer() {
        if (this.innerText == correctAnswer) {
          if (elementOnMap.classList.contains("game-item-key")) {
            if (!elementOnMap.classList.contains("passed")) {
              elementOnMap.classList.add("passed");
            }
            personProgress++;
            gameLevelQuestionsOptions.forEach((item) => {
              item.removeEventListener("click", checkAnswer);
            });
            collectKey();
            openCorrectAnswerPopup();
          } else if (
            elementOnMap.classList.contains("lvl") &&
            !elementOnMap.classList.contains("game-item-key")
          ) {
            if (!elementOnMap.classList.contains("passed")) {
              elementOnMap.classList.add("passed");
            }
            personProgress++;
            gameLevelQuestionsOptions.forEach((item) => {
              item.removeEventListener("click", checkAnswer);
            });
            openCorrectAnswerPopup();
          }
        } else {
          if (complexityLvl == "easy") {
            tryCounter++;
            console.log("неправильна відповідь");
            openIncorrectAnswerPopup("Неправильна відповідь", false);

            if (tryCounter >= 2) {
              openIncorrectAnswerPopup();
            }
          } else {
            tryCounter++;
            openIncorrectAnswerPopup();
            console.log("неправильна відповідь");
          }
        }
      }
    });
  }

  function collectKey() {
    keysNumber++;

    let inventory = document.querySelector(".inventory");
    let inventoryItems = document.querySelectorAll(".inventory__item");

    for (let i = 0; i < inventoryItems.length; i++) {
      let thisItem = inventoryItems[i];
      if (!thisItem.classList.contains("filled")) {
        let keyItem = document.createElement("div");
        keyItem.classList.add("key-img");
        let keyItemImg = document.createElement("img");
        keyItemImg.setAttribute("src", "/img/key.svg");
        keyItem.appendChild(keyItemImg);
        thisItem.appendChild(keyItem);
        thisItem.classList.add("filled");
        break;
      }
    }

    checkWin();
  }

  function checkWin() {
    if (keysNumber >= 4 && personProgress >= 14) {
      // animation of win
      let LocksArr = document.querySelectorAll(".game-item-lock");
      LocksArr.forEach((item) => {
        item.classList.add("win-animation");
        let animationDuration = "animation-diration";
        item.style.animationDuration = Math.random() + "s";
        setTimeout(openLocks, 3500);
        function openLocks() {
          item.classList.remove("win-animation");
          item.querySelector("img").setAttribute("src", "img/lock2.png");
        }
        setTimeout(bossAnimation, 3600);
        function bossAnimation() {
          let boss = document.querySelector(".game-item-finally-boss");
          boss.classList.add("win-animation");
          setTimeout(bossAnimation2, 2700);
          function bossAnimation2() {
            boss.classList.remove("win-animation");
            boss.classList.add("win-animation-2");
            setTimeout(winGame, 1000);
          }
        }
      });
    }
  }

  function highlightRoots() {
    const roots = document.querySelectorAll(".map__root");
    if (!roots[personProgress - 1].classList.contains("map__root-completed")) {
      roots[personProgress - 1].classList.add("map__root-completed");
    }
    if (personProgress === 15) {
      roots.forEach((root) => {
        if (!root.classList.contains("map__root-completed"))
          root.classList.add("map__root-completed");
      });
    }
  }

  function openCorrectAnswerPopup() {
    let gameLevelPopup = document.querySelector(".game-level__popup-wrapper");
    let gameLevelPopupBody = document.querySelector(".game-level__popup");
    let gameLevelPopupTitle = gameLevelPopup.querySelector(
      ".game-level__popup-title"
    );

    //create button
    let gameLevelPopupButton = document.createElement("a");
    gameLevelPopupButton.classList.add(
      "game-level__popup-button",
      "game-level-win"
    );
    gameLevelPopupButton.innerHTML = "Move on";
    gameLevelPopupBody.appendChild(gameLevelPopupButton);

    // add text to popup
    gameLevelPopupTitle.innerHTML = "Овва, ти обрав правильну відповідь!";

    // open popup
    if (gameLevelPopup.classList.contains("game-level__popup-hidden")) {
      gameLevelPopup.classList.remove("game-level__popup-hidden");
    }
    // click the button
    gameLevelPopupButton.onclick = () => {
      openMap();
      closeLevelPopup();
    };
    highlightRoots();
  }

  function openIncorrectAnswerPopup(handleText = null, closeGame = true) {
    let gameLevelPopup = document.querySelector(".game-level__popup-wrapper");
    let gameLevelPopupBody = document.querySelector(".game-level__popup");
    let gameLevelPopupTitle = gameLevelPopup.querySelector(
      ".game-level__popup-title"
    );

    // remove old buttons
    let existingButtons = gameLevelPopupBody.querySelectorAll(
      ".game-level__popup-button"
    );
    existingButtons.forEach((button) => {
      if (button) {
        button.remove();
      }
    });

    //create button
    let gameLevelPopupButton = document.createElement("a");
    gameLevelPopupButton.classList.add(
      "game-level__popup-button",
      "game-level-lose"
    );
    gameLevelPopupButton.innerHTML = "Start over";
    gameLevelPopupBody.appendChild(gameLevelPopupButton);
    gameLevelPopupTitle.innerHTML = "ХЕ-хе-хе, в тебе не вийшло мене взламати";

    // add text to popup
    if (handleText) {
      gameLevelPopupTitle.innerHTML = handleText;
    }

    // open popup
    if (gameLevelPopup.classList.contains("game-level__popup-hidden")) {
      gameLevelPopup.classList.remove("game-level__popup-hidden");
    }
    // click the button
    if (closeGame) {
      gameLevelPopupButton.onclick = () => {
        resetGame();
        closeLevelPopup();
      };
    } else if (!closeGame) {
      gameLevelPopupButton.onclick = () => {
        closeLevelPopup();
      };
    }
  }
}
function lockLvl() {
  let element = document.querySelectorAll(".question");
  element.forEach((item) => {
    item.classList.add("locked");
    if (item.classList.contains("passed")) {
      item.classList.remove("passed");
    }
  });
}
function closeLevelPopup() {
  let gameLevelPopup = document.querySelector(".game-level__popup-wrapper");
  let gameLevelPopupBody = document.querySelector(".game-level__popup");
  let gameLevelPopupTitle = gameLevelPopup.querySelector(
    ".game-level__popup-title"
  );
  let gameLevelPopupButton = document.querySelector(
    ".game-level__popup-button"
  );
  gameLevelPopupTitle.innerHTML = "";
  if (gameLevelPopupButton) {
    gameLevelPopupButton.remove();
  }
  if (!gameLevelPopup.classList.contains("game-level__popup-hidden")) {
    gameLevelPopup.classList.add("game-level__popup-hidden");
  }
}
function openWinGamePopup() {
  let gameLevelPopup = document.querySelector(".game-level__popup-wrapper");
  let gameLevelPopupBody = document.querySelector(".game-level__popup");
  let gameLevelPopupTitle = gameLevelPopup.querySelector(
    ".game-level__popup-title"
  );
  // delete button
  let button = document.querySelectorAll(".game-level__popup-button");
  if (button) {
    button.forEach((item) => {
      item.remove();
    });
  }

  //create button
  let gameLevelPopupButton = document.createElement("a");
  gameLevelPopupButton.classList.add(
    "game-level__popup-button",
    "game-level-lose"
  );
  gameLevelPopupButton.innerHTML = "Back to menu";
  gameLevelPopupBody.appendChild(gameLevelPopupButton);

  // add text to popup
  gameLevelPopupTitle.innerHTML =
    "Добре, добре, всеж-таки ти - справжній Хакер";

  // open popup
  if (gameLevelPopup.classList.contains("game-level__popup-hidden")) {
    gameLevelPopup.classList.remove("game-level__popup-hidden");
  }
  // click the button
  gameLevelPopupButton.onclick = () => {
    closeLevelPopup();
    resetGame();
  };
}

function winGame() {
  openWinGamePopup();
}

function resetGame() {
  personProgress = 1;
  keysNumber = 0;
  location.hash = "#mainscreen";
  // reset inventory
  let inventoryCells = document.querySelectorAll(".inventory__item");
  if (inventoryCells) {
    inventoryCells.forEach((item) => {
      if (item.classList.contains("filled")) {
        item.classList.remove("filled");
      }
    });
  }
  let inventoryItems = document.querySelectorAll(".key-img");
  if (inventoryItems) {
    inventoryItems.forEach((item) => {
      item.remove();
    });
  }
  // lock lvls
  lockLvl();
  // remove class frome the boss
  let boss = document.querySelector(".game-item-finally-boss");
  if (boss) {
    if (boss.classList.contains("win-animation-2")) {
      boss.classList.remove("win-animation-2");
    }
  }
  // reset locks
  let LocksArr = document.querySelectorAll(".game-item-lock");
  if (LocksArr) {
    LocksArr.forEach((item) => {
      let itemImg = item.querySelector("img");
      itemImg.setAttribute("src", "img/lock.png");
    });
  }
  // reset roots
  let rootsItems = document.querySelectorAll(".map__root");
  if (rootsItems) {
    rootsItems.forEach((item) => {
      if (item.classList.contains("map__root-completed")) {
        item.classList.remove("map__root-completed");
      }
    });
  }
  // reset game page
  let gamePage = document.querySelector(".game-body__game-level");
  if (gamePage) {
    let title = gamePage.querySelector(".game-level__title");
    let image = gamePage.querySelector(".game-level__title img");
    let answersBlock = gamePage.querySelector(".game-level__answers-block");
    if (title) {
      title.innerHTML = "";
    }
    if (image) {
      image.src = "";
    }
    if (answersBlock) {
      answersBlock.innerHTML = "";
    }
  }
}

// NEW ===============================================================
// music

const menuMusic = new Audio("files/music/menu.mp3");
const levelMusic = new Audio("files/music/level.mp3");

menuMusic.loop = true;
levelMusic.loop = true;

let clicked = false;

// browser blocks autoplay so you need to click anywhere first

document.addEventListener("click", (event) => {
  if (!clicked) {
    menuMusic.play();
    clicked = true;
  }
});

// changing track on screen changing

let isVolumeInputGot = false;

window.addEventListener("hashchange", function (e) {
  if (location.hash == "#mainscreen") {
    menuMusic.play();
    levelMusic.pause();
  } else if (location.hash == "#game") {
    levelMusic.play();
    menuMusic.pause();
  } else if (location.hash == "#about") {
    // TURBO NEW
    // without empty block it redirects to settings
  } else if ((this.location.hash = "#settings")) {
    if (!isVolumeInputGot) {
      getVolumeInput();
    }
    isVolumeInputGot = true;
  }
});

function getVolumeInput() {
  const volumeInput = document.querySelector(".settings__volume input");
  volumeInput.addEventListener("input", (e) => {
    menuMusic.volume = e.target.value / 100;
    levelMusic.volume = e.target.value / 100;
  });
}
