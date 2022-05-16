import { classNames, classNamesFromObject } from '../src/classNames';

describe('Convert class objects to strings for true values.', () => {
  it('should combine the class object', () => {
    expect(classNamesFromObject({ test: true, 'admin-view': true })).toEqual(
      'test admin-view',
    );
  });

  it('should only combine true class object', () => {
    expect(classNamesFromObject({ test: 5 < 7, 'admin-view': 7 < 4 })).toEqual(
      'test',
    );
  });

  it('should return undefined if result is empty', () => {
    expect(classNamesFromObject({ test: false, 'admin-view': false })).toEqual(
      undefined,
    );
  });
});

describe('Convert class elements to strings.', () => {
  it('should combine the class names', () => {
    expect(classNames('a', 'bc', 'd')).toEqual('d bc a');
  });

  it('should ignore booleans in result', () => {
    expect(classNames(true, 'a', 'bc', false, 'd')).toEqual('d bc a');
  });

  it('should work conditionally with the && trick', () => {
    expect(classNames(6 > 5 && 'a', 'bc', 5 > 6 && 'd')).toEqual('bc a');
  });

  it('should return undefined if null was provided', () => {
    expect(classNames(5 > 6 && 'd')).toEqual(undefined);
  });

  it('should return undefined if no arguments were provided', () => {
    expect(classNames()).toEqual(undefined);
  });

  it('should automatically parse class objects', () => {
    expect(classNames({ test: true, 'admin-view': false })).toEqual('test');
  });

  it('should work with all class element types', () => {
    expect(
      classNames(
        { test: true, 'admin-view': false },
        6 > 5 && 'a',
        'abc',
        5 > 6 && 'd',
      ),
    ).toEqual('abc a test');
  });
});
