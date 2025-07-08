const button = document.querySelector("button");
const title = document.getElementById("title");
const text = document.getElementById("text");
const adviceApi = new Request("https://api.adviceslip.com/advice");


async function updateAdvice() {
    try {
        const response = await fetch(adviceApi);

        if (!response.ok){
            throw new Error("API wasn't found");
        }

            const advice = await response.json();
            let adviceDisplay = advice.slip.advice;
            let adviceId = `Advice #${advice.slip.id}`;

            title.innerText = adviceId;
            text.innerText = adviceDisplay;

        }catch(error){
    console.error("Something gone wrong", error);
    }
}

button.addEventListener("click", updateAdvice);

updateAdvice();