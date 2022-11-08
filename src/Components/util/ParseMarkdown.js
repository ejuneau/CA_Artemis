//parseMarkdown from Prashant Acharya at https://javascript.plainenglish.io/simple-markdown-parser-with-javascript-and-regular-expressions-f0c8d53449a4

export default function ParseMarkdown(string) {
	let parser = new DOMParser();
    let doc = parser.parseFromString(string, 'text/html');
    return doc.body;
}