import { LitElement, html, property, customElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { buttonStyles } from './styles';

@customElement('te-button')
export class ButtonElement extends LitElement {
  @property({ type: String }) color = 'primary';

  static styles = buttonStyles;

  render() {
    return html`
      <button 
        type="button" 
        class=${classMap({ btn: true, [this.color]: true})}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `
  }

  private handleClick(e: MouseEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('myclick', e));
  }
}
