function mobileMenuClicked() {
  document.getElementById("mobile-menu-icon").classList.toggle("expanded");
  document.getElementById("mobile-menu-items").toggleAttribute("hidden");
  document.getElementById("my-logo").toggleAttribute("hidden");
}

document
  .querySelector("#mobile-menu-icon")
  .addEventListener("click", mobileMenuClicked);

document.querySelectorAll("#mobile-menu-items li").forEach((item) => {
  item.addEventListener("click", mobileMenuClicked);
});

const previousWorks = [
  {
    prName: "My Portfolio",
    description: `My portfolio project is a personal Portfolio website that showcase my abilities as a software developer and technologies I use. It is part of Microverse training projects. The template used for the project is for a software developer portfolio.`,
    langs: ["css", "html", "JavaScript"],
    links: [
      "https://adamilare.github.io/My-Portfolio/",
      "https://github.com/adamilare/My-Portfolio",
    ],
    refId: 0,
    image_src: "./images/portfolio.jpg",
  },
  {
    prName: "Microverse Captstone Project-1",
    description: `Capstone Project-1 is part of introductory projects in Microverse software development program. The template adapted for the project is for an event program.`,
    langs: ["css", "html", "JavaScript"],
    links: [
      "https://adamilare.github.io/Capstone-1/",
      "https://github.com/adamilare/capstone-1",
    ],
    refId: 1,
    image_src: "./images/capstone-1.jpg",
    img: { desktop: "bkg-4", mobile: "", alt: "" },
  },

  {
    prName: "ToDo List",
    description: `To Do List is part of introductory projects in Microverse software development program. The project implementation introduces developers to basic Webpack development.`,
    langs: ["css", "html", "JavaScript", "WebPack"],
    links: [
      "https://adamilare.github.io/To-Do-List/",
      "https://github.com/adamilare/To-Do-List",
    ],
    refId: 2,
    image_src: "./images/todo-list.jpg",
    img: { desktop: "bkg-2", mobile: "", alt: "" },
  },
  {
    prName: "Awesome Books",
    description: `Awesome books is part of Microverse training projects. This project is a basic website that allows a user to add/remove books from a list of collection.`,
    langs: ["css", "html", "JavaScript", "WebPack"],
    links: [
      "https://adamilare.github.io/awesome-book/",
      "https://github.com/adamilare/awesome-book",
    ],
    refId: 3,
    image_src: "./images/awesome-books.jpg",
    img: { desktop: "bkg-3", mobile: "", alt: "" },
  },
  {
    prName: "YouTube Clone",
    description: `YouTube clone is a basic clone of YouTube UI. It was developed as part of Microverse Pre-Enrollment Bootcamp requirements.`,
    langs: ["css", "html"],
    links: [
      "https://adamilare.github.io/youtube-demo/",
      "https://github.com/adamilare/youtube-demo",
    ],
    refId: 4,
    image_src: "./images/youtube-clone.jpg",
    img: { desktop: "bkg-4", mobile: "", alt: "" },
  },
  {
    prName: "YouTube Clone",
    description: `YouTube clone is a basic clone of YouTube UI. It was developed as part of Microverse Pre-Enrollment Bootcamp requirements.`,
    langs: ["css", "html"],
    links: [
      "https://adamilare.github.io/youtube-demo/",
      "https://github.com/adamilare/youtube-demo",
    ],
    refId: 5,
    image_src: "./images/youtube-clone.jpg",
    img: { desktop: "bkg-4", mobile: "", alt: "" },
  },
  {
    prName: "YouTube Clone",
    description: `YouTube clone is a basic clone of YouTube UI. It was developed as part of Microverse Pre-Enrollment Bootcamp requirements.`,
    langs: ["css", "html"],
    links: [
      "https://adamilare.github.io/youtube-demo/",
      "https://github.com/adamilare/youtube-demo",
    ],
    refId: 6,
    image_src: "./images/youtube-clone.jpg",
    img: { desktop: "bkg-4", mobile: "", alt: "" },
  },
  // {
  //   prName: "Microverse Hello",
  //   description: `Microverse Hello is one of the Microverse elementary projects to illustrate GitHub flow, applying linters and using feature branch `,
  //   langs: ["css", "html"],
  //   links: [
  //     "https://adamilare.github.io/Microverse-Hello/",
  //     "https://github.com/adamilare/Microverse-Hello",
  //   ],
  //   refId: 5,
  //   image_src: "./images/microverse-hello.jpg",
  //   img: { desktop: "bkg-2", mobile: "", alt: "" },
  // },
];

const worksWrapper = document.getElementById("works-wrapper");
const workModal = document.getElementById("work-modal");
const workItem = document.getElementsByClassName("work-item");
workItem.onclick = () => {
  workModal.style.display = "block";
};

function getLangsList(langs) {
  let list = "";
  if (langs) {
    langs.forEach((item) => {
      list += `<li class="stack-item">${item}</li>`;
    });
  }

  return list;
}

function getWorksArticleContent({ prName, description, langs, refId }) {
  return `<h3>${prName}</h3>
              <p>
                ${description}
              </p> 
              <ul class="work-stack">
                ${getLangsList(langs)}                
              </ul> 
              <button class="btn-a" data-target=${refId}>See Project</button>`;
}

function setWorksFirstItem(details) {
  const firstItemImg = document.createElement("img");
  firstItemImg.className = "work-item";
  firstItemImg.id = "works-placeholder";
  firstItemImg.src = `${details.image_src}`;
  firstItemImg.alt =
    "Multipost stories, a selection of privately personalized reads.";

  worksWrapper.appendChild(firstItemImg);

  const firstItemDetail = document.createElement("article");
  firstItemDetail.className = "work-item";
  firstItemDetail.id = "first-item";

  firstItemDetail.innerHTML = getWorksArticleContent(details);

  worksWrapper.appendChild(firstItemDetail);
}

function setWorksOtherDesktop(details) {
  const firstItemDetail = document.createElement("article");
  firstItemDetail.className = `work-item desktop ${details.img.desktop}`;
  firstItemDetail.setAttribute("data-target", details.refId);

  firstItemDetail.innerHTML = getWorksArticleContent(details);

  return firstItemDetail;
}

function setWorksOtherMobile(details) {
  const firstItemDetail = document.createElement("article");
  firstItemDetail.className = "work-item mobile";

  firstItemDetail.innerHTML = getWorksArticleContent(details, true);

  return firstItemDetail;
}

function setWorksOther(details) {
  worksWrapper.appendChild(setWorksOtherDesktop(details));
  worksWrapper.appendChild(setWorksOtherMobile(details));
}

function displayPreviousWorks() {
  for (let i = 0; i < previousWorks.length; i += 1) {
    if (i === 0) setWorksFirstItem(previousWorks[0]);
    else if (i > 0) setWorksOther(previousWorks[i]);
  }
}

function getWorkModalContent(id) {
  const data = previousWorks[id];
  return `
  <div class="content">
          <div><h3>${data.prName}</h3><span id="cancel-modal"></span></div>
          <ul class="work-stack">${getLangsList(data.langs)}</ul>
          <div class="modal-details">
            <img src="${data.image_src}" alt="Gist me">
            <div>
              <p>${data.description}</p>
              <div id="ref-buttons">
                <a href="${
                  data.links[0]
                }" id="live-preview" class="btn-a w-part" data-target=${
    data.refId
  } target="_blank" rel="noopener noreferrer">Live Preview <span></span></a>
                  <a href="${
                    data.links[1]
                  }" id="source-code" class="btn-a w-part" data-target=${
    data.refId
  } target="_blank" rel="noopener noreferrer">Source Code<span></span></a>
              </div>
            </div>
          </div>
        </div>
  `;
}

function closeModal(modal) {
  modal.style.display = "none";
}

function launchWorkModal(dataId) {
  const modal = document.getElementById("work-modal");
  modal.innerHTML = getWorkModalContent(dataId);
  modal.querySelector("#cancel-modal").onclick = () => closeModal(modal);
  modal.querySelector("#cancel-modal").onclick = () => closeModal(modal);
  modal.querySelectorAll("a").forEach((btn) => {
    btn.onclick = () => closeModal(modal);
  });
  modal.style.display = "flex";
}

function prepareModal() {
  document.querySelectorAll(".work-item button").forEach((item) => {
    item.onclick = () => {
      launchWorkModal(item.getAttribute("data-target"));
    };
  });

  document.querySelectorAll(".work-item").forEach((item) => {
    item.onclick = () => {
      launchWorkModal(item.getAttribute("data-target"));
    };
  });
}

window.onload = () => {
  displayPreviousWorks();
  prepareModal();
};
