import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });

//Writing testing cases

test("Checking h1 tag", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toContain('Unit Testing')
})

test("Checking h2 tag", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h2').text()).toContain('Ro-One InfoTech')
})

test("Testing props", () => {
  const wrapper = shallow(<App name="Tarun"/>);
  const welcomeMessage = wrapper.find('#welcome');
  expect(welcomeMessage.text()).toContain('Welcome Tarun');
})

test("Checking Initial State value ", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('#initial_value').text()).toContain('0');
})

test("Checking onClick ", () => {
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');
  expect(wrapper.find('#initial_value').text()).toContain('1');
})
