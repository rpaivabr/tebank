import { LitElement, html, customElement } from 'lit-element';
import { logoStyles } from './styles';

@customElement('te-logo')
export class LogoElement extends LitElement {
  static styles = logoStyles;

  render() {
    return html`
      <div class="logo">
        <span>Te</span> Bank
      </div> 
    `
  }
}
