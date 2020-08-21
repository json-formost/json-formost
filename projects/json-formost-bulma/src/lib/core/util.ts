import { KeyValue } from '@angular/common';
import { FormControl } from './controls/form-control';

function populateInterfaceProperties(target: object, source: object, properties: string[]) {
    const allProps = ['name', 'refid', 'title', 'description', 'help', ...properties];
    for (const prop of allProps) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
        }
    }
}

function leadZeroes(n: number, zeroes: number = 15): string {
    return n.toLocaleString().padStart(zeroes, "0");
}

const keyValueSorters = {
    // Preserve original property order
    originalOrder: (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return 0;
    },

    // If present sort by row and col, otherwise preserve original property order
    formostOrder: (a: KeyValue<number, FormControl>, b: KeyValue<number, FormControl>): number => {
        if (a.value.$layout && b.value.$layout) {
            const aSortKey = leadZeroes(a.value.$layout.row || 0) + leadZeroes(a.value.$layout.col || 0);
            const bSortKey = leadZeroes(b.value.$layout.row || 0) + leadZeroes(b.value.$layout.col || 0);
            return aSortKey.localeCompare(bSortKey);
        }
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
