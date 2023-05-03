type INodes = {
    getTextNode: HTMLTextAreaElement | null;
    setTextNode: HTMLDivElement | null;
    startButtonNode: HTMLButtonElement | null;
    errorsNode: HTMLParagraphElement | null;
};

export const nodes: INodes = {
    getTextNode: document.querySelector('textarea#inputText'),
    setTextNode: document.querySelector('div#typingText'),
    startButtonNode: document.querySelector('button#start'),
    errorsNode: document.querySelector('p#errors'),
};
