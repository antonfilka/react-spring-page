jest.mock('axios');

describe('Testing sum', () => {
  const sum = (a, b) => {
    return a + b;
  };

  it('should equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('also should equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});

// describe('Authorization', () => {
//   const responce = { data: { isAuth: true } };
//   axios.post.mockResolvedValueOnce(responce);

//   // const result = authorize();
//   expect(axios.post).toHaveBeenCalledWith('http://localhost:8000/api/login');
// });
