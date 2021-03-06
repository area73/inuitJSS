import JSSConfig from '../settings/JSSConfig';

test('test JSSConfig to add a new config Object', () => {
  const config = { test: 'newParam' };
  const a = JSSConfig.getInstance(config);
  expect(a).toMatchObject(config);
});

test('test JSSConfig is an object', () => {
  expect(typeof JSSConfig).toBe('object');
});

test('test JSSConfig is a singleton', () => {
  expect(() => new JSSConfig()).toThrowError();
  const a = JSSConfig.getInstance();
  const b = JSSConfig.getInstance();
  expect(a).toEqual(b);
});
