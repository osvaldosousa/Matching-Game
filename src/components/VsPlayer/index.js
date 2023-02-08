import './style.css';

export function vsPlayer(content = "Vs") {
  return /* html */ `
    <span class="vs-player">
      ${content}
    </span>
  `;
}