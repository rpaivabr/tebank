import { LitElement, html, property, customElement } from 'lit-element';

@customElement('te-greeting')
export class GreetingElement extends LitElement {
  @property({ type: String }) title = 'teste';

  render() {
    return html`<h1>Welcome to ${this.title}!</h1>`
  }
}
