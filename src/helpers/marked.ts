import marked from "marked";
import Hljs from "highlight.js";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code: string, lang: string) {
    if (lang) return Hljs.highlight(code, lang).value;
    else return Hljs.highlightAuto(code).value;
  },

  headerIds: true,
  headerPrefix: "",
  langPrefix: "language-",
  mangle: true,
  silent: false,
  xhtml: false,
});

const renderer = new marked.Renderer();

const paragraphParse = (text: string) => `<p>${text}</p>`;

const linkParse = (href: string, title: string, text: string) => {
  return `<a href=${href}
      title=${title || href}
      target='_blank'
      }>${text}</a>`;
};

renderer.paragraph = paragraphParse;
renderer.link = linkParse;

const markedFunction = (content: string) => {
  if (typeof content !== "string") return "";

  return marked(content, { renderer });
};

export default markedFunction;
