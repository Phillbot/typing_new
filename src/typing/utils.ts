export class Utils {
    constructor() {}

    static textFormat(text: string): string {
        const updateText = text.replace(/\s+/g, ' ').trim();
        return updateText;
    }

    static classListToggle(nodes: HTMLElement[], className: string) {
        for (let i = 0; i < nodes.length; i++) {
            const el = nodes[i];
            el.classList.toggle(className);
        }
    }

    static makeArrayFromString(s: string): string[] {
        return s.split('');
    }

    static makeStringInSpan(s: string, className: string): string {
        const html = s
            .split('')
            .map((s) => `<span class='${className}'>${s}</span>`)
            .join('');
        return html;
    }

    static startListen(element: any, type: any, method: () => void) {
        element[type] = method;
    }

    static stopListen(element: any, type: any) {
        element[type] = null;
    }

    static increment = (n: number): number => {
        return n + 1;
    };

    static isEqual(first: any, second: any) {
        return Boolean(first === second);
    }

    static getLength(element: string | any[]) {
        return element?.length || null;
    }
}
