import rehypeStringify from "rehype-stringify";
import markdown from "remark-parse";
import markdownToHtml from "remark-rehype";
import { unified } from "unified";

const processMarkdown = (string) => unified()
	.use(markdown)
	.use(markdownToHtml)
	.use(rehypeStringify)
	.process(string)

export default processMarkdown