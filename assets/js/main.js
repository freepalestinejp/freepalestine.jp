import { links } from "./links.js";

const linkContainer = document.getElementById("links");

function addLink(name, url, image, ext) {
  var link = `<a href="${url}" class="link"`;
  if (ext) {
    link += ` target="blank"`;
  }
  link += `>`;
  if (image) {
    link += `<img src="${image}"/>`;
  }
  link += `<span>${name}  </span>
  </a>
  `;

  return link;
}

let html = "";

links.forEach((e) => {
    let url = e.url;
    let name = e.name;
    let image = e.image;
    let ext = e.ext;

    html += addLink(name, url, image, ext);
});

linkContainer.innerHTML = html;
