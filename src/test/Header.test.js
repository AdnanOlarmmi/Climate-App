import Header from '../components/countriesComponents/Header';


describe('Header', () => {
    it('render Header Component', () => {
      expect(Header).toMatchSnapshot();
    });
  });