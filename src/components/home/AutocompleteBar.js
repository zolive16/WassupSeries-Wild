// This is a more complete example of an autocomplete component
// with custom styling, filtering of objects, and more.
// Much of the irrelevant bits are in the ../shared file.
// which you may also want to become familiar with as many
// examples will use those as well.
import React from 'react';
import Downshift from 'downshift';
import { Link } from 'react-router-dom';
import {
  Menu,
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon,
  css,
  itemToString,
  getItems
} from './AutocompleteFunctions';
import axios from 'axios';
import '../../style/pages/formPage.css';

class AutocompleteBar extends React.Component {
  constructor() {
    super();
    this.state = {
      seriesId: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.tvmaze.com/shows')
      .then(res =>
        localStorage.setItem(
          'allSeries',
          JSON.stringify(Object.keys(res.data).map(serie => res.data[serie]))
        )
      );
  }

  handleAutocomplete = selection => {
    localStorage.setItem('updateName', selection.name);
  };

  render() {
    return (
      <div
        {...css({
          display: 'flex',
          flexDirection: 'column',
          marginTop: 0
        })}
      >
        <Downshift
          onChange={selection => this.handleAutocomplete(selection)}
          itemToString={itemToString}
        >
          {({
            getLabelProps,
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
            isOpen,
            clearSelection,
            selectedItem,
            inputValue,
            highlightedIndex
          }) => (
            <div
              {...css({
                width: 250,
                margin: 'auto'
              })}
            >
              {' '}
              {/* <Label {...getLabelProps()}></Label> */}{' '}
              <div
                {...css({
                  position: 'relative'
                })}
              >
                <Input
                  {...getInputProps({
                    isOpen,
                    placeholder: 'Cherche une série...'
                  })}
                />{' '}
                {selectedItem ? (
                  <ControllerButton onClick={clearSelection} aria-label="clear selection">
                    <XIcon />
                  </ControllerButton>
                ) : (
                  <ControllerButton {...getToggleButtonProps()}>
                    <ArrowIcon isOpen={isOpen} />
                  </ControllerButton>
                )}{' '}
              </div>{' '}
              <div
                {...css({
                  position: 'relative'
                })}
              >
                <Menu
                  {...getMenuProps({
                    isOpen
                  })}
                >
                  {' '}
                  {isOpen
                    ? getItems(inputValue).map((item, index) => {
                        console.log(item);
                        return (
                          <Link to={`/${item.name}/${item.key}`}>
                            <Item
                              key={item.id}
                              {...getItemProps({
                                item,
                                index,
                                isActive: highlightedIndex === index,
                                isSelected: selectedItem === item
                              })}
                            >
                              {itemToString(item)}{' '}
                            </Item>{' '}
                          </Link>
                        );
                      })
                    : null}{' '}
                </Menu>{' '}
              </div>{' '}
            </div>
          )}{' '}
        </Downshift>{' '}
      </div>
    );
  }
}

export default AutocompleteBar;
