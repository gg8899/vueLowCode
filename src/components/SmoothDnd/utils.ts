import type { Ref } from 'vue';

export function validateTagProp(tag?: Ref) {
    if (tag) {
        if (typeof tag === 'string') return true;
        if (typeof tag === 'object') {
            if (['string', 'function', 'object'].indexOf(typeof tag.value) > -1) {
                return true;
            }
        }
        return false;
    }
    return true;
}


export function getTagProps(ctx: any, tagClass?: string) {
    const tag = ctx.$props.tag;
    if (tag) {
        if (typeof tag === 'string') {
            const result: any = { value: tag }
            if (tagClass) {
                result.props = { class: tagClass };
            }
            return result;
        } else if (typeof tag === 'object') {
            const result = { value: tag.value || 'div', props: tag.props || {} }
            if (tagClass) {
                if (result.props.class) {
                    if (Array.isArray(result.props.class)) {
                        result.props.class.push(tagClass)
                    } else {
                        result.props.class = [tagClass, result.props.class]
                    }
                } else {
                    result.props.class = tagClass
                }
            }
            return result
        }
    }
    return { value: 'div' }
}