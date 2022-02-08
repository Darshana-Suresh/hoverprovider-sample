import * as vscode from 'vscode';

export class HoverProvider implements vscode.HoverProvider{
	provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
		//let data = "without_spaces";
		let data ="    with_spaces";
		return new vscode.Hover(new vscode.MarkdownString(data));
	}

}