import {TStatus} from "../../interfaces";
import {Tag, TagLabel} from "@chakra-ui/react";
import * as React from "react";

const STATUS_MAP: Record<TStatus, string> = {
    NEW: 'Ready to wear',
    PROCESSING: 'in progress',
    DONE: 'Done',
    REJECTED: 'refused'
}

const STATUS_COLOR_MAP: Record<TStatus, string> = {
    NEW: '#B89DDA',
    PROCESSING: '#8E8B94',
    DONE: '#A0DA9D',
    REJECTED: '#D63155'
}

export function TicketStatus({status}: { status: TStatus }) {
    const text = STATUS_MAP[status];
    const bg = STATUS_COLOR_MAP[status]
    return (
        <Tag height={'32px'} bg={bg} color={'white'} borderRadius={'200px'}>
            <TagLabel letterSpacing={'0.04em'} fontWeight={'bold'} fontSize={'11px'}
                      textTransform={'uppercase'}>{text}</TagLabel>
        </Tag>
    )
}