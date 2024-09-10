import type {
  Blockquote,
  Code,
  Delete,
  Emphasis,
  FlowContent,
  Heading,
  Image,
  InlineCode,
  InlineMath,
  Link,
  List,
  ListContent,
  ListItem,
  Math,
  Paragraph,
  PhrasingContent,
  Root,
  RowContent,
  StaticPhrasingContent,
  Strong,
  Table,
  TableContent,
  Text,
  ThematicBreak,
} from "./types"

export function text(value: string): Text {
  return {
    type: "text",
    value,
  }
}

export function image(url: string, alt: string, title: string): Image {
  return {
    type: "image",
    url,
    title,
  }
}

export function emphasis(...children: PhrasingContent[]): Emphasis {
  return {
    type: "emphasis",
    children,
  }
}

export function strong(...children: PhrasingContent[]): Strong {
  return {
    type: "strong",
    children,
  }
}

export function inlineCode(value: string): InlineCode {
  return {
    type: "inlineCode",
    value,
  }
}

export function inlineMath(value: string): InlineMath {
  return {
    type: "inlineMath",
    value,
  }
}

export function paragraph(...children: PhrasingContent[]): Paragraph {
  return {
    type: "paragraph",
    children,
  }
}

export function root(...children: FlowContent[]): Root {
  return {
    type: "root",
    children,
  }
}

export function link(url: string, ...children: StaticPhrasingContent[]): Link {
  return {
    type: "link",
    children,
    url,
  }
}

export function thematicBreak(): ThematicBreak {
  return {
    type: "thematicBreak",
  }
}

export function heading(
  depth: 1 | 2 | 3 | 4 | 5 | 6,
  ...children: PhrasingContent[]
): Heading {
  return {
    type: "heading",
    depth,
    children,
  }
}

export function code(value: string, lang: string | undefined): Code {
  return {
    type: "code",
    lang,
    value,
  }
}

export function math(value: string): Math {
  return {
    type: "math",
    value,
  }
}

export function blockquote(...children: FlowContent[]): Blockquote {
  return {
    type: "blockquote",
    children,
  }
}

export function listItem(...children: FlowContent[]): ListItem {
  return {
    type: "listitem",
    children,
  }
}

export function checkedListItem(
  checked: boolean,
  ...children: FlowContent[]
): ListItem {
  return {
    type: "listitem",
    checked,
    children,
  }
}

export function unorderedList(...children: ListContent[]): List {
  return {
    type: "list",
    children,
    ordered: false,
  }
}

export function orderedList(...children: ListContent[]): List {
  return {
    type: "list",
    children,
    start: 0,
    ordered: true,
  }
}

export function strikethrough(...children: PhrasingContent[]): Delete {
  return {
    type: "delete",
    children,
  }
}

export function table(...children: TableContent[]): Table {
  return {
    type: "table",
    children,
  }
}

export function tableRow(...children: RowContent[]): TableContent {
  return {
    type: "tableRow",
    children,
  }
}

export function tableCell(...children: PhrasingContent[]): RowContent {
  return {
    type: "tableCell",
    children,
  }
}
