import React, { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('State: ', this.state.value);
  };

  render() {
    return (
      <div>
        <header class={css.searchbar}>
          <form class={css.form} onSubmit={this.handleSubmit}>
            <button type="submit" class={css.button}>
              🔍
              <span class={css.buttonLabel}>Search</span>
            </button>

            <input
              class={css.input}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </form>
        </header>
      </div>
    );
  }
}
