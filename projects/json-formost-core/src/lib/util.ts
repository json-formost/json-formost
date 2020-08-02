import { KeyValue } from '@angular/common';

function populateInterfaceProperties(target: object, source: object, properties: string[]) {
    const allProps = ['name', 'refid', 'title', 'description', 'help', ...properties];
    for (const prop of allProps) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
        }
    }
}

const keyValueSorters = {
    // Preserve original property order
    originalOrder: (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return 0;
    },

    // Order by ascending property value
    valueAscOrder: (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return a.value.localeCompare(b.value);
    },

    // Order by descending property key
    keyDescOrder: (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
    }
};

export { populateInterfaceProperties, keyValueSorters };