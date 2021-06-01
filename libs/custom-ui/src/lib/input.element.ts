import { LitElement, html, property, customElement } from 'lit-element';

@customElement('te-input')
export class InputElement extends LitElement {
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';

  render() {
    return html`<input value="${this.value}" placeholder="${this.placeholder}" />`
  }
}
