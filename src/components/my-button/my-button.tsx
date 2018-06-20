import { Component } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "my-button.css"
})
export class MyButton {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
