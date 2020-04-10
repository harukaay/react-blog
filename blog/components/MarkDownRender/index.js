import { memo } from "react";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

const MarkDownRender = memo(({ markedContent, className }) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer,
    gfm: true,
    pedantic: false,
    snaitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight(code) {
      return hljs.highlightAuto(code).value;
    }
  });
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: marked(markedContent) }}
    ></div>
  );
});
export default MarkDownRender;
