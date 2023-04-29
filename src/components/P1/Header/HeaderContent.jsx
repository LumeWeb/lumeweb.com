import Typewriter from "typewriter-effect";

const HeaderContent = () => {
    var headerStrings = [
            `Access to the web <br /> for the masses`, `An open web for business`, `Web3 for the masses`, `Web3 for you`
        ],
        randomString = headerStrings[Math.floor(Math.random() * headerStrings.length)];
    function lastWord(words) {
        var n = words.split(" ");
        return n[n.length - 1];
    }
    var lastIndex = randomString.lastIndexOf(" ");
    return <div>
        <Typewriter options={
                {cursor: "_"}
            }
            onInit={
                (typewriter) => {
                    typewriter.changeDelay(50).typeString(`${
                        randomString.substring(0, lastIndex)
                    }` + ' ').start();
                    typewriter.typeString(`<span class="text-[color:var(--aquamarine)]">${
                        lastWord(randomString)
                    }</span>`)
                }
            }/></div>;
};

export default HeaderContent;
