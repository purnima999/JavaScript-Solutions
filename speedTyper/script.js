const mockData = [
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    "as opposed to using 'Content here, content here', making it look like readable English.",
    "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
    "and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    "corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,",
    "similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est,",
    "eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellato",
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
    "so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;",
    "and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best,",
    "every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
    "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    "four",
    "five"
]


const timer = document.getElementById('timer');
const alertMessage = document.getElementById('alertMsg');
const textDisplay = document.getElementById('displayText');
const typedWords = document.getElementById('textArea');
const startButton = document.getElementById('button1');
const goBackButton = document.getElementById('button2');

goBackButton.style.visibility = "hidden";

/*** timer ****/ 
let i = 10
function onTimer() {
    timer.innerText = i;
    i--;
    if (i < 0) {
        alert("Oops! ..your Time has finished");
        goBackButton.style.visibility = "visible";
    } else {
        setTimeout(onTimer, 1000);
    }
}
/***** testArea *****/
typedWords.addEventListener('change', function (e) {
    const data = typedWords.value;
    const dataWithoutSpaces = data.replace(/ /g, "");
    const totalTypedCharLength = dataWithoutSpaces.length;
    const incorrectWords = mockData.filter((x) => x === data?.includes(x));
})

/***** start button ******/
typedWords.disabled = true;
startButton.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typedWords.disabled = false;
        onTimer();
    }
});

startButton.addEventListener('click', function () {
    startButton.style.visibility = "hidden"
    const randomData = mockData[Math.floor(Math.random() * mockData.length)];
    textDisplay.innerHTML = randomData
    console.log("randomData", randomData)
})

/*****  go back button  *******/
goBackButton.addEventListener('click', function () {
    if (this.innerText == 'Back') {
        startButton.style.visibility = " visible";
        typedWords.value = null;
        typedWords.disabled = true;
        goBackButton.style.visibility = "hidden";
        window.location.reload();

    }
})

// textArea 

startButton.addEventListner 