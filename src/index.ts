import { fromEvent } from "rxjs";
import "./styles/typing.scss";

fromEvent(document, "click").subscribe(() => console.log("Clicked!"));

// new Typing(nodes).start();
