"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverProvider = void 0;
const vscode = require("vscode");
class HoverProvider {
    provideHover(document, position, token) {
        //let data = "without_spaces"; //shows hover contents but with no syntax coloring
        let data = "    with_spaces"; //shows empty hover
        return new vscode.Hover(new vscode.MarkdownString(data));
    }
}
exports.HoverProvider = HoverProvider;
//# sourceMappingURL=HoverProvider.js.map