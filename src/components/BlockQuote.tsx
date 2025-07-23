"use client"

import { Blockquote } from "@chakra-ui/react";

export default function BlockQuote() {
    return (
        <Blockquote.Root variant="solid">
            <Blockquote.Content>
                Simplicity is the soul of efficiency.
            </Blockquote.Content>
            <Blockquote.Caption>
                — <cite>Austin Freeman</cite>
            </Blockquote.Caption>
        </Blockquote.Root>
    );
}
