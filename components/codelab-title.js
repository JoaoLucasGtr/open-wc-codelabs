export default class CodelabTitle extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      `<span style="font-size: x-large; margin-bottom: 10px;">
         <strong>${this.title}</strong>
       </span>
      `;
  }
}