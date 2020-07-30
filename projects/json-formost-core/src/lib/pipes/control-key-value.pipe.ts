import { Pipe, PipeTransform, KeyValueDiffers, KeyValueDiffer, KeyValueChanges, KeyValueChangeRecord } from '@angular/core';
import { KeyValue } from '@angular/common';

function makeKeyValuePair<K, V>(key: K, value: V): KeyValue<K, V> {
  return { key: key, value: value };
}

@Pipe({
  name: 'controlKeyValue'
})
export class ControlKeyValuePipe implements PipeTransform {
  constructor(private readonly differs: KeyValueDiffers) { }

  private differ!: KeyValueDiffer<any, any>;
  private keyValues: Array<KeyValue<any, any>> = [];

  transform<K, V>(input: null, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): null;
  transform<V>(
    input: { [key: string]: V } | Map<string, V>,
    compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number):
    Array<KeyValue<string, V>>;
  transform<V>(
    input: { [key: string]: V } | Map<string, V> | null,
    compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number):
    Array<KeyValue<string, V>> | null;
  transform<V>(
    input: { [key: number]: V } | Map<number, V>,
    compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number):
    Array<KeyValue<number, V>>;
  transform<V>(
    input: { [key: number]: V } | Map<number, V> | null,
    compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number):
    Array<KeyValue<number, V>> | null;
  transform<K, V>(input: Map<K, V>, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number):
    Array<KeyValue<K, V>>;
  transform<K, V>(
    input: Map<K, V> | null,
    compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): Array<KeyValue<K, V>> | null;
  transform<K, V>(
    input: null | { [key: string]: V, [key: number]: V } | Map<K, V>,
    compareFn: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number = defaultComparator):
    Array<KeyValue<K, V>> | null {
    if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
      return null;
    }

    if (!this.differ) {
      // make a differ for whatever type we've been passed in
      this.differ = this.differs.find(input).create();
    }

    const differChanges: KeyValueChanges<K, V> | null = this.differ.diff(input as any);

    if (differChanges) {
      this.keyValues = [];
      differChanges.forEachItem((r: KeyValueChangeRecord<K, V>) => {
        this.keyValues.push(makeKeyValuePair(r.key, r.currentValue!));
      });
      this.keyValues.sort(compareFn);
    }
    return this.keyValues;
  }
}

export function defaultComparator<K, V>(
  keyValueA: KeyValue<K, V>, keyValueB: KeyValue<K, V>): number {
  // const a = keyValueA.key;
  // const b = keyValueB.key;
  // // if same exit with 0;
  // if (a === b) return 0;
  // // make sure that undefined are at the end of the sort.
  // if (a === undefined) return 1;
  // if (b === undefined) return -1;
  // // make sure that nulls are at the end of the sort.
  // if (a === null) return 1;
  // if (b === null) return -1;
  // if (typeof a == 'string' && typeof b == 'string') {
  //   return a < b ? -1 : 1;
  // }
  // if (typeof a == 'number' && typeof b == 'number') {
  //   return a - b;
  // }
  // if (typeof a == 'boolean' && typeof b == 'boolean') {
  //   return a < b ? -1 : 1;
  // }
  // // `a` and `b` are of different types. Compare their string values.
  // const aString = String(a);
  // const bString = String(b);
  // return aString == bString ? 0 : aString < bString ? -1 : 1;
  return 0;
}