/*
  1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui
  2. Sukurkite sąrašo klasę List.
    * Klasė turi privačias turėti savybes
      * head -> nuoroda į sąrašo pirmajį mazgą
      * taip -> nuoroda į sąrašo paskutinijė mazgą
    * Sukurkite konstruktorių, jog jis galėtų priimti pirmu parametru perduotą ListNode elementą ir priskirti
    jį savybėms List.head ir List.tail
    Konstruktoriaus ListNode tipo parametras neprivalomas. Neperdavus parametro, List klasės objekto savybės tail ir head turi būti null

  3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             d -> a -> b -> c

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  4. Sukurkite metodą pridėti sąrašo elementui į sąrašo galą.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             a -> b -> c -> d

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją - callback
  su kiekvieno mazgo reikšme pradedant List.head ir baigiant List.tail
    * ForEachCallback tipas: (value: T) => void
    * List.forEach tipas: ( callback: ForEachCallback) => void)
*/

// ↓↓↓ Tipai ↓↓↓

type ListNode<L> = {
  data: L,
  next: ListNode<L> | null
};

type ForEachCallback<L> = (value: L) => void;

// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓

class List<Type> {
  private head: ListNode<Type> | null;
  private tail: ListNode<Type> | null;

  constructor(initialNode?: ListNode<Type>) {
    if (initialNode !== undefined) {
      this.head = initialNode;
      this.tail = initialNode;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  private addFirstElement = (node: ListNode<Type>) => {
    this.head = node;
    this.tail = node;
  }

  public addNodeStart = (node: ListNode<Type>): void => {
    if (this.head === null) {
      this.addFirstElement(node);
    } else {
      node.next = this.head;
      this.head = node;
    }
  };

  public addNodeEnd = (node: ListNode<Type>): void => {
    if (this.tail === null) {
      this.addFirstElement(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  public forEach = (callback: ForEachCallback<Type>): void => {
    if (this.head === null) return;

    let currentNode: ListNode<Type> = this.head;

    while (true) {
      callback(currentNode.data);
      if (currentNode.next === null) break;
      currentNode = currentNode.next;
    }
  };
}
// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓

const stringNode1: ListNode<string> = { data: 'running', next: null };
const stringNode2: ListNode<string> = { data: 'cycling', next: stringNode1 };

const stringList: List<string> = new List();

const numberNode: ListNode<number> = { data: 21, next: null };
const numberList: List<number> = new List(numberNode);

const stringNodeToAdd1: ListNode<string> = { data: 'cherry', next: null };
const stringNodeToAdd2: ListNode<string> = { data: 'blueberry', next: null };
const stringNodeToAdd3: ListNode<string> = { data: 'cranberry', next: null };

const numberNodeToAdd1: ListNode<number> = { data: 3, next: null };
const numberNodeToAdd2: ListNode<number> = { data: 2, next: null };
const numberNodeToAdd3: ListNode<number> = { data: 1, next: null };

// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
  console.log({
    listNode1: stringNode1,
    listNode2: stringNode2,
  });
}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');
{
  console.log('empty string list');
  console.log(stringList);

  console.log('number list');
  console.log(numberList);
}
console.groupEnd();

console.group('3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{
  console.log('String list');
  console.log(stringList);

  console.log('Adding Mazgas 1', stringNodeToAdd1);
  stringList.addNodeStart(stringNodeToAdd1);
  console.log('list after addition', { ...stringList });

  console.log('Adding Mazgas 2', stringNodeToAdd2);
  stringList.addNodeStart(stringNodeToAdd2);
  console.log('list after addition', { ...stringList });

  console.log('Adding Mazgas 3', stringNodeToAdd3);
  stringList.addNodeStart(stringNodeToAdd3);
  console.log('list after addition', { ...stringList });

}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.');
{
  console.log('Number list');
  console.log(numberList);

  console.log('Adding Mazgas 1', numberNodeToAdd1);
  numberList.addNodeEnd(numberNodeToAdd1);
  console.log('list after addition', { ...numberList });

  console.log('Adding Mazgas 2', numberNodeToAdd2);
  numberList.addNodeEnd(numberNodeToAdd2);
  console.log('list after addition', { ...numberList });

  console.log('Adding Mazgas 3', numberNodeToAdd3);
  numberList.addNodeEnd(numberNodeToAdd3);
  console.log('list after addition', { ...numberList });
}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
  console.log('printing string list');
  stringList.forEach((str) => console.log(str));

  const stringArr: string[] = [];
  const putInStringArr = (x: number): void => {
    stringArr.push(String(x));
  };

  console.log('printing number list');
  numberList.forEach(putInStringArr);
  const numberListStringRepresentation: string = stringArr.join(' → ');
  console.log(numberListStringRepresentation);
}
console.groupEnd();
