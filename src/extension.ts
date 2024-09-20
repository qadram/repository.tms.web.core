// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as helpers from 'yeoman-test';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let api = {
		/**
		 * Should return an array with all the items to be shown on the repository 
		 */
		getItems(): Array<any> {
			let result: Array<any> = [];

			//Every item can have extra fields, to prompt the user for additional information
			result.push({
				'id': 'ext-web-app',
				'icon': './assets/images/webapplication.svg',
				'caption': 'TMS WEB Application',
				'description': 'A template to create a new TMS WEB Application to run on the browser.',
				'languages': ['Object Pascal'],
				'platforms': ['WEB'],
				'types': ['Application'],
				'projectname': 'Project1.dproj',
				'fields': [
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-bootstrap-app',
				'icon': './assets/images/webapplication.svg',
				'caption': 'TMS Bootstrap WEB Application',
				'description': 'A template to create a new TMS Bootstrap WEB Application to run on the browser.',
				'languages': ['Object Pascal'],
				'platforms': ['WEB'],
				'types': ['Application'],
				'projectname': 'Project1.dproj',
				'fields': [
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-console-app',
				'icon': './assets/images/consoleapp.svg',
				'caption': 'TMS WEB Console Application',
				'description': 'A template to create a new TMS WEB Application to run on the browser with a console interface.',
				'languages': ['Object Pascal'],
				'platforms': ['WEB'],
				'types': ['Application'],
				'projectname': 'Project1.dproj',
				'fields': [
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-electron-app',
				'icon': './assets/images/electronapp.svg',
				'caption': 'TMS WEB Electron Application',
				'description': 'A template to create a new TMS WEB Electron Application.',
				'languages': ['Object Pascal'],
				'platforms': ['Linux', 'Windows', 'macOS'],
				'types': ['Application'],
				'projectname': 'Project1.dproj',
				'fields': [
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-miletus-app',
				'icon': './assets/images/miletusapp.svg',
				'caption': 'TMS WEB Miletus Application',
				'description': 'A template to create a new TMS WEB Miletus Application.',
				'languages': ['Object Pascal'],
				'platforms': ['Linux', 'Windows', 'macOS'],
				'types': ['Application'],
				'projectname': 'Project1.dproj',
				'fields': [
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});			

			result.push({
				'id': 'ext-pwa-app',
				'icon': './assets/images/pwaapp.svg',
				'caption': 'TMS WEB PWA Application',
				'description': 'A template to create a new TMS Progressive WEB Application to run on the browser or be installed on the operating system.',
				'languages': ['Object Pascal'],
				'platforms': ['WEB'],
				'types': ['Application'],
				'projectname': 'Project1.dproj',
				'fields': [
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-package-app',
				'icon': './assets/images/package.svg',
				'caption': 'TMS WEB Package',
				'description': 'A template to create a new TMS WEB Package to create components that can be installed on the tool palette.',
				'languages': ['Object Pascal'],
				'platforms': ['WEB'],
				'types': ['Package'],
				'projectname': 'Package1.dproj',
				'fields': [
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});			

			result.push({
				'id': 'ext-test-app',
				'icon': './assets/images/testapp.svg',
				'caption': 'TMS WEB Unit Test Application',
				'description': 'A template to create a new TMS WEB Unit Test Application.',
				'languages': ['Object Pascal'],
				'platforms': ['WEB'],
				'types': ['Application'],
				'projectname': 'Project1.dproj',
				'fields': [
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});			

			return (result);
		},
		/**
		 * This function is called when the user executes a repository item
		 * @param id ID of the item to be executed
		 * @param params All parameters gathered on the UI
		 */
		async execute(id: string, params: any): Promise<any> {
			return new Promise<string>((resolve, reject) => {
				let outputpath = params.outputpath;
				let prompts = {};

				prompts =
				{
					type: id,
					projectname: params.projectname,
					gitInit: params.gitInit,
				};

				process.chdir(outputpath);
				let newappfolder = outputpath;
				//@ts-ignore		
				let runcontext = helpers.run(path.join(context.extensionPath, 'node_modules', 'generator-tms-web-core', 'generators', 'app'), { cwd: outputpath }).withPrompts(prompts); // Mock the prompt answers
					
					runcontext.toPromise().then(function () {	
						//@ts-ignore		
						resolve(runcontext.generator.extensionConfig);
					}, (reason) => {
						reject(reason);
					});
			});
		}
	};
	return (api);
}

// this method is called when your extension is deactivated
export function deactivate() { }
