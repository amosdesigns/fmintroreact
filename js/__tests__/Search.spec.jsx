import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search,{Unwrapped as UnwrappedSearch} from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} seachTerm="" />);
  expect(component).toMatchSnapshot();
});

// test no input add to the search
test('Search should render correct amount of show', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} seachTerm="" />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

// test if one value is inputed as the value.
test('Search should render correct amount of show based on search term', () => {
  const searchWord = 'black';
  const component = shallow(<UnwrappedSearch shows={preload.shows} seachTerm={searchWord}/>);
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;

  expect(component.find(ShowCard).length).toEqual(showCount);
});
