import { LinkedList } from './LinkedList';

describe('Test Linked List methods', () => {
  const List = new LinkedList();
  describe('length method', () => {
    it('Should return 0 when List is empty', () => {
      expect(List.length).toBe(0);
    });

    it("Should return 1 when there's one element in the List", () => {
      List.push(2);
      expect(List.length).toBe(1);
    });
  });

  describe('toArray method', () => {
    it('Should convert the List to an array', () => {
      expect(List.toArray()).toBeInstanceOf(Array);
    });

    it('Should convert to an array with the same length of the list', () => {
      expect(List.toArray().length).toBe(List.length);
    });
  });

  describe('push method', () => {
    it('Should return the element inserted from the list', () => {
      expect(List.push(47)).toBe(47);
    });

    it('Should append an element in the end of the list', () => {
      expect(List.toArray().at(-1)).toBe(47);
    });
  });
  describe('pop method', () => {
    it('Should return the element that is getting removed from the list', () => {
      expect(List.pop()).toBe(47);
    });

    it('Should remove the last element in the list', () => {
      expect(List.toArray().at(-1)).toBe(2);
    });
  });

  describe('unshift method', () => {
    it('Should return the element inserted in the list', () => {
      expect(List.unshift('78')).toBe('78');
    });

    it('Should append the element in the beginning of the List', () => {
      expect(List.toArray()[0]).toBe('78');
    });
  });

  describe('shift method', () => {
    it('Should return the element removed from the list', () => {
      expect(List.shift()).toBe('78');
    });

    it('Should remove the element in the beginning of the List', () => {
      expect(List.toArray()[0]).not.toBe('78');
    });
  });
});
