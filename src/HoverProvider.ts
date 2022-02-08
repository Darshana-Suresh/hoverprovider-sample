import * as vscode from 'vscode';

export class HoverProvider implements vscode.HoverProvider{
	provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
		//let data = "without_spaces"; //shows hover contents but with no syntax coloring
		let data ="    with_spaces"; //shows empty hover
		return new vscode.Hover(new vscode.MarkdownString(data));
	}

}