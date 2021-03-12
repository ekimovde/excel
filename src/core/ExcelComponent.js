import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emitter = options.emitter;
    this.unsubScribers = [];

    this.prepare();
  }

  prepare() {}

  toHTML() {
    return "";
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, func) {
    const unsub = this.emitter.subscribe(event, func);

    this.unsubScribers.push(unsub);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubScribers.forEach((unsub) => unsub());
  }
}
