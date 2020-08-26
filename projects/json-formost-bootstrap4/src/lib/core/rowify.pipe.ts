import { KeyValueChangeRecord, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, Pipe, PipeTransform } from '@angular/core';
import { FormControl } from './controls/form-control';

function makeKeyValuePair<K, V>(key: K, value: V): KeyValue<K, V> {
  return { key: key, value: value };
}

/**
 * A key value pair.
 * Usually used to represent the key value pairs from a Map or Object.
 *
 * @publicApi
 */
export interface KeyValue<K, V> {
  key: K;
  value: V;
}

@Pipe({
  name: 'rowify',
  pure: false
})
export class RowifyPipe implements PipeTransform {
  constructor(private readonly differs: KeyValueDiffers) { }

  private differ!: KeyValueDiffer<any, any>;
  private values: Array<FormControl> = [];

  transform(input: null | { [key: string]: FormControl }): Array<Array<FormControl>> | null {
    if (!input || typeof input !== 'object') {
      return null;
    }

    if (!this.differ) {
      this.differ = this.differs.find(input).create();
    }

    const differChanges: KeyValueChanges<string, FormControl> | null = this.differ.diff(input as any);

    if (differChanges) {
      this.values = [];
      differChanges.forEachItem((r: KeyValueChangeRecord<string, FormControl>) => {
        this.values.push(r.currentValue!);
      });
      this.values.sort(defaultComparator);
    }
    let groupedValues = groupIntoRows(this.values);
    return groupedValues;
  }
}

function groupIntoRows(fcArray: FormControl[]): Array<FormControl[]> {
  let objOfFcArrays: { [key: string]: FormControl[] } =
    fcArray.reduce(function (acc, curVal, curIdx) {
      let key = curVal.$layout && curVal.$layout.row ? `a_${curVal.$layout.row}` : `z_${curIdx}`;
      (acc[key] = acc[key] || []).push(curVal);
      return acc;
    }, {});

  let result: Array<FormControl[]> = [];
  for (var key in objOfFcArrays) {
    result.push(objOfFcArrays[key]);
  }
  // console.info(result);
  return result;
}

function leadZeroes(n: number, zeroes: number = 15): string {
  return n.toLocaleString().padStart(zeroes, "0");
}

export function defaultComparator(a: FormControl, b: FormControl): number {
  // console.info("formostOrder", a.$layout, b.$layout);
  if (a.$layout && b.$layout) {
    const aSortKey = leadZeroes(a.$layout.row || 0) + leadZeroes(a.$layout.col || 0);
    const bSortKey = leadZeroes(b.$layout.row || 0) + leadZeroes(b.$layout.col || 0);
    // console.info("formostOrder", aSortKey, bSortKey);
    return aSortKey.localeCompare(bSortKey);
  }
  return 0;
}