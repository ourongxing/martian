import { AppendBlockChildrenParameters } from '@notionhq/client/build/src/api-endpoints';

type Block = AppendBlockChildrenParameters["children"][number];
type RichText = (Block & {
    type: "paragraph";
})["paragraph"]["rich_text"][number];

/** Options common to all methods. */
interface CommonOptions {
    /**
     * Define how to behave when an item exceeds the Notion's request limits.
     * @see https://developers.notion.com/reference/request-limits#limits-for-property-values
     */
    notionLimits?: {
        /**
         * Whether the excess items or characters should be automatically truncated where possible.
         * If set to `false`, the resulting item will not be compliant with Notion's limits.
         * Please note that text will be truncated only if the parser is not able to resolve
         * the issue in any other way.
         */
        truncate?: boolean;
        /** The callback for when an item exceeds Notion's limits. */
        onError?: (err: Error) => void;
    };
}
interface BlocksOptions extends CommonOptions {
    /** Whether to render invalid images as text */
    strictImageUrls?: boolean;
}
interface RichTextOptions extends CommonOptions {
    /**
     * How to behave when a non-inline element is detected:
     * - `ignore` (default): skip to the next element
     * - `throw`: throw an error
     */
    nonInline?: 'ignore' | 'throw';
}

/**
 * Parses Markdown content into Notion Blocks.
 *
 * @param body Any Markdown or GFM content
 * @param options Any additional option
 */
declare function markdownToBlocks(body: string, options?: BlocksOptions): Block[];
/**
 * Parses inline Markdown content into Notion RichText objects.
 * Only supports plain text, italics, bold, strikethrough, inline code, and hyperlinks.
 *
 * @param text any inline Markdown or GFM content
 * @param options Any additional option
 */
declare function markdownToRichText(text: string, options?: RichTextOptions): RichText[];

export { markdownToBlocks, markdownToRichText };
