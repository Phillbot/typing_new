import { Utils } from "./utils";

type INodes = {
  getTextNode: HTMLTextAreaElement;
  setTextNode: HTMLDivElement;
  startButtonNode: HTMLButtonElement;
  errorsNode: HTMLParagraphElement;
};

export class Typing {
  currentIndex: number;
  finalIndex: number;
  errorCount: number;
  textArray: string[];
  getTextNode: HTMLTextAreaElement;
  setTextNode: HTMLDivElement;
  startButtonNode: HTMLButtonElement;
  errorsNode: HTMLParagraphElement;

  constructor(nodes: INodes) {
    this.currentIndex = 0;
    this.finalIndex = 0;
    this.errorCount = 0;

    this.getTextNode = nodes.getTextNode;
    this.setTextNode = nodes.setTextNode;
    this.startButtonNode = nodes.startButtonNode;
    this.errorsNode = nodes.errorsNode;

    this.textArray = [];
  }

  start() {
    this.startButtonNode.onclick = () => {
      const value = this.getTextNode?.value;

      if (!value?.trim()) {
        alert("wtf??");
        return;
      }

      const stringFromTextValue = this.getTextForStart(value);

      this.updateNodesAfterStartPress(stringFromTextValue);
      this.nodesToggleClassNames();
      this.setTextArray(stringFromTextValue);
      this.setFinalIndex();

      Utils.startListen(document, "onkeyup", this.typingListener.bind(this));
    };
  }

  restart() {
    this.getTextNode.value = "";
    this.setTextNode.innerHTML = "";
    this.errorsNode.innerText = "0";

    this.currentIndex = 0;
    this.finalIndex = 0;
    this.errorCount = 0;

    this.textArray = [];

    this.nodesToggleClassNames();
  }

  finish() {
    Utils.stopListen(document, "onkeyup");
    this.restart();
  }

  setTextArray(s: string): void {
    this.textArray = Utils.makeArrayFromString(s);
  }

  getTextForStart(value: string): string {
    const textForStart = Utils.textFormat(value);
    return textForStart;
  }

  updateNodesAfterStartPress(inputText: string) {
    this.getTextNode.value = "";
    this.setTextNode.innerHTML = Utils.makeStringInSpan(inputText, "letter");
  }

  nodesToggleClassNames() {
    Utils.classListToggle(
      [
        this.getTextNode,
        this.setTextNode,
        this.startButtonNode,
        this.errorsNode,
      ],
      "hidden"
    );
  }

  typingListener(event: KeyboardEvent) {
    if (event.key === this.textArray[this.currentIndex]) {
      this.setTextNode.children[this.currentIndex].classList.add(
        "letter-complete"
      );

      this.currentIndex = Utils.increment(this.currentIndex);

      if (Utils.isEqual(this.currentIndex, this.finalIndex)) {
        this.finish();
      }

      return;
    }

    if (event.key === this.textArray[this.currentIndex - 1]) {
      console.log("same");
      return;
    }

    this.errorCount = Utils.increment(this.errorCount);
    this.errorsNode.innerText = String(this.errorCount);
  }

  setFinalIndex() {
    this.finalIndex = Utils.getLength(this.textArray) || 0;
  }
}
